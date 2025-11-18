/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取文章详情 根据ID获取已发布文章的详细信息 GET /api/cms/article/${param0} */
export function cmsArticleIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.CmsArticleIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.CmsArticleIdUsingGetResponse>(
    `/api/cms/article/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取文章列表 分页获取已发布的文章列表 GET /api/cms/articles */
export function cmsArticlesUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.CmsArticlesUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CmsArticlesUsingGetResponse>('/api/cms/articles', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // pageSize has a default value: 10
      pageSize: '10',
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取所有有效分类 获取所有有效的文章分类列表 GET /api/cms/categories */
export function cmsCategoriesUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CmsCategoriesUsingGetResponse>('/api/cms/categories', {
    method: 'GET',
    ...(options || {}),
  });
}
