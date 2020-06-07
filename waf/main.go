package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/kataras/iris/v12"

	"github.com/kataras/iris/v12/middleware/logger"
	"github.com/kataras/iris/v12/middleware/recover"
)

func main() {
	app := iris.New()
	app.Logger().SetLevel("debug")
	// Optionally, add two built'n handlers
	// that can recover from any http-relative panics
	// and log the requests to the terminal.
	app.Use(recover.New())
	app.Use(logger.New())

	// Create new WAF
	waf := simpaticoIrisWaf{}
	// Handle all requests in the same fasion - GET/POST/PUT we don't care
	app.Handle("GET", "/", func(ctx iris.Context) {
		log.Printf("ctx main:%+v\n", ctx)
		waf.ctx(ctx)

		errAuthentication := waf.authentication()
		if errAuthentication != nil {
			log.Printf("Authentication failed")
			ctx.StatusCode(iris.StatusForbidden)
		}

		errAuthorisation := waf.authorisation()
		if errAuthorisation != nil {
			log.Printf("Authorisation failed")
			ctx.StatusCode(iris.StatusForbidden)
		}

		// Sanitise the urls params or reject
		sanitised, errorSanitisation := waf.sanitisation()
		if errorSanitisation != nil {
			ctx.StatusCode(iris.StatusBadRequest)
		}
		log.Printf(sanitised)

		// Route the request to it's destination and process the response
		respProxy, _ := http.Get("https://0040d099ab7e.ngrok.io/api/v1/fetchDebate?name=8475c843.ngrok.io")
		js := json.Unmarshal(respProxy.Body, &js)

		log.Printf("js:%s", js)
		ctx.JSON(iris.StatusOK, js)
	})

	app.Run(iris.Addr(":8081"), iris.WithoutServerError(iris.ErrServerClosed))
}
