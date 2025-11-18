/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取打卡活动详情 获取指定打卡活动的详细信息 GET /api/bbs/checkin-activity/${param0} */
export function bbsCheckinActivityIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsCheckinActivityIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsCheckinActivityIdUsingGetResponse>(
    `/api/bbs/checkin-activity/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 活动打卡 用户在指定活动中进行打卡 POST /api/bbs/checkin-activity/${param0}/checkin */
export function bbsCheckinActivityIdCheckinUsingPost({
  params,
  body,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsCheckinActivityIdCheckinUsingPostParams;
  body: API.BbsCheckinActivityIdCheckinUsingPostBody;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsCheckinActivityIdCheckinUsingPostResponse>(
    `/api/bbs/checkin-activity/${param0}/checkin`,
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

/** 参与打卡活动 用户参与指定的打卡活动 POST /api/bbs/checkin-activity/${param0}/join */
export function bbsCheckinActivityIdJoinUsingPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsCheckinActivityIdJoinUsingPostParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsCheckinActivityIdJoinUsingPostResponse>(
    `/api/bbs/checkin-activity/${param0}/join`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 退出打卡活动 用户退出指定的打卡活动 POST /api/bbs/checkin-activity/${param0}/leave */
export function bbsCheckinActivityIdLeaveUsingPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsCheckinActivityIdLeaveUsingPostParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsCheckinActivityIdLeaveUsingPostResponse>(
    `/api/bbs/checkin-activity/${param0}/leave`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取活动打卡记录 获取指定活动的打卡记录，支持按用户筛选 GET /api/bbs/checkin-activity/${param0}/records */
export function bbsCheckinActivityIdRecordsUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsCheckinActivityIdRecordsUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsCheckinActivityIdRecordsUsingGetResponse>(
    `/api/bbs/checkin-activity/${param0}/records`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 创建打卡活动 创建新的打卡活动 POST /api/bbs/checkin-activity/create */
export function bbsCheckinActivityCreateUsingPost({
  body,
  options,
}: {
  body: API.BbsCheckinActivityCreateUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.BbsCheckinActivityCreateUsingPostResponse>(
    '/api/bbs/checkin-activity/create',
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

/** 获取打卡活动列表 获取打卡活动列表，支持按标题模糊查询和状态筛选 GET /api/bbs/checkin-activity/list */
export function bbsCheckinActivityListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsCheckinActivityListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.BbsCheckinActivityListUsingGetResponse>(
    '/api/bbs/checkin-activity/list',
    {
      method: 'GET',
      params: {
        // status has a default value: active
        status: 'active',
        ...params,
      },
      ...(options || {}),
    }
  );
}
