import { join } from 'path';
import { execSync } from 'child_process';

import type { BundleExecutorSchema } from './schema';

export default async function bundleExecutor(options: BundleExecutorSchema) {
  try {
    console.log(options);

    const result = execSync(`go run ${join(__dirname, 'executor.go')}`);
    console.log(String(result));

    return { success: true };
  } catch (error) {
    console.error(error.message);

    return { success: false };
  }
}
