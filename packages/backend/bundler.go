package main

import (
	"github.com/evanw/esbuild/pkg/api"
	"os"
)

func Bundle(options *api.BuildOptions) {
	// TODO: Add SourceMap option
	// TODO: Add Watch option
	// api.BuildOptions{
	// 	EntryPoints: []string{input},
	// 	// Outfile:     output,
	// 	Outdir:           output_dir,
	// 	MinifyWhitespace: true,
	// 	Format:           api.FormatCommonJS,
	// 	Bundle:           true,
	// 	Write:            true,
	// 	LogLevel:         api.LogLevelInfo,
	// }
	result := api.Build(*options)

	if len(result.Errors) > 0 {
		os.Exit(1)
	}
}
