/**
 * OSS 图片处理工具接口
 */
export interface OssImageUtil {
  /**
   * 按照指定尺寸输出图片
   * @param url 原始图片链接
   * @param width 宽度
   * @param height 高度
   * @returns 处理后的图片链接
   */
  resize: (url: string, width: number, height: number) => string

  /**
   * 指定宽度或高度，按照原始比例输出图片
   * @param url 原始图片链接
   * @param size 尺寸（宽或高）
   * @param by 'w' | 'h'，指定按宽还是高
   * @returns 处理后的图片链接
   */
  resizeByRatio: (url: string, size: number, by: 'w' | 'h') => string
}

/**
 * 七牛云图片处理实现
 */
export const qiniuImageUtil: OssImageUtil = {
  resize(url, width, height) {
    // 如果 url 已经包含 imageView2，则不再重复添加
    if (/imageView2/i.test(url)) {
      return url
    }
    return `${url}?imageView2/1/w/${Math.round(width)}/h/${Math.round(height)}`
  },
  resizeByRatio(url, size, by) {
    // 如果 url 已经包含 imageView2，则不再重复添加
    if (/imageView2/i.test(url)) {
      return url
    }
    if (by === 'w') {
      return `${url}?imageView2/2/w/${size}`
    }
    else {
      return `${url}?imageView2/2/h/${size}`
    }
  },
}

/**
 * 阿里云 OSS 图片处理实现
 */
export const aliyunImageUtil: OssImageUtil = {
  resize(url, width, height) {
    // 阿里云图片处理参数
    return `${url}?x-oss-process=image/resize,m_fixed,w_${Math.round(width)},h_${Math.round(height)}`
  },
  resizeByRatio(url, size, by) {
    if (by === 'w') {
      return `${url}?x-oss-process=image/resize,w_${size}`
    }
    else {
      return `${url}?x-oss-process=image/resize,h_${size}`
    }
  },
}
/**
 * 暴露图片处理器
 */
export const imageUtil = qiniuImageUtil
