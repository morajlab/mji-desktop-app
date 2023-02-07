package main

import (
	"github.com/gin-gonic/gin"
	"github.com/morajlab/go-vagrant"
	"net/http"
)

func vagrantGlobalStatusRoute(context *gin.Context) {
	client, err := vagrant.NewVagrantClient()

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
	vagrant_routes := map[string]func(*gin.Context){
		"global-status": vagrantGlobalStatusRoute,
	}

	vagrant_gp := router.Group("/vagrant")

	for route, fn := range vagrant_routes {
		vagrant_gp.POST("/"+route, fn)
	}
}

func addPluginsRoute(router *gin.RouterGroup) {
	router.GET("/plugins", func(context *gin.Context) {
		plugins, err := GetPlugins()

		// TODO: Cache plugins variable
		// TODO: Return err to client

		if err == nil {
			context.JSON(http.StatusOK, gin.H{
				"plugins": plugins,
			})
		}
	})
}

func CreateAPI(router *gin.Engine) error {
	api := router.Group("/api")
	api_v1 := api.Group("/v1")

	addVagrantRoutes(api_v1)
	addPluginsRoute(api_v1)

	return nil
}
