import { pages, subPackages } from '@/pages.json'
import { tabbarList } from '@/tabbar/config'
import { isMpWeixin } from './platform'

export function getLastPage() {
  // getCurrentPages() 至少有1个元素，所以不再额外判断
  // const lastPage = getCurrentPages().at(-1)
  // 上面那个在低版本安卓中打包会报错，所以改用下面这个【虽然我加了 src/interceptions/prototype.ts，但依然报错】
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}

/**
 * 获取当前页面路由的 path 路径和 redirectPath 路径
 * path 如 '/pages/login/index'
 * redirectPath 如 '/pages/demo/base/route-interceptor'
 */
export function currRoute() {
  const lastPage = getLastPage()

  const currRoute = (lastPage as any)?.$page ?? {
    path: 'pages/index/index',
    fullPath: '/pages/index/index',
    query: {},
  }
  // console.log('lastPage.$page:', currRoute)
  // console.log('lastPage.$page.fullpath:', currRoute.fullPath)
  // console.log('lastPage.$page.options:', currRoute.options)
  // console.log('lastPage.options:', (lastPage as any).options)
  // 经过多端测试，只有 fullPath 靠谱，其他都不靠谱
  const { fullPath } = currRoute as { fullPath: string }

  // console.log(fullPath)
  // eg: /pages/login/index?redirect=%2Fpages%2Fdemo%2Fbase%2Froute-interceptor (小程序)
  // eg: /pages/login/index?redirect=%2Fpages%2Froute-interceptor%2Findex%3Fname%3Dfeige%26age%3D30(h5)
  const { path, query } = getUrlObj(fullPath)
  return { path, query, fullPath }
}

export function ensureDecodeURIComponent(url: string) {
  if (url.startsWith('%')) {
    return ensureDecodeURIComponent(decodeURIComponent(url))
  }
  return url
}
/**
 * 解析 url 得到 path 和 query
 * 比如输入url: /pages/login/index?redirect=%2Fpages%2Fdemo%2Fbase%2Froute-interceptor
 * 输出: {path: /pages/login/index, query: {redirect: /pages/demo/base/route-interceptor}}
 */
export function getUrlObj(url: string) {
  const [path, queryStr] = url.split('?')
  // console.log(path, queryStr)

  if (!queryStr) {
    return {
      path,
      query: {},
    }
  }
  const query: Record<string, string> = {}
  queryStr.split('&').forEach((item) => {
    const [key, value] = item.split('=')
    // console.log(key, value)
    query[key] = ensureDecodeURIComponent(value) // 这里需要统一 decodeURIComponent 一下，可以兼容h5和微信y
  })
  return { path, query }
}
/**
 * 得到所有的需要登录的 pages，包括主包和分包的
 * 这里设计得通用一点，可以传递 key 作为判断依据，默认是 needLogin, 与 route-block 配对使用
 * 如果没有传 key，则表示所有的 pages，如果传递了 key, 则表示通过 key 过滤
 */
export function getAllPages(key = 'needLogin') {
  // 这里处理主包
  const mainPages = pages
    .filter(page => !key || page[key])
    .map(page => ({
      ...page,
      path: `/${page.path}`,
    }))

  // 这里处理分包
  const subPages: any[] = []
  subPackages.forEach((subPageObj) => {
    // console.log(subPageObj)
    const { root } = subPageObj

    subPageObj.pages
      .filter(page => !key || page[key])
      .forEach((page: { path: string } & Record<string, any>) => {
        subPages.push({
          ...page,
          path: `/${root}/${page.path}`,
        })
      })
  })
  const result = [...mainPages, ...subPages]
  // console.log(`getAllPages by ${key} result: `, result)
  return result
}

export function isCurrentPageTabbar() {
  const routeObj = currRoute()
  return tabbarList.some(item => `/${item.pagePath}` === routeObj.path)
}

export function getCurrentPageI18nKey() {
  const routeObj = currRoute()
  const currPage = pages.find(page => `/${page.path}` === routeObj.path)
  if (!currPage) {
    console.warn('路由不正确')
    return ''
  }
  console.log(currPage)
  console.log(currPage.style.navigationBarTitleText)
  return currPage.style.navigationBarTitleText
}

/**
 * 得到所有的需要登录的 pages，包括主包和分包的
 * 只得到 path 数组
 */
export const getNeedLoginPages = (): string[] => getAllPages('needLogin').map(page => page.path)

/**
 * 得到所有的需要登录的 pages，包括主包和分包的
 * 只得到 path 数组
 */
export const needLoginPages: string[] = getAllPages('needLogin').map(page => page.path)

/**
 * 根据微信小程序当前环境，判断应该获取的 baseUrl
 */
export function getEnvBaseUrl() {
  // 请求基准地址
  let baseUrl = import.meta.env.VITE_SERVER_BASEURL

  // # 有些同学可能需要在微信小程序里面根据 develop、trial、release 分别设置上传地址，参考代码如下。
  const VITE_SERVER_BASEURL__WEIXIN_DEVELOP = import.meta.env.VITE_SERVER_BASEURL__WEIXIN_DEVELOP || 'http://127.0.0.1:3000'
  const VITE_SERVER_BASEURL__WEIXIN_TRIAL = import.meta.env.VITE_SERVER_BASEURL__WEIXIN_TRIAL || 'http://localhost:3000'
  const VITE_SERVER_BASEURL__WEIXIN_RELEASE = import.meta.env.VITE_SERVER_BASEURL__WEIXIN_RELEASE || 'http://localhost:3000'

  // 微信小程序端环境区分
  if (isMpWeixin) {
    const {
      miniProgram: { envVersion },
    } = uni.getAccountInfoSync()

    switch (envVersion) {
      case 'develop':
        baseUrl = VITE_SERVER_BASEURL__WEIXIN_DEVELOP || baseUrl
        break
      case 'trial':
        baseUrl = VITE_SERVER_BASEURL__WEIXIN_TRIAL || baseUrl
        break
      case 'release':
        baseUrl = VITE_SERVER_BASEURL__WEIXIN_RELEASE || baseUrl
        break
    }
  }

  return baseUrl
}

