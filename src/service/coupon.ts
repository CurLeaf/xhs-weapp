/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取可领取的优惠券列表 获取可领取的优惠券列表，仅返回启用状态的优惠券，支持分页和类型筛选 GET /api/prmt-coupon/coupon/list */
export function prmtCouponCouponListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PrmtCouponCouponListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PrmtCouponCouponListUsingGetResponse>(
    '/api/prmt-coupon/coupon/list',
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // pageSize has a default value: 30
        pageSize: '30',

        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取领券中心详情 根据ID获取领券中心详情，包含关联的优惠券信息 GET /api/prmt-coupon/receive-center/detail */
export function prmtCouponReceiveCenterDetailUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PrmtCouponReceiveCenterDetailUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PrmtCouponReceiveCenterDetailUsingGetResponse>(
    '/api/prmt-coupon/receive-center/detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取领券中心列表 获取领券中心列表，支持分页和状态筛选 GET /api/prmt-coupon/receive-center/list */
export function prmtCouponReceiveCenterListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PrmtCouponReceiveCenterListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PrmtCouponReceiveCenterListUsingGetResponse>(
    '/api/prmt-coupon/receive-center/list',
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // pageSize has a default value: 10
        pageSize: '10',
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取用户可用的优惠券 获取当前用户未使用且在有效期内的优惠券 GET /api/prmt-coupon/user/available */
export function prmtCouponUserAvailableUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PrmtCouponUserAvailableUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PrmtCouponUserAvailableUsingGetResponse>(
    '/api/prmt-coupon/user/available',
    {
      method: 'GET',
      params: {
        // limit has a default value: 100
        limit: '100',
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取用户可用的优惠券数量 获取当前用户未使用且在有效期内的优惠券数量 GET /api/prmt-coupon/user/available-count */
export function prmtCouponUserAvailableCountUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.PrmtCouponUserAvailableCountUsingGetResponse>(
    '/api/prmt-coupon/user/available-count',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 用户批量领取优惠券 用户批量领取多张优惠券，每张优惠券独立验证领取资格（时间、库存、个人限额等）。返回每张优惠券的领取结果。 POST /api/prmt-coupon/user/batch-receive */
export function prmtCouponUserBatchReceiveUsingPost({
  body,
  options,
}: {
  body: API.PrmtCouponUserBatchReceiveUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.PrmtCouponUserBatchReceiveUsingPostResponse>(
    '/api/prmt-coupon/user/batch-receive',
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

/** 确认优惠券订单是否可以支付 确认优惠券订单是否可以支付 GET /api/prmt-coupon/user/coupon/can-pay */
export function prmtCouponUserCouponCanPayUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PrmtCouponUserCouponCanPayUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PrmtCouponUserCouponCanPayUsingGetResponse>(
    '/api/prmt-coupon/user/coupon/can-pay',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 取消优惠券订单 取消优惠券订单 POST /api/prmt-coupon/user/coupon/cancel */
export function prmtCouponUserCouponCancelUsingPost({
  body,
  options,
}: {
  body: API.PrmtCouponUserCouponCancelUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.PrmtCouponUserCouponCancelUsingPostResponse>(
    '/api/prmt-coupon/user/coupon/cancel',
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

/** 获取用户优惠券详情 根据用户优惠券ID获取详情信息，仅可查看自己的优惠券 GET /api/prmt-coupon/user/coupon/detail */
export function prmtCouponUserCouponDetailUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PrmtCouponUserCouponDetailUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PrmtCouponUserCouponDetailUsingGetResponse>(
    '/api/prmt-coupon/user/coupon/detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取用户所有优惠券列表 获取当前用户的所有优惠券，支持分页和状态筛选 GET /api/prmt-coupon/user/list */
export function prmtCouponUserListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PrmtCouponUserListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PrmtCouponUserListUsingGetResponse>(
    '/api/prmt-coupon/user/list',
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // pageSize has a default value: 50
        pageSize: '50',
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 用户领取优惠券 用户从领券中心领取优惠券，会验证领取资格（时间、库存、个人限额等） POST /api/prmt-coupon/user/receive */
export function prmtCouponUserReceiveUsingPost({
  body,
  options,
}: {
  body: API.PrmtCouponUserReceiveUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.PrmtCouponUserReceiveUsingPostResponse>(
    '/api/prmt-coupon/user/receive',
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
