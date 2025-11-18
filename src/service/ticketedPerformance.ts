/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取票务配置 票务演出相关接口 GET /api/ticket/config */
export function ticketConfigUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.TicketConfigUsingGetResponse>('/api/ticket/config', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取演出详情 票务演出相关接口 GET /api/ticket/event/detail/${param0} */
export function ticketEventDetailIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketEventDetailIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.TicketEventDetailIdUsingGetResponse>(
    `/api/ticket/event/detail/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取演出收藏状态 票务演出相关接口 GET /api/ticket/event/favorite-status/${param0} */
export function ticketEventFavoriteStatusIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketEventFavoriteStatusIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.TicketEventFavoriteStatusIdUsingGetResponse>(
    `/api/ticket/event/favorite-status/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 收藏/取消收藏演出 票务演出相关接口 POST /api/ticket/event/favorite/${param0} */
export function ticketEventFavoriteIdUsingPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketEventFavoriteIdUsingPostParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.TicketEventFavoriteIdUsingPostResponse>(
    `/api/ticket/event/favorite/${param0}`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取用户收藏的演出列表 票务演出相关接口 GET /api/ticket/event/favorites */
export function ticketEventFavoritesUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketEventFavoritesUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketEventFavoritesUsingGetResponse>(
    '/api/ticket/event/favorites',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取演出列表 票务演出相关接口 GET /api/ticket/event/list */
export function ticketEventListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketEventListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketEventListUsingGetResponse>(
    '/api/ticket/event/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 根据类型获取演出列表 票务演出相关接口 GET /api/ticket/event/type/${param0} */
export function ticketEventTypeTypeUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketEventTypeTypeUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { type: param0, ...queryParams } = params;

  return request<API.TicketEventTypeTypeUsingGetResponse>(
    `/api/ticket/event/type/${param0}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}
