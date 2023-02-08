import { join } from 'path';
import { execSync } from 'child_process';

import type { BundleExecutorSchema } from './schema';

const convertOptions = (options: BundleExecutorSchema): string =>
  Object.entries(options)
    .map(([key, value]) => {
      switch (typeof value) {
        case 'boolean':
        case 'number':
          return [key, String(value)];
        case 'object':
          return [key, JSON.stringify(value)];
        default:
          return [key, value];
      }
    })
    .map(([key, value]) => `--${key}='${value}'`)
    .join(' ');

export default async function bundleExecutor(options: BundleExecutorSchema) {
  try {
    const result = execSync(
      `go run ${join(__dirname, 'executor.go')} ${convertOptions(options)}`
    );
    console.log(String(result));

    return { success: true };
  } catch (error) {
    console.error(error.message);

    return { success: false };
  }
}
