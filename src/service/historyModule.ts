/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取我的参与记录 查看当前用户参与的所有活动记录 GET /api/actx/history/activities */
export function actxHistoryActivitiesUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxHistoryActivitiesUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.ActxHistoryActivitiesUsingGetResponse>(
    '/api/actx/history/activities',
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // limit has a default value: 10
        limit: '10',
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取我的订单列表 获取当前用户的所有订单列表 GET /api/actx/history/orders */
export function actxHistoryOrdersUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxHistoryOrdersUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.ActxHistoryOrdersUsingGetResponse>(
    '/api/actx/history/orders',
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // limit has a default value: 10
        limit: '10',

        ...params,
      },
      ...(options || {}),
    }
  );
}
