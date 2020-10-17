package main

import (
	"bloodhound/web"
	"bloodhound/logging"
	"bloodhound/transport"
	"bloodhound/storage"
)

func main() {
	// Get my logger
	logger := &logging.SirupsenAdapter{}

	logger.New()

	fields := []logging.Field {
		logging.Field{
			Name: "gary",
			Value: "hello2",
		},
		logging.Field{
			Name: "gary",
			Value: "hello3",
		},
	}
	logger.Info("Starting", fields)

	// Get my DB conn
	db := &storage.MongoDBAdapter{}

	db.New()

	// Connect to transport to receive messages
	queue := &transport.AMQPAdapter{}

	// Fire it off in a goroutine
	go queue.New(db)

	ia := web.IrisAdapter{}

	ia.New()

	ia.Listen(":8080")

	// Tidy up stuff
	queue.Close()
	db.Close()
}