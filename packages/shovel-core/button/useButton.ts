import { ref } from 'vue'
import { UseButtonOptions } from './useButton.types'

export const useButtonOptions = (options: UseButtonOptions) => {
  const loading = ref(false)

  const execute = async () => {
    loading.value = true
    try {
      await options.beforeClick?.()
      await options.click?.()
    } catch (e) {
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  return { loading, execute }
}
