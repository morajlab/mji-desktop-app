package main

import (
  "path/filepath"
  "github.com/gin-gonic/gin"
)

func createStaticRouter(router *gin.Engine) error {
  static_path, err := filepath.Abs(filepath.Join("..", "..", "dist", "packages", "frontend", "frontend"))

  if err != nil {
    return err
  }

	router.Static("/static/", static_path)

  return nil
}

func main() {
	router := gin.Default()

  err := CreateAPI(router)

  if err != nil {
    panic(err)
  }

  err = createStaticRouter(router)

  if err != nil {
    panic(err)
  }

  // TODO: Get port from cli options
	router.Run(":4200")
}
