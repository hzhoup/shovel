import { resolve } from 'path'
import { getDirname } from './utils.js'
export const dirname = getDirname(import.meta.url)
export const ESLINT_EXTENSIONS = ['.ts', '.js', '.tsx', '.jsx', '.vue']
export const CLI_PACKAGE_JSON = resolve(dirname, '../../package.json')
