/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 地址解析 根据地址解析成 省 城市 区，地址 GET /api/poi/v1/address */
export function poiV1AddressUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PoiV1AddressUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<{
    /** 省 */
    province: string;
    /** 城市 */
    city: string;
    /** 地址 */
    address: string;
    area?: string | null;
    name?: string | null;
    phone?: string | null;
  } | null>('/api/poi/v1/address', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
