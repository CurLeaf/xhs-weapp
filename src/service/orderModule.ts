/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 提交活动报名订单 提交活动报名订单，包含活动ID、商品ID、数量和动态表单字段 POST /api/actx/order */
export function actxOrderUsingPost({
  body,
  options,
}: {
  body: API.ActxOrderUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ActxOrderUsingPostResponse>('/api/actx/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取订单详情 获取订单的详细信息（用于展示订单二维码） GET /api/actx/order/${param0} */
export function actxOrderIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxOrderIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ActxOrderIdUsingGetResponse>(`/api/actx/order/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 申请退款 申请订单退款 POST /api/actx/order/${param0}/refund */
export function actxOrderIdRefundUsingPost({
  params,
  body,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxOrderIdRefundUsingPostParams;
  body: API.ActxOrderIdRefundUsingPostBody;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ActxOrderIdRefundUsingPostResponse>(
    `/api/actx/order/${param0}/refund`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    }
  );
}

/** 查询订单支付状态 查询订单是否支付成功 GET /api/actx/order/${param0}/status */
export function actxOrderIdStatusUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxOrderIdStatusUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ActxOrderIdStatusUsingGetResponse>(
    `/api/actx/order/${param0}/status`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 取消订单 用户取消订单，自动恢复库存，如已支付则发起退款 POST /api/actx/order/cancel */
export function actxOrderCancelUsingPost({
  body,
  options,
}: {
  body: API.ActxOrderCancelUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ActxOrderCancelUsingPostResponse>(
    '/api/actx/order/cancel',
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

/** 核销订单项 根据订单项ID和数量进行核销，当订单项全部核销完成时会同步更新订单状态为USED POST /api/actx/order/item/${param0}/verify */
export function actxOrderItemOrderItemIdVerifyUsingPost({
  params,
  body,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxOrderItemOrderItemIdVerifyUsingPostParams;
  body: API.ActxOrderItemOrderItemIdVerifyUsingPostBody;
  options?: CustomRequestOptions;
}) {
  const { orderItemId: param0, ...queryParams } = params;

  return request<API.ActxOrderItemOrderItemIdVerifyUsingPostResponse>(
    `/api/actx/order/item/${param0}/verify`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    }
  );
}

/** 获取订单列表 分页获取用户订单列表，支持状态筛选 GET /api/actx/order/list */
export function actxOrderListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxOrderListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.ActxOrderListUsingGetResponse>('/api/actx/order/list', {
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

/** 活动订单支付 创建活动订单支付，获取支付参数 POST /api/actx/order/pay */
export function actxOrderPayUsingPost({
  body,
  options,
}: {
  body: API.ActxOrderPayUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ActxOrderPayUsingPostResponse>('/api/actx/order/pay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 请求支付签名 获取支付签名（如调用微信支付SDK）- 当前模拟支付，直接标记订单为已支付 POST /api/actx/order/payment/sign */
export function actxOrderPaymentSignUsingPost({
  body,
  options,
}: {
  body: API.ActxOrderPaymentSignUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ActxOrderPaymentSignUsingPostResponse>(
    '/api/actx/order/payment/sign',
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

/** 获取订单核销二维码 获取该订单的核销二维码 GET /api/actx/order/qrcode/${param0} */
export function actxOrderQrcodeOrderItemIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxOrderQrcodeOrderItemIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { orderItemId: param0, ...queryParams } = params;

  return request<API.ActxOrderQrcodeOrderItemIdUsingGetResponse>(
    `/api/actx/order/qrcode/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}
