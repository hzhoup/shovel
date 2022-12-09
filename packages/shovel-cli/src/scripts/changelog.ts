import ora from 'ora'
import conventional from 'conventional-changelog'
import fse from 'fs-extra'
import { resolve as resolvePath } from 'path'
import { CWD } from '../common/constant.js'

const { createWriteStream } = fse

interface ChangeCommandOptions {
  file?: string
  releaseCount?: number
}

export const changelog: (options: ChangeCommandOptions) => Promise<void> = async ({
  releaseCount = 0,
  file = 'CHANGELOG.md'
} = {}) => {
  const notes = ora().start(`⏳ ⏳ ⏳ generating changelog`)
  return new Promise((resolve) => {
    conventional({ preset: 'angular', releaseCount })
      .pipe(createWriteStream(resolvePath(CWD, file)))
      .on('close', () => {
        notes.succeed('⌛ ⌛ ⌛ generating changelog success')
        resolve()
      })
  })
}
