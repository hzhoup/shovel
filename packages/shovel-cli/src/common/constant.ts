import { resolve } from 'path'
import { getDirname } from './utils.js'
import * as process from 'process'

export const dirname = getDirname(import.meta.url)
export const CWD = process.cwd()

export const ESLINT_EXTENSIONS = ['.ts', '.js', '.tsx', '.jsx', '.vue']
export const CLI_PACKAGE_JSON = resolve(dirname, '../../package.json')
