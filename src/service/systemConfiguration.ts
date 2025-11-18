/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 文件转存 系统配置管理 POST /api/system-config/file-link-upload */
export function systemConfigFileLinkUploadUsingPost({
  body,
  options,
}: {
  body: API.SystemConfigFileLinkUploadUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.SystemConfigFileLinkUploadUsingPostResponse>(
    '/api/system-config/file-link-upload',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 获取文件上传链接 系统配置管理 GET /api/system-config/oss-upload-link */
export function systemConfigOssUploadLinkUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.SystemConfigOssUploadLinkUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.SystemConfigOssUploadLinkUsingGetResponse>(
    '/api/system-config/oss-upload-link',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