/**
 * 根据微信小程序当前环境，判断应该获取的 UPLOAD_BASEURL
 */
export function getEnvBaseUploadUrl() {
  // 请求基准地址
  let baseUploadUrl = import.meta.env.VITE_UPLOAD_BASEURL

  const VITE_UPLOAD_BASEURL__WEIXIN_DEVELOP = 'http://localhost:3000/upload'
  const VITE_UPLOAD_BASEURL__WEIXIN_TRIAL = 'http://localhost:3000/upload'
  const VITE_UPLOAD_BASEURL__WEIXIN_RELEASE = 'http://localhost:3000/upload'

  // 微信小程序端环境区分
  if (isMpWeixin) {
    const {
      miniProgram: { envVersion },
    } = uni.getAccountInfoSync()

    switch (envVersion) {
      case 'develop':
        baseUploadUrl = VITE_UPLOAD_BASEURL__WEIXIN_DEVELOP || baseUploadUrl
        break
      case 'trial':
        baseUploadUrl = VITE_UPLOAD_BASEURL__WEIXIN_TRIAL || baseUploadUrl
        break
      case 'release':
        baseUploadUrl = VITE_UPLOAD_BASEURL__WEIXIN_RELEASE || baseUploadUrl
        break
    }
  }

  return baseUploadUrl
}

/**
 * 跳转页面，如果当前页面是 tabbar 页面，则使用 switchTab 跳转，否则使用 navigateTo 跳转
 * @param url 跳转的页面路径
 * @param replace 是否使用 replace 跳转，默认是 false
 */
export function redirectTo(url: string, { replace = false }: { replace?: boolean } = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    // 先尝试使用 switchTab（用于 tabbar 页面）
    const invoke = replace ? uni.redirectTo : uni.navigateTo
    try {
      console.log('尝试使用 switchTab 跳转')
      uni.switchTab({
        url,
        success() {
          resolve()
        },
        fail() {
          // switchTab 失败时，使用 navigateTo 跳转
          invoke({
            url,
            success() {
              resolve()
            },
            fail(err) {
              console.error('页面跳转失败:', err)
              reject(err)
            },
          })
        },
      })
    }
    catch (error) {
      console.error('页面跳转失败:', error)
      invoke({
        url,
        success() {
          resolve()
        },
        fail(err) {
          console.error('页面跳转失败:', err)
          reject(err)
        },
      })
    }
  })
}

// 跳转到login/index，并把当前页面地址encodeURIComponent
/**
 * 使用redirectToLogin跳转登录
 * @param redirect 默认当前页面
 */
export function redirectToLogin(redirect?: string) {
  const currentPage = currRoute()
  redirectTo(`/pages/login/index?redirect=${encodeURIComponent(redirect || currentPage.fullPath)}`)
}

/**
 * 返回上一页，如果当前页面是首页，则跳转到首页
 */
export function redirectBack(redirect?: string, { replace = false }: { replace?: boolean } = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    const pages = getCurrentPages()
    if (pages.length === 1) {
      redirectTo(redirect || '/pages/index/index', { replace })
        .then(resolve)
        .catch(reject)
    }
    else {
      console.log('pages', pages, '开始后退')
      uni.navigateBack({
        delta: 1,

        success() {
          resolve()
        },
        fail(err) {
          console.error('返回失败:', err)
          redirectTo(redirect || '/pages/index/index', { replace })
            .then(resolve)
            .catch(reject)
        },
      })
    }
  })
}

export async function checkAndUpdateVersion(): Promise<void> {
  if (!uni.canIUse('getUpdateManager')) {
    console.warn('当前基础库版本过低，无法使用更新管理功能')
    return
  }

  // #ifdef MP-WEIXIN
  const updateManager = uni.getUpdateManager()

  // 监听检查更新结果
  updateManager.onCheckForUpdate((res) => {
    console.log('[版本更新] 是否有新版本：', res.hasUpdate)
  })

  // 有新版本时的处理
  updateManager.onUpdateReady(() => {
    wx.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启小程序？',
      confirmText: '重启',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          updateManager.applyUpdate() // 重启小程序
        }
      },
    })
  })

  // 新版本下载失败
  updateManager.onUpdateFailed(() => {
    wx.showModal({
      title: '更新失败',
      content: '新版本下载失败，请检查网络或稍后重试。',
      showCancel: false,
    })
  })
  // #endif
}

// 获得当前的app版本

export function getCurrentAppInfo() {
  const appInfo = {
    version: '',
    appId: '',
    envType: 'dev',
  }
  // 头条跟微信不一样
  // #ifdef MP-TOUTIAO
  // @ts-expect-error NONE
  const microapp = uni.getEnvInfoSync().microapp
  appInfo.appId = microapp.appId
  appInfo.envType = microapp.envType
  appInfo.version = microapp.mpVersion
  // #endif
  // #ifdef MP-WEIXIN
  const miniProgram = uni.getAccountInfoSync().miniProgram
  appInfo.appId = miniProgram.appId
  appInfo.envType = miniProgram.envVersion
  appInfo.version = miniProgram.version
  // #endif
  return appInfo
}
