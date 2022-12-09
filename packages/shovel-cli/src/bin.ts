#!/usr/bin/env node
import fse from 'fs-extra'
import { Command } from 'commander'
import { CLI_PACKAGE_JSON } from './common/constant.js'
import * as process from 'process'

const { readJsonSync } = fse
const program = new Command()

program.version(`shovel-cli ${readJsonSync(CLI_PACKAGE_JSON).version}`).usage('<command> [options]')

program
  .command('lint')
  .description('Format Code With Prettier & Eslint')
  .action(async () => {
    const { lint } = await import('./scripts/lint.js')
    return lint()
  })

program
  .command('changelog')
  .option('-rc --releaseCount <releaseCount>', 'Release count')
  .option('-f --file <file>', 'Changelog filename')
  .description('Generate Changelog')
  .action(async (options) => {
    const { changelog } = await import('./scripts/changelog.js')
    return changelog(options)
  })

program.on('command:*', async ([cmd]) => {
  const { default: logger } = await import('./common/logger.js')
  program.outputHelp()
  logger.error(`\nUnknown command ${cmd}.\n`)
  process.exit(1)
})

program.parse()
