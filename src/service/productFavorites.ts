/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 添加商品到收藏 将指定商品添加到用户收藏列表 POST /api/shop/user-goods-collect/add */
export function shopUserGoodsCollectAddUsingPost({
  body,
  options,
}: {
  body: API.ShopUserGoodsCollectAddUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopUserGoodsCollectAddUsingPostResponse>(
    '/api/shop/user-goods-collect/add',
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

/** 批量检查商品收藏状态 批量检查多个商品的收藏状态 POST /api/shop/user-goods-collect/batch-status */
export function shopUserGoodsCollectBatchStatusUsingPost({
  body,
  options,
}: {
  body: API.ShopUserGoodsCollectBatchStatusUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopUserGoodsCollectBatchStatusUsingPostResponse>(
    '/api/shop/user-goods-collect/batch-status',
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

/** 获取用户收藏列表 分页查询用户的商品收藏列表，支持关键字搜索 GET /api/shop/user-goods-collect/list */
export function shopUserGoodsCollectListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopUserGoodsCollectListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopUserGoodsCollectListUsingGetResponse>(
    '/api/shop/user-goods-collect/list',
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

/** 取消收藏商品 从用户收藏列表中移除指定商品 POST /api/shop/user-goods-collect/remove */
export function shopUserGoodsCollectRemoveUsingPost({
  body,
  options,
}: {
  body: API.ShopUserGoodsCollectRemoveUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopUserGoodsCollectRemoveUsingPostResponse>(
    '/api/shop/user-goods-collect/remove',
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

/** 检查商品收藏状态 检查指定商品是否已被用户收藏 GET /api/shop/user-goods-collect/status/${param0} */
export function shopUserGoodsCollectStatusSpuIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopUserGoodsCollectStatusSpuIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { spuId: param0, ...queryParams } = params;

  return request<API.ShopUserGoodsCollectStatusSpuIdUsingGetResponse>(
    `/api/shop/user-goods-collect/status/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}
