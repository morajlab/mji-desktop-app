import type { WebpackExecutorOptions } from '@nrwl/webpack';

export type BundleExecutorSchema = Omit<
  WebpackExecutorOptions,
  'compiler' | 'webpackConfig'
>;
