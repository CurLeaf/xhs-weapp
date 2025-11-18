import type { CustomRequestOptions } from '@/http/types'
import { getCurrentAppInfo } from '@/utils'

export async function http<T>(options: CustomRequestOptions) {
  // 通过uni 获得当前 platform,版本
  // 合并获取系统信息
  let platform = ''
  let appId = ''
  let accountInfo: any = {}
  let version = '1.0.0'

  try {
    const sysInfo = uni.getSystemInfoSync()
    platform = sysInfo.platform
    appId = sysInfo.appId
  }
  catch (e) {
    console.warn('获取系统信息失败:', e)
  }

  try {
    accountInfo = getCurrentAppInfo()
    version = accountInfo?.version?.length < 1 ? '1.0.0' : accountInfo.version
  }
  catch (e) {
    console.warn('获取小程序账号信息失败:', e)
    accountInfo = { miniProgram: {} }
  }

  // 通过uni 获得当前 appversion
  const header = Object.assign({}, options.header, {
    'uni-app-p': platform,
    'uni-app-v': version ?? '1.0.0',
    'uni-app-wx-env': accountInfo.miniProgram?.envVersion,
    'uni-app-wx-appid': accountInfo.miniProgram?.appId,
    'uni-app-id': appId,
    'uni-app-version': 'v2',
    'app-channel': 'weapp',
  })

  /* Uni编译宏，抖音 */
  // #ifdef MP-TOUTIAO
  header['app-channel'] = 'douyin'
  // #endif

  // 1. 返回 Promise 对象
  return new Promise<IResData<T>>((resolve, reject) => {
    uni.request({
      url: options.url,
      ...options,
      header,
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      // 响应成功
      success: async (res) => {
        res.data = { data: res.data }
        // 状态码 2xx，参考 axios 的设计
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.1 提取核心数据 res.data
          return resolve(res.data as IResData<T>)
        }
        const resData: IResData<T> = res.data as IResData<T>
        if ((res.statusCode === 401) || (resData.code === 401)) {
          return reject(res)
        }
        else {
          // 其他错误 -> 根据后端错误信息轻提示
          // !options.hideErrorToast
          // && uni.showToast({
          //   icon: 'none',
          //   title: (res.data as IResData<T>).msg || '请求错误1',
          // })

          // 如果存在 res.data.data.code 则reject new Error(res.data.data.msg)
          if (res?.data?.data?.code) {
            reject(new Error(res.data.data.error))
          }
          else {
            reject(res)
          }
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}

/**
 * GET 请求
 * @param url 后台地址
 * @param query 请求query参数
 * @param header 请求头，默认为json格式
 * @returns
 */
export function httpGet<T>(url: string, query?: Record<string, any>, header?: Record<string, any>, options?: Partial<CustomRequestOptions>) {
  return http<T>({
    url,
    query,
    method: 'GET',
    header,
    ...options,
  })
}

/**
 * POST 请求
 * @param url 后台地址
 * @param data 请求body参数
 * @param query 请求query参数，post请求也支持query，很多微信接口都需要
 * @param header 请求头，默认为json格式
 * @returns
 */
export function httpPost<T>(url: string, data?: Record<string, any>, query?: Record<string, any>, header?: Record<string, any>, options?: Partial<CustomRequestOptions>) {
  return http<T>({
    url,
    query,
    data,
    method: 'POST',
    header,
    ...options,
  })
}
/**
 * PUT 请求
 */
export function httpPut<T>(url: string, data?: Record<string, any>, query?: Record<string, any>, header?: Record<string, any>, options?: Partial<CustomRequestOptions>) {
  return http<T>({
    url,
    data,
    query,
    method: 'PUT',
    header,
    ...options,
  })
}

/**
 * DELETE 请求（无请求体，仅 query）
 */
export function httpDelete<T>(url: string, query?: Record<string, any>, header?: Record<string, any>, options?: Partial<CustomRequestOptions>) {
  return http<T>({
    url,
    query,
    method: 'DELETE',
    header,
    ...options,
  })
}

http.get = httpGet
http.post = httpPost
http.put = httpPut
http.delete = httpDelete

// 支持与 alovaJS 类似的API调用
http.Get = httpGet
http.Post = httpPost
http.Put = httpPut
http.Delete = httpDelete
