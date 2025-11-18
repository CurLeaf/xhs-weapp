/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取订单物流轨迹 根据订单号获取物流轨迹信息 GET /api/shop/ship/track/${param1}/${param0} */
export function shopShipTrackTypeOrderNoUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopShipTrackTypeOrderNoUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { orderNo: param0, type: param1, ...queryParams } = params;

  return request<API.ShopShipTrackTypeOrderNoUsingGetResponse>(
    `/api/shop/ship/track/${param1}/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}
