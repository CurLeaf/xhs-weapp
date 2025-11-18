/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 根据旅游路线ID获取旅游路线详情 获取旅游路线详情，包括关联的景点信息和安排信息 GET /api/actx/tour/${param0} */
export function actxTourIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxTourIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ActxTourIdUsingGetResponse>(`/api/actx/tour/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取轮播旅游路线 获取包含"轮播图"标签且状态为ACTIVE的旅游路线列表 GET /api/actx/tour/carousel */
export function actxTourCarouselUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.ActxTourCarouselUsingGetResponse>(
    '/api/actx/tour/carousel',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 根据筛选条件获取旅游列表 支持按名称、景点名称或天数筛选旅游路线 GET /api/actx/tour/list */
export function actxTourListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxTourListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.ActxTourListUsingGetResponse>('/api/actx/tour/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据景点ID获取景点详情 获取景点的详细信息，包括名称、图片、描述、地址、营业时间等 GET /api/actx/tour/spot/${param0} */
export function actxTourSpotIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxTourSpotIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ActxTourSpotIdUsingGetResponse>(
    `/api/actx/tour/spot/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}
