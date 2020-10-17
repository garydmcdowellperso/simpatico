package transport

import (
	"github.com/streadway/amqp"
	"fmt"
	"encoding/json"
	"strings"
	"net/http"
	"net/url"
	"bloodhound/storage"
)

type Message struct {
    Action string
    Data string
    Raw string
}

type adapter interface {
	New(db storage.Adapter)
	Close()
}

type AMQPAdapter struct {
	conn *amqp.Connection
	ch *amqp.Channel
	q amqp.Queue
}


func (r *AMQPAdapter) Close() {
	r.ch.Close()
	r.conn.Close()
}

func sendText(data string) {
	accountSid := "XXXXX"
	authToken := "XXXXX"
	urlStr := "https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages.json"

	msgData := url.Values{}
	msgData.Set("To","+33760792881")
	msgData.Set("From","+14049912016")
	msgData.Set("Body",data)
	msgDataReader := *strings.NewReader(msgData.Encode())

	client := &http.Client{}
	req, _ := http.NewRequest("POST", urlStr, &msgDataReader)
	req.SetBasicAuth(accountSid, authToken)
	req.Header.Add("Accept", "application/json")
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

	resp, _ := client.Do(req)
	if (resp.StatusCode >= 200 && resp.StatusCode < 300) {
		var data map[string]interface{}
		decoder := json.NewDecoder(resp.Body)
		err := decoder.Decode(&data)
		if (err == nil) {
			fmt.Println(data["sid"])
		}
	} else {
		fmt.Println(resp.Status);
	}
}

func (r *AMQPAdapter) New(db storage.Adapter) {
	var m Message
	var err error
	r.conn, err = amqp.Dial("amqp://guest:Dinosaur10!@163.172.182.203:5672/")
	if err != nil {
		fmt.Println("error", err)
	}

	r.ch, err = r.conn.Channel()

	r.q, err = r.ch.QueueDeclare(
		"bloodhound", // name
		false,   // durable
		false,   // delete when unused
		false,   // exclusive
		false,   // no-wait
		nil,     // arguments
	  )

	msgs, err := r.ch.Consume(
		r.q.Name, // queue
		"",     // consumer
		true,   // auto-ack
		false,  // exclusive
		false,  // no-local
		false,  // no-wait
		nil,    // args
	  )
	forever := make(chan bool)

	go func() {
		for d := range msgs {
			fmt.Println("Received a message: %s", d.Body)

			if err := json.Unmarshal([]byte(d.Body), &m); err != nil {
				fmt.Println(err)
			}

			// Store
			db.InsertMessage(m.Action, m.Data, m.Raw)
			if m.Action == "Connection" {
				sendText(m.Data)
			}
		}
	}()

	<-forever
}