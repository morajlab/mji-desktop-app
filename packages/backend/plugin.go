package main

import (
	"fmt"
	"os"
	"path/filepath"
	"encoding/json"
)

type Plugins []map[string]interface{}

func getDirs(path string) ([]string, error) {
	var dirs []string

	cwd, err := os.Open(path)

	if err != nil {
		return dirs, err
	}

	file_info, err := cwd.Readdir(-1)
	cwd.Close()

	if err != nil {
		return dirs, err
	}

	for _, file := range file_info {
		if file.IsDir() {
			dirs = append(dirs, file.Name())
		}
	}

	return dirs, nil
}

func GetPlugins() (Plugins, error) {
	var plugins Plugins
  plugins_root, err := filepath.Abs(filepath.Join("..", "plugins", "src"))

  if err != nil {
    return plugins, err
  }

	dirs, err := getDirs(plugins_root)

	if err != nil {
    return plugins, err
	}

	for _, dir := range dirs {
		package_path := filepath.Join(plugins_root, dir, "package.json")
		data_json, err := os.ReadFile(package_path)

		if err == nil {
		  var data_map map[string]interface{} // TODO: Needs garbage collecting

			json.Unmarshal([]byte(data_json), &data_map)
			plugins = append(plugins, map[string]interface{}{ "path": package_path, "meta": data_map })
		}
	}

	return plugins, nil
}
