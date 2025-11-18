/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 取消订单 票务订单相关接口 POST /api/ticket/order/cancel/${param0} */
export function ticketOrderCancelIdUsingPost({
  params,
  body,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketOrderCancelIdUsingPostParams;
  body: API.TicketOrderCancelIdUsingPostBody;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.TicketOrderCancelIdUsingPostResponse>(
    `/api/ticket/order/cancel/${param0}`,
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

/** 创建订单 票务订单相关接口 POST /api/ticket/order/create */
export function ticketOrderCreateUsingPost({
  body,
  options,
}: {
  body: API.TicketOrderCreateUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketOrderCreateUsingPostResponse>(
    '/api/ticket/order/create',
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

/** 获取订单详情 票务订单相关接口 GET /api/ticket/order/detail/${param0} */
export function ticketOrderDetailIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketOrderDetailIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.TicketOrderDetailIdUsingGetResponse>(
    `/api/ticket/order/detail/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取订单列表 票务订单相关接口 GET /api/ticket/order/list */
export function ticketOrderListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketOrderListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketOrderListUsingGetResponse>(
    '/api/ticket/order/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取支付签名 票务订单相关接口 POST /api/ticket/order/payment/sign */
export function ticketOrderPaymentSignUsingPost({
  body,
  options,
}: {
  body: API.TicketOrderPaymentSignUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketOrderPaymentSignUsingPostResponse>(
    '/api/ticket/order/payment/sign',
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

/** 处理支付成功 票务订单相关接口 POST /api/ticket/order/payment/success */
export function ticketOrderPaymentSuccessUsingPost({
  body,
  options,
}: {
  body: API.TicketOrderPaymentSuccessUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketOrderPaymentSuccessUsingPostResponse>(
    '/api/ticket/order/payment/success',
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

/** 申请退款 票务订单相关接口 POST /api/ticket/order/refund/apply */
export function ticketOrderRefundApplyUsingPost({
  body,
  options,
}: {
  body: API.TicketOrderRefundApplyUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketOrderRefundApplyUsingPostResponse>(
    '/api/ticket/order/refund/apply',
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

/** 根据规则自动退款 票务订单相关接口 POST /api/ticket/order/refund/auto */
export function ticketOrderRefundAutoUsingPost({
  body,
  options,
}: {
  body: API.TicketOrderRefundAutoUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketOrderRefundAutoUsingPostResponse>(
    '/api/ticket/order/refund/auto',
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

/** 获取退款申请详情 票务订单相关接口 GET /api/ticket/order/refund/detail/${param0} */
export function ticketOrderRefundDetailIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketOrderRefundDetailIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.TicketOrderRefundDetailIdUsingGetResponse>(
    `/api/ticket/order/refund/detail/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取退款申请列表 票务订单相关接口 GET /api/ticket/order/refund/list */
export function ticketOrderRefundListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.TicketOrderRefundListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketOrderRefundListUsingGetResponse>(
    '/api/ticket/order/refund/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 处理退款申请 票务订单相关接口 POST /api/ticket/order/refund/process */
export function ticketOrderRefundProcessUsingPost({
  body,
  options,
}: {
  body: API.TicketOrderRefundProcessUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketOrderRefundProcessUsingPostResponse>(
    '/api/ticket/order/refund/process',
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

/** 核销订单项 核销订单中的指定订单项，每个订单项对应一张票 POST /api/ticket/order/verify */
export function ticketOrderVerifyUsingPost({
  body,
  options,
}: {
  body: API.TicketOrderVerifyUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.TicketOrderVerifyUsingPostResponse>(
    '/api/ticket/order/verify',
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
