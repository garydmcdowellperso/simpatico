package main

import (
	"log"
	"net/http"

	"github.com/kataras/iris/v12"
)

type simpaticoIrisWaf struct {
	irisCtx iris.Context
}

func (w simpaticoIrisWaf) ctx(ctxInput iris.Context) {
	log.Printf("ctx:%+v\n", ctxInput)
	w.irisCtx = ctxInput
}

func (w simpaticoIrisWaf) authentication() error {
	return nil
}

func (w simpaticoIrisWaf) authorisation() error {
	return nil
}

func (w simpaticoIrisWaf) sanitisation() (string, error) {
	return "Hello", nil
}

func (w simpaticoIrisWaf) routing() (resp *http.Response, err error) {
	respProxy, err := http.Get("https://21f49666.ngrok.io/api/v1/fetchDebate?name=8475c843.ngrok.io")
	return respProxy, err
}
