package main

import (
  "net/http"
  "github.com/gin-gonic/gin"
)

func createStaticRouter(router *gin.Engine) {
	router.Static("/static/", "../../dist/packages/frontend/frontend")
}

// API endpoints
// TODO: Seperate api section
func createAPIRouter(router *gin.Engine) {
  api := router.Group("/api")
  api_v1 := api.Group("/v1")

  addVagrantRoutes(api_v1)
}

func addVagrantRoutes(router *gin.RouterGroup) {
  vagrant := router.Group("/vagrant")

  vagrant.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, "users")
	})
}

func main() {
	router := gin.Default()

  createAPIRouter(router)
  createStaticRouter(router)

  // TODO: Get port from cli options
	router.Run(":4200")
}
