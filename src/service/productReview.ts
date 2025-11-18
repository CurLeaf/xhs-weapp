/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取商品评价详情（包含SPU和SKU关联信息） 商品评价模块 GET /api/shop/review/${param0} */
export function shopReviewIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopReviewIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ShopReviewIdUsingGetResponse>(
    `/api/shop/review/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 创建商品评价 商品评价模块 POST /api/shop/review/create */
export function shopReviewCreateUsingPost({
  body,
  options,
}: {
  body: API.ShopReviewCreateUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopReviewCreateUsingPostResponse>(
    '/api/shop/review/create',
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

/** 获取商品评价列表（分页查询，支持状态过滤） 商品评价模块 GET /api/shop/review/list */
export function shopReviewListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopReviewListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopReviewListUsingGetResponse>('/api/shop/review/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
