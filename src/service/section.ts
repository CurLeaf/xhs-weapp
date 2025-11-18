/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获得版块详情 获得版块详情 GET /api/bbs/sections/detail */
export function bbsSectionsDetailUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsSectionsDetailUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<{
    /** 版块ID */
    id: string;
    /** 版块名称 */
    name: string;
    description: string | null;
    cover: string | null;
    type: string | null;
    /** 是否激活 */
    isActive: boolean;
    /** 加入模式 */
    joinMode: string | string;
  } | null>('/api/bbs/sections/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 加入版块 加入版块 POST /api/bbs/sections/join */
export function bbsSectionsJoinUsingPost({
  body,
  options,
}: {
  body: API.BbsSectionsJoinUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.BbsSectionsJoinUsingPostResponse>(
    '/api/bbs/sections/join',
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

/** 退出版块 退出版块 POST /api/bbs/sections/leave */
export function bbsSectionsLeaveUsingPost({
  body,
  options,
}: {
  body: API.BbsSectionsLeaveUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.BbsSectionsLeaveUsingPostResponse>(
    '/api/bbs/sections/leave',
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

/** 获取所有版块 获取所有版块 GET /api/bbs/sections/list */
export function bbsSectionsListUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.BbsSectionsListUsingGetResponse>(
    '/api/bbs/sections/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获取当前用户加入的版块列表 获取当前用户加入的版块列表，包含角色和头衔信息，支持分页 GET /api/bbs/sections/user/joined */
export function bbsSectionsUserJoinedUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsSectionsUserJoinedUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.BbsSectionsUserJoinedUsingGetResponse>(
    '/api/bbs/sections/user/joined',
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // pageSize has a default value: 20
        pageSize: '20',
        ...params,
      },
      ...(options || {}),
    }
  );
}
