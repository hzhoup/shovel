import ora from 'ora'
import { execa } from 'execa'
import { ESLINT_EXTENSIONS } from '../common/constant.js'
import * as process from 'process'
export const lint = async () => {
  let notes
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
  } catch (e) {
    notes?.fail(e.toString())
    process.exit(1)
  }
}
