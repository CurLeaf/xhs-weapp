/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 绑定核销员 票务核销员相关接口 POST /api/ticket/employ/bind */
export function ticketEmployBindUsingPost({
  body,
  options,
}: {
  body: API.TicketEmployBindUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketEmployBindUsingPostResponse>(
    '/api/ticket/employ/bind',
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

/** 检查当前用户是否为核销员 票务核销员相关接口 GET /api/ticket/employ/check */
export function ticketEmployCheckUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.TicketEmployCheckUsingGetResponse>(
    '/api/ticket/employ/check',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 店源查看订单中有效的orderitems 票务核销员相关接口 GET /api/ticket/employ/order-items */
export function ticketEmployOrderItemsUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketEmployOrderItemsUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<
    {
      /** 订单项ID */
      id: string;
      /** 订单项状态 */
      status: string;
    }[]
  >('/api/ticket/employ/order-items', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 店源查看订单中有效的orderitems 票务核销员相关接口 GET /api/ticket/employ/order-items/v2 */
export function ticketEmployOrderItemsV2UsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketEmployOrderItemsV2UsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketEmployOrderItemsV2UsingGetResponse>(
    '/api/ticket/employ/order-items/v2',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 核销订单项 核销订单中的指定订单项，每个订单项对应一张票 POST /api/ticket/employ/verify */
export function ticketEmployVerifyUsingPost({
  body,
  options,
}: {
  body: API.TicketEmployVerifyUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketEmployVerifyUsingPostResponse>(
    '/api/ticket/employ/verify',
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

/** 获得自己的今日核销记录，并按照时间排序 票务核销员相关接口 GET /api/ticket/employ/verify-records */
export function ticketEmployVerifyRecordsUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketEmployVerifyRecordsUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<
    {
      /** 核销记录ID */
      id: string;
      /** 核销时间 */
      createdAt: Date | string | string | number;
      order: {
        /** 订单ID */
        id: string;
        customerName: string | null;
        customerPhone: string | null;
        showTime: {
          /** 场次开始时间 */
          startTime: Date | string | string | number;
          /** 场次结束时间 */
          endTime: Date | string | string | number;
          event: {
            /** 场次名称 */
            title: string;
          };
        };
      };
      orderItems: {
        /** 订单项ID */
        id: string;
        areaName: string | null;
      }[];
    }[]
  >('/api/ticket/employ/verify-records', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
