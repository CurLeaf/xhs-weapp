/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 收银中心获取订单信息 根据业务类型和订单ID获取订单详细信息 GET /api/payment/cashier/order-info */
export function paymentCashierOrderInfoUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PaymentCashierOrderInfoUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PaymentCashierOrderInfoUsingGetResponse>(
    '/api/payment/cashier/order-info',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 收银中心查询支付状态 根据业务订单ID和业务类型查询支付状态 GET /api/payment/cashier/payment-status */
export function paymentCashierPaymentStatusUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PaymentCashierPaymentStatusUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PaymentCashierPaymentStatusUsingGetResponse>(
    '/api/payment/cashier/payment-status',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 收银中心创建支付订单 统一创建支付订单接口，支持多种业务类型和支付渠道 POST /api/payment/cashier/union */
export function paymentCashierUnionUsingPost({
  body,
  options,
}: {
  body: API.PaymentCashierUnionUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<{
    /** 状态：SUCCESS-成功，NEED_LOGIN-需要登录 */
    status: string;
    paymentData: {
      /** 支付参数 */
      payParams?: Record<string, unknown>;
      /** 额外信息 */
      extra?: Record<string, unknown>;
      /** 创建时间 */
      createdAt: string;
    };
    /** 登录URL（需要登录时返回） */
    loginUrl?: string;
  } | null>('/api/payment/cashier/union', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询支付渠道列表 支付网关相关 GET /api/payment/list */
export function paymentListUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.PaymentListUsingGetResponse>('/api/payment/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 支付渠道登录 支付网关相关 POST /api/payment/login/${param0} */
export function paymentLoginChannlIdUsingPost({
  params,
  body,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PaymentLoginChannlIdUsingPostParams;
  body: API.PaymentLoginChannlIdUsingPostBody;
  options?: CustomRequestOptions;
}) {
  const { channlId: param0, ...queryParams } = params;

  return request<API.PaymentLoginChannlIdUsingPostResponse>(
    `/api/payment/login/${param0}`,
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

/** 发起支付 支付网关相关 POST /api/payment/pay/${param0} */
export function paymentPayAppIdUsingPost({
  params,
  body,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PaymentPayAppIdUsingPostParams;
  body: API.PaymentPayAppIdUsingPostBody;
  options?: CustomRequestOptions;
}) {
  const { appId: param0, ...queryParams } = params;

  return request<API.PaymentPayAppIdUsingPostResponse>(
    `/api/payment/pay/${param0}`,
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

/** 支付网关相关 GET /api/payment/transfer */
export function paymentTransferUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PaymentTransferUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/api/payment/transfer', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
