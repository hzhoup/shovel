#!/usr/bin/env node
import fse from 'fs-extra'
import { Command } from 'commander'
import { CLI_PACKAGE_JSON } from './commom/constant.js'

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

program.parse()
