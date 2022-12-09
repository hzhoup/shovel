interface ChangeCommandOptions {
  file?: string
  releaseCount?: number
}
export declare const changelog: (options: ChangeCommandOptions) => Promise<void>
export {}
