/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 健康检查 检查API服务是否正常运行 GET /api/actx/health */
export function actxHealthUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/api/actx/health', {
    method: 'GET',
    ...(options || {}),
  });
}
