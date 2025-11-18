/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 创建名师 创建一个新的名师 POST /api/map/master */
export function mapMasterUsingPost({
  body,
  options,
}: {
  body: API.MapMasterUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.MapMasterUsingPostResponse>('/api/map/master', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取名师详情 根据ID获取名师详细信息 GET /api/map/master/${param0} */
export function mapMasterIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.MapMasterIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.MapMasterIdUsingGetResponse>(`/api/map/master/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取名师列表 分页获取名师列表 GET /api/map/master/my */
export function mapMasterMyUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.MapMasterMyUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.MapMasterMyUsingGetResponse>('/api/map/master/my', {
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

/** 搜索名师 根据名称模糊搜索名师 GET /api/map/master/search */
export function mapMasterSearchUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.MapMasterSearchUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.MapMasterSearchUsingGetResponse>(
    '/api/map/master/search',
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // pageSize has a default value: 10
        pageSize: '10',
        ...params,
      },
      ...(options || {}),
    }
  );
}
