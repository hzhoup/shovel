import { fileURLToPath } from 'url'

export const getDirname = (url: string): string => {
  return fileURLToPath(new URL('.', url))
}
