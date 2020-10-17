package web

import (
	"github.com/kataras/iris/v12"
)

type adapter interface {
    New()
    Listen()
}

type IrisAdapter struct {
	app *iris.Application
}

func (r *IrisAdapter) New() {
	r.app = iris.New()
}

func (r *IrisAdapter) Listen(port string) {
    r.app.Listen(port)
}