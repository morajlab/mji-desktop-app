package main

import (
  "github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Static("/", "../../dist/packages/frontend/frontend")

	router.Run(":4200")
}
