package main

type waf interface {
	ctx()
	authentication() error
	authorisation() error
	sanitisation() (string, error)
	routing() float64
}
