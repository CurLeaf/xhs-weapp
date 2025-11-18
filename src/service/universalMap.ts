/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取流派列表 分页获取流派列表，支持名称模糊查询 GET /api/map/styles */
export function mapStylesUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.MapStylesUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.MapStylesUsingGetResponse>('/api/map/styles', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // pageSize has a default value: 10
      pageSize: '10',
      ...params,
    },
    ...(options || {}),
  });
}
