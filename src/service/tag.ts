/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取标签列表 获取标签列表，支持按笔记ID和热门标签筛选 GET /api/bbs/tags/list */
export function bbsTagsListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsTagsListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.BbsTagsListUsingGetResponse>('/api/bbs/tags/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
