package logging

import (
	"os"
	"github.com/sirupsen/logrus"
)

type adapter interface {
	New()
	Info(message string, fields []Field)
}

type SirupsenAdapter struct {
	log *logrus.Logger
}

type Field struct {
    Name     string
    Value	 string
}

func (r *SirupsenAdapter) New() {
	r.log = logrus.New()

	r.log.Out = os.Stdout
}

func (r *SirupsenAdapter) Info(message string, fields []Field) {
	// Convert any fields to logrus Fields
	if fields != nil {
		for _, s := range fields {
			newFields := logrus.Fields{s.Name: s.Value}
			r.log.WithFields(newFields).Info("HELLO")
		}
	} else {
		r.log.WithFields(logrus.Fields{"gary": "hello"}).Info(message)
	}

}
