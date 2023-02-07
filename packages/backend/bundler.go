package main

import (
  "os"
  "path/filepath"
  "github.com/evanw/esbuild/pkg/api"
)

func Bundle() {
  input, err := filepath.Abs(filepath.Join("..", "frontend", "frontend", "src", "main.tsx"))

  if err != nil {
    os.Exit(1)
  }

  // output, _ := filepath.Abs(filepath.Join("..", "..", "dist", "packages", "frontend", "frontend", "output.js"))
  output_dir, _ := filepath.Abs(filepath.Join("..", "..", "dist", "packages", "frontend", "frontend"))

  // TODO: Add SourceMap option
  // TODO: Add Watch option
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{input},
    // Outfile:     output,
    Outdir:      output_dir,
    MinifyWhitespace: true,
    Format:      api.FormatCommonJS,
    Bundle:      true,
    Write:       true,
    LogLevel:    api.LogLevelInfo,
  })

  if len(result.Errors) > 0 {
      os.Exit(1)
  }
}

func main() {
  Bundle()
}
