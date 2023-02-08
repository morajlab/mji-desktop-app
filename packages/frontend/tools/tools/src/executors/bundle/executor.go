package main

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
)

func getExecutorRoot() (string, error) {
	var executor_root string
	tsconfig_base, err := filepath.Abs("tsconfig.base.json")

	if err != nil {
		return executor_root, err
	}

	data_json, err := os.ReadFile(tsconfig_base)

	if err != nil {
		return executor_root, err
	}

	cwd, err := os.Getwd()

	if err != nil {
		return executor_root, err
	}

	var data_map map[string]interface{} // TODO: Needs garbage collecting

	json.Unmarshal([]byte(data_json), &data_map)

	compiler_options := data_map["compilerOptions"].(map[string]interface{})
	paths := compiler_options["paths"].(map[string]interface{})
	src_path := paths["@master/frontend-tools"].([]interface{})[0].(string)
	executor_root = filepath.Join(cwd, filepath.Dir(src_path), "executors", "bundle")

	return executor_root, nil
}

func getSchema(schema *map[string]interface{}) error {
	executor_root, err := getExecutorRoot()

	if err != nil {
		return err
	}

	data_json, err := os.ReadFile(filepath.Join(executor_root, "schema.json"))

	if err != nil {
		return err
	}

	return json.Unmarshal([]byte(data_json), schema)
}

func main() {
	var schema map[string]interface{}
	err := getSchema(&schema)

	if err != nil {
		panic(err)
	}

	fmt.Println(schema)

	// for _, arg := range os.Args[1:] {
	// 	fmt.Println(arg)
	// }
}
