import { systemConfigOssUploadLinkUsingGet } from '@/service/systemConfiguration'

export async function uploadFile(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    uni.chooseImage({
      count: 3, // 最大允许选择3张图片
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: async (res) => {
        // 获取选择的图片临时路径数组
        uni.showLoading({ title: '上传中...' })
        const tempFilePaths = res.tempFilePaths

        try {
          // 遍历所有选择的图片进行上传
          const uploadResults = []
          const uploadedUrls: string[] = []

          for (const tempFilePath of tempFilePaths) {
            // 1. 获取上传的相关参数
            const ossUploadLinkRes = await systemConfigOssUploadLinkUsingGet({
              params: {
                fileName: tempFilePath.split('/').pop(),
              },
            })

            console.log('ossUploadLinkRes', ossUploadLinkRes)
            console.log('tempFilePath', tempFilePath)
            // 2. 使用uni.uploadFile上传图片
            const uploadFileRes = await uni.uploadFile({
              url: ossUploadLinkRes.data.data.url,
              filePath: tempFilePath,
              name: 'file',
              formData: ossUploadLinkRes.data.data.fields,
              header: {
                // H5环境下不需要手动设置Content-Type，让浏览器自动处理multipart格式
                // #ifndef H5
                'Content-Type': 'multipart/form-data',
                // #endif
              },
            })

            console.log('uploadFileRes', uploadFileRes)
            uploadResults.push(uploadFileRes)

            // 提取上传后的图片地址
            const uploadedUrl = ossUploadLinkRes.data.data.cdnUrl || ossUploadLinkRes.data.data.url
            uploadedUrls.push(uploadedUrl)
          }

          // 所有图片上传完成
          console.log('所有图片上传完成:', uploadResults)
          uni.hideLoading()
          uni.showToast({
            title: `成功上传${uploadResults.length}张图片`,
            icon: 'success',
          })

          // 返回上传后的图片地址数组
          resolve(uploadedUrls)
        }
        catch (error) {
          console.error('图片上传失败:', error)
          uni.showToast({
            title: '图片上传失败',
            icon: 'error',
          })
          uni.hideLoading()
          reject(error)
        }
      },
      fail: (error) => {
        console.error('选择图片失败:', error)
        uni.showToast({
          title: '选择图片失败',
          icon: 'error',
        })
        uni.hideLoading()
        reject(error)
      },
    })
  })
}
