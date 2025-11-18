/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 核销订单 提交二维码（订单ID）核销，通常需要店员权限或扫码验证 POST /api/actx/verification/order */
export function actxVerificationOrderUsingPost({
  body,
  options,
}: {
  body: API.ActxVerificationOrderUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ActxVerificationOrderUsingPostResponse>(
    '/api/actx/verification/order',
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

/** 验证二维码有效性 验证二维码是否有效，不执行核销操作 POST /api/actx/verification/validate */
export function actxVerificationValidateUsingPost({
  body,
  options,
}: {
  body: API.ActxVerificationValidateUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ActxVerificationValidateUsingPostResponse>(
    '/api/actx/verification/validate',
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
