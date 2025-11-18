/**
 * 获取屏幕边界到安全区域距离
 * @returns 安全区域信息
 */
export function getSafeAreaInsets() {
  let safeAreaInsets
  const systemInfo = uni.getSystemInfoSync()
  let headerHeight = 0
  // #ifdef MP-WEIXIN
  // 微信小程序使用新的API
  const windowInfo = uni.getWindowInfo()
  safeAreaInsets = windowInfo.safeAreaInsets
  // #endif
  // 小程序的化增加胶囊高读的获取
  // #ifndef H5
  const menuButtonRect = uni.getMenuButtonBoundingClientRect()
  // headerHeight =   menuButtonRect.top
  const statusbarHeight = systemInfo.statusBarHeight
  headerHeight = menuButtonRect.bottom + (menuButtonRect.top - statusbarHeight)
  // #endif

  // #ifndef H5
  // 其他平台继续使用uni API
  safeAreaInsets = systemInfo.safeAreaInsets
  // #endif
  const baseSafe = safeAreaInsets as ReturnType<typeof uni.getWindowInfo>['safeArea']

  return {
    ...baseSafe,
    /**
     * 头部高度，包含胶囊按钮
     */
    headerHeight,
    //
  }
}
export function useSafeAreaInsets() {
  // 使用ref
  const safeAreaInsets = ref(getSafeAreaInsets())
  return safeAreaInsets
}
