/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取商品分类列表 获取一级商品分类列表 GET /api/shop/product/categories */
export function shopProductCategoriesUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.ShopProductCategoriesUsingGetResponse>(
    '/api/shop/product/categories',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获取商品详情 根据商品ID获取商品详细信息 GET /api/shop/product/detail */
export function shopProductDetailUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopProductDetailUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopProductDetailUsingGetResponse>(
    '/api/shop/product/detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 搜索商品 根据关键字、分类、价格区间、标签、SKU ID等条件搜索商品 GET /api/shop/product/search */
export function shopProductSearchUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopProductSearchUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopProductSearchUsingGetResponse>(
    '/api/shop/product/search',
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
