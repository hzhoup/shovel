import ora from 'ora'
import { execa } from 'execa'
import { ESLINT_EXTENSIONS } from '../common/constant.js'
import * as process from 'process'
import type { Ora } from 'ora'

export const lint = async () => {
  let notes: Ora | undefined
  try {
    notes = ora('⏳ ⏳ ⏳ prettier working...').start()
    await execa('prettier', ['--write', '--cache', '.'])
    notes.succeed('⌛ ⌛ ⌛ prettier success')

    notes = ora('⏳ ⏳ ⏳ eslint working...').start()
    const { stdout } = await execa('eslint', [
      '.',
      '--fix',
      '--cache',
      '--ext',
      ESLINT_EXTENSIONS.join()
    ])
    const type = stdout ? 'warn' : 'succeed'
    notes[type](stdout || '⌛ ⌛ ⌛ eslint success')
  } catch (e: any) {
    notes?.fail(e.toString())
    process.exit(1)
  }
}
