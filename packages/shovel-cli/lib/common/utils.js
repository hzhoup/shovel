import { fileURLToPath } from 'url'
export const getDirname = (url) => {
  return fileURLToPath(new URL('.', url))
}
