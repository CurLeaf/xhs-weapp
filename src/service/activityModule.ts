/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取活动列表 获取活动列表，支持按时间范围过滤。可以通过startTime和endTime参数指定时间范围，如果不提供时间参数则默认返回包含当前时间的活动 GET /api/actx/activity */
export function actxActivityUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxActivityUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.ActxActivityUsingGetResponse>('/api/actx/activity', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取活动详情 根据活动ID获取活动详情，包括商品列表和门店信息 GET /api/actx/activity/${param0} */
export function actxActivityIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxActivityIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ActxActivityIdUsingGetResponse>(
    `/api/actx/activity/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取活动动态表单配置 获取活动所需的动态表单字段定义 GET /api/actx/activity/${param0}/form */
export function actxActivityIdFormUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxActivityIdFormUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ActxActivityIdFormUsingGetResponse>(
    `/api/actx/activity/${param0}/form`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取活动商品列表 获取指定活动下的所有可用商品 GET /api/actx/activity/${param0}/products */
export function actxActivityIdProductsUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxActivityIdProductsUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ActxActivityIdProductsUsingGetResponse>(
    `/api/actx/activity/${param0}/products`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取费用表 获取活动下的所有费用表 GET /api/actx/activity/fee-items/${param0} */
export function actxActivityFeeItemsIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxActivityFeeItemsIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ActxActivityFeeItemsIdUsingGetResponse>(
    `/api/actx/activity/fee-items/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取商品详情 根据商品ID获取活动商品的详细信息，包括库存、价格、生效规则等 GET /api/actx/activity/product/${param0} */
export function actxActivityProductIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ActxActivityProductIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ActxActivityProductIdUsingGetResponse>(
    `/api/actx/activity/product/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}
