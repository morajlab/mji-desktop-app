package main

import (
  "net/http"
  "path/filepath"
  "github.com/gin-gonic/gin"
  "github.com/bmatcuk/go-vagrant"
)

func createStaticRouter(router *gin.Engine) {
  static_path, err := filepath.Abs(filepath.Join("..", "..", "dist", "packages", "frontend", "frontend"))

  if err != nil {
      panic(err)
  }

	router.Static("/static/", static_path)
}

// API endpoints
// TODO: Seperate api section
func createAPIRouter(router *gin.Engine) {
  api := router.Group("/api")
  api_v1 := api.Group("/v1")

  addVagrantRoutes(api_v1)
}

func getVagrantGlobalStatus(context *gin.Context) {
  client, err := vagrant.NewVagrantClient(".")

  if err != nil {
    panic(err)
  }

  command := client.GlobalStatus()

  if err := command.Run(); err != nil {
    panic(err)
  }

  context.JSON(http.StatusOK, gin.H{
    "message": command.Status,
  })
}

func addVagrantRoutes(router *gin.RouterGroup) {
  vagrant_routes := map[string]func(*gin.Context) {
    "global-status": getVagrantGlobalStatus,
  }

  vagrant_gp := router.Group("/vagrant")

  for route, fn := range vagrant_routes {
    vagrant_gp.POST("/" + route, fn)
  }
}

func main() {
	router := gin.Default()

  createAPIRouter(router)
  createStaticRouter(router)

  // TODO: Get port from cli options
	router.Run(":4200")
}
