package storage

import (
	"context"
	"time"
	"log"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Adapter interface {
	New()
	Close()
	InsertMessage(action string, data string, raw string)
}

type Message struct {
    Action string `json:action,omitempty”`
    Data string `json:”body,omitempty”`
    Raw string `json:raw,omitempty”`
}

type MongoDBAdapter struct {
	client *mongo.Client
	ctx context.Context
}

func (r *MongoDBAdapter) Close() {
	r.client.Disconnect(r.ctx)
}

func (r *MongoDBAdapter) New() {
	var err error
	r.client, err = mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))
    if err != nil {
        log.Fatal(err)
    }
    r.ctx, _ = context.WithTimeout(context.Background(), 10*time.Second)
    err = r.client.Connect(r.ctx)
    if err != nil {
		fmt.Println("HERE")
        log.Fatal(err)
	}
}

func (r *MongoDBAdapter) InsertMessage(action string, body string, raw string) {
	message := Message{action, body, raw}
	
	collection := r.client.Database("bloodhound").Collection("messages")
	
	insertResult, err := collection.InsertOne(context.TODO(), message)
		
	if err != nil {
		log.Fatal(err)
	}
		
	fmt.Println("Inserted post with ID:", insertResult.InsertedID)	
}