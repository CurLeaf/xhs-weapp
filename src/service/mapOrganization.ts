/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 创建组织 创建一个新的组织 POST /api/map/org */
export function mapOrgUsingPost({
  body,
  options,
}: {
  body: API.MapOrgUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.MapOrgUsingPostResponse>('/api/map/org', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取组织详情 根据ID获取组织详细信息 GET /api/map/org/${param0} */
export function mapOrgIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.MapOrgIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.MapOrgIdUsingGetResponse>(`/api/map/org/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取组织列表 分页获取组织列表 GET /api/map/org/my */
export function mapOrgMyUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.MapOrgMyUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.MapOrgMyUsingGetResponse>('/api/map/org/my', {
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

/** 搜索组织 根据名称模糊搜索组织 GET /api/map/org/search */
export function mapOrgSearchUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.MapOrgSearchUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.MapOrgSearchUsingGetResponse>('/api/map/org/search', {
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
