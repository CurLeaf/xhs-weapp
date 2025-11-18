/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 创建收款订单 创建一个新的收款订单 POST /api/receive/create-order */
export function receiveCreateOrderUsingPost({
  body,
  options,
}: {
  body: API.ReceiveCreateOrderUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ReceiveCreateOrderUsingPostResponse>(
    '/api/receive/create-order',
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

/** 创建收款订单 创建一个新的收款订单 POST /api/receive/create-temporary-order */
export function receiveCreateTemporaryOrderUsingPost({
  body,
  options,
}: {
  body: API.ReceiveCreateTemporaryOrderUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ReceiveCreateTemporaryOrderUsingPostResponse>(
    '/api/receive/create-temporary-order',
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

/** 获取收款码信息 通过ID获取收款码详细信息 GET /api/receive/get-qrcode/${param0} */
export function receiveGetQrcodeIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ReceiveGetQrcodeIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ReceiveGetQrcodeIdUsingGetResponse>(
    `/api/receive/get-qrcode/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 支付订单 支付收款订单 POST /api/receive/wechat-pay */
export function receiveWechatPayUsingPost({
  body,
  options,
}: {
  body: API.ReceiveWechatPayUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ReceiveWechatPayUsingPostResponse>(
    '/api/receive/wechat-pay',
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
