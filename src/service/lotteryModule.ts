/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取活动详情 获取抽奖活动详细信息和用户配额 GET /api/lot/activity/${param0} */
export function lotActivityActivityIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.LotActivityActivityIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { activityId: param0, ...queryParams } = params;

  return request<API.LotActivityActivityIdUsingGetResponse>(
    `/api/lot/activity/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 执行抽奖 用户参与抽奖活动 POST /api/lot/draw/${param0} */
export function lotDrawActivityIdUsingPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.LotDrawActivityIdUsingPostParams;
  options?: CustomRequestOptions;
}) {
  const { activityId: param0, ...queryParams } = params;

  return request<API.LotDrawActivityIdUsingPostResponse>(
    `/api/lot/draw/${param0}`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 增加当前用户抽奖次数 为当前登录用户增加抽奖配额 POST /api/lot/quota/add */
export function lotQuotaAddUsingPost({
  body,
  options,
}: {
  body: API.LotQuotaAddUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.LotQuotaAddUsingPostResponse>('/api/lot/quota/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户今日可抽次数 获取用户今日可抽奖次数，综合考虑活动每日限制和用户剩余配额 GET /api/lot/quota/stats */
export function lotQuotaStatsUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.LotQuotaStatsUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.LotQuotaStatsUsingGetResponse>('/api/lot/quota/stats', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取我的抽奖记录 查看我的抽奖历史记录 GET /api/lot/records */
export function lotRecordsUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.LotRecordsUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.LotRecordsUsingGetResponse>('/api/lot/records', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // limit has a default value: 10
      limit: '10',
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取奖励详情 查看单个奖励的详细信息 GET /api/lot/reward/${param0} */
export function lotRewardRewardIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.LotRewardRewardIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { rewardId: param0, ...queryParams } = params;

  return request<API.LotRewardRewardIdUsingGetResponse>(
    `/api/lot/reward/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 提交收货地址 为实物奖励提交收货地址信息 POST /api/lot/reward/${param0}/delivery */
export function lotRewardRewardIdDeliveryUsingPost({
  params,
  body,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.LotRewardRewardIdDeliveryUsingPostParams;
  body: API.LotRewardRewardIdDeliveryUsingPostBody;
  options?: CustomRequestOptions;
}) {
  const { rewardId: param0, ...queryParams } = params;

  return request<API.LotRewardRewardIdDeliveryUsingPostResponse>(
    `/api/lot/reward/${param0}/delivery`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    }
  );
}

/** 获取我的奖励列表 查看我的中奖奖励 GET /api/lot/rewards */
export function lotRewardsUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.LotRewardsUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.LotRewardsUsingGetResponse>('/api/lot/rewards', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // limit has a default value: 10
      limit: '10',

      ...params,
    },
    ...(options || {}),
  });
}

/** 核销奖励 使用核销码核销用户奖励 POST /api/lot/verify */
export function lotVerifyUsingPost({
  body,
  options,
}: {
  body: API.LotVerifyUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.LotVerifyUsingPostResponse>('/api/lot/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
