/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 绑定活动店员 活动店员相关接口 POST /api/actx/clerk/bind */
export function actxClerkBindUsingPost({
  body,
  options,
}: {
  body: API.ActxClerkBindUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ActxClerkBindUsingPostResponse>('/api/actx/clerk/bind', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 检查当前用户是否为活动店员 活动店员相关接口 GET /api/actx/clerk/check */
export function actxClerkCheckUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.ActxClerkCheckUsingGetResponse>('/api/actx/clerk/check', {
    method: 'GET',
    ...(options || {}),
  });
}
