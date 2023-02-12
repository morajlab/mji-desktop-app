package main

import (
	"log"
	"os"
	"path/filepath"
	"strings"
	"text/template"
)

type Options struct {
	path     string
	main     string
	template string
}

func main() {
	options := Options{}
	wd, _ := os.Getwd()

	for _, arg := range os.Args[1:] {
		arg_slice := strings.Split(arg, "=")
		value := filepath.Join(wd, arg_slice[1])
		key := arg_slice[0]

		switch key {
		case "--path":
			options.path = value
		case "--main":
			options.main = value
		case "--template":
			options.template = value
		}
	}

	if len(options.path) < 1 {
		os.Exit(1)
	}

	// TODO: Complete following section
	// if len(options.template) < 1 {
	// }
	// if len(options.main) < 1 {
	// }

	template, err := template.ParseFiles(options.template)

	if err != nil {
		log.Fatalln(err)
	}

	template.Execute(os.Stdout, nil)
}
