import { join } from 'path';
import { execSync } from 'child_process';

import type { PluginExecutorSchema } from './schema';

export default async function pluginExecutor({
  path,
  main,
  template,
}: PluginExecutorSchema) {
  if (!path) {
    console.log('path option is required');

    return { success: false };
  }

  // TODO: Validate 'path' and 'main' paths

  let command: string = `go run ${join(
    __dirname,
    'executor.go'
  )} --path=${path}`;

  if (main) {
    command += ` --main=${main}`;
  }

  if (template) {
    command += ` --template=${template}`;
  }

  try {
    const result = execSync(command);
    console.log(String(result));

    return { success: true };
  } catch (error) {
    console.error(error.message);

    return { success: false };
  }
}
