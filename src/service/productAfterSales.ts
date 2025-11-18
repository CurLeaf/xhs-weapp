/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 商品售后模块 GET /api/shop/afterservice */
export function shopAfterserviceUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/api/shop/afterservice', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 申请退货（创建售后申请） 商品售后模块 POST /api/shop/afterservice/apply */
export function shopAfterserviceApplyUsingPost({
  body,
  options,
}: {
  body: API.ShopAfterserviceApplyUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopAfterserviceApplyUsingPostResponse>(
    '/api/shop/afterservice/apply',
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

/** 取消退货申请 商品售后模块 POST /api/shop/afterservice/cancel/${param0} */
export function shopAfterserviceCancelIdUsingPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopAfterserviceCancelIdUsingPostParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ShopAfterserviceCancelIdUsingPostResponse>(
    `/api/shop/afterservice/cancel/${param0}`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取售后配置 商品售后模块 GET /api/shop/afterservice/config */
export function shopAfterserviceConfigUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.ShopAfterserviceConfigUsingGetResponse>(
    '/api/shop/afterservice/config',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获取退货申请详情 商品售后模块 GET /api/shop/afterservice/detail/${param0} */
export function shopAfterserviceDetailIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopAfterserviceDetailIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ShopAfterserviceDetailIdUsingGetResponse>(
    `/api/shop/afterservice/detail/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取售后申请列表（分页查询，支持过滤条件） 商品售后模块 GET /api/shop/afterservice/list */
export function shopAfterserviceListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopAfterserviceListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopAfterserviceListUsingGetResponse>(
    '/api/shop/afterservice/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取售后地址 商品售后模块 GET /api/shop/afterservice/return-address */
export function shopAfterserviceReturnAddressUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.ShopAfterserviceReturnAddressUsingGetResponse>(
    '/api/shop/afterservice/return-address',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 测试退款成功接口（用于测试order.service的refunSucess方法） 商品售后模块 POST /api/shop/afterservice/test-refund-success */
export function shopAfterserviceTestRefundSuccessUsingPost({
  body,
  options,
}: {
  body: API.ShopAfterserviceTestRefundSuccessUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopAfterserviceTestRefundSuccessUsingPostResponse>(
    '/api/shop/afterservice/test-refund-success',
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

/** 用户填写退货运单号 商品售后模块 POST /api/shop/afterservice/tracking */
export function shopAfterserviceTrackingUsingPost({
  body,
  options,
}: {
  body: API.ShopAfterserviceTrackingUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopAfterserviceTrackingUsingPostResponse>(
    '/api/shop/afterservice/tracking',
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
