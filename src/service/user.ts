/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取用户信息 用户 GET /api/profile */
export function profileUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.ProfileUsingGetResponse>('/api/profile', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 修改昵称或者头像 用户 POST /api/profile */
export function profileUsingPost({
  body,
  options,
}: {
  body: API.ProfileUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ProfileUsingPostResponse>('/api/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
