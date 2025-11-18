/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取用户积分余额 获取当前登录用户的积分余额信息，包括余额、累计获得、累计消费和积分条目列表 GET /api/point/balance */
export function pointBalanceUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.PointBalanceUsingGetResponse>('/api/point/balance', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取积分配置 获取积分系统的配置信息，包括是否开启消费领积分、积分比例等 GET /api/point/config */
export function pointConfigUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.PointConfigUsingGetResponse>('/api/point/config', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 创建积分订单 用户创建积分兑换订单，需要传入商品ID和购买数量 POST /api/point/order/create */
export function pointOrderCreateUsingPost({
  body,
  options,
}: {
  body: API.PointOrderCreateUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.PointOrderCreateUsingPostResponse>(
    '/api/point/order/create',
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

/** 查询积分订单详情 根据订单ID或业务订单ID查询积分订单详情，只能查询当前用户的订单 GET /api/point/order/detail */
export function pointOrderDetailUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PointOrderDetailUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PointOrderDetailUsingGetResponse>(
    '/api/point/order/detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取用户积分订单列表 获取当前登录用户的积分订单列表，支持分页 GET /api/point/order/list */
export function pointOrderListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PointOrderListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PointOrderListUsingGetResponse>('/api/point/order/list', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // pageSize has a default value: 20
      pageSize: '20',

      ...params,
    },
    ...(options || {}),
  });
}

/** 获取积分商品详情 根据商品ID获取积分商品的详细信息，包括商品基本信息、价格、库存等 GET /api/point/product/${param0} */
export function pointProductIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PointProductIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.PointProductIdUsingGetResponse>(
    `/api/point/product/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取商城商品的可用规格详情 获取商城商品的可用规格详情 GET /api/point/product/${param0}/spec */
export function pointProductIdSpecUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PointProductIdSpecUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.PointProductIdSpecUsingGetResponse>(
    `/api/point/product/${param0}/spec`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取积分商品列表 获取所有积分商品列表，支持分页和关键字搜索 GET /api/point/product/list */
export function pointProductListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PointProductListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PointProductListUsingGetResponse>(
    '/api/point/product/list',
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // pageSize has a default value: 20
        pageSize: '20',
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取用户积分余额和收支记录 获取当前登录用户的积分余额和积分收支记录，支持分页查询 GET /api/point/wallet/balance */
export function pointWalletBalanceUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PointWalletBalanceUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PointWalletBalanceUsingGetResponse>(
    '/api/point/wallet/balance',
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // pageSize has a default value: 20
        pageSize: '20',
        ...params,
      },
      ...(options || {}),
    }
  );
}
