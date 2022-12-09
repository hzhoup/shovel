export interface UseButtonOptions {
  /**
   * click 事件是否开启防抖
   */
  debounce?: boolean
  /**
   * before click event
   */
  beforeClick?: () => void
  /**
   * click event
   */
  click?: () => void
}
