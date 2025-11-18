/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取设计配置 获取业务设计的全局配置信息 GET /api/biz-design/config */
export function bizDesignConfigUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.BizDesignConfigUsingGetResponse>(
    '/api/biz-design/config',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得首页 获得首页设计页面数据 GET /api/biz-design/index */
export function bizDesignIndexUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.BizDesignIndexUsingGetResponse>('/api/biz-design/index', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取页面详情 根据页面ID获取设计页面的详细信息 GET /api/biz-design/page/${param0} */
export function bizDesignPageIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BizDesignPageIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BizDesignPageIdUsingGetResponse>(
    `/api/biz-design/page/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取个人中心配置 获取个人中心配置 GET /api/biz-design/profile-config */
export function bizDesignProfileConfigUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.BizDesignProfileConfigUsingGetResponse>(
    '/api/biz-design/profile-config',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得商城 获得商城设计页面数据 GET /api/biz-design/shop */
export function bizDesignShopUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<{
    /** 标题 */
    title: string;
    /** 分享描述 */
    shareDesc?: string;
    /** 分享图片 */
    shareImage?: string;
    /** 导航栏模式 */
    navBarMode: 'hidden' | 'default';
    navBarConfig?: {
      /** 导航栏标题 */
      title?: string;
      /** 导航栏背景颜色 */
      backgroundColor?: string;
      /** 导航栏文字颜色 */
      textColor?: string;
    };
    /** 内容 */
    content?: string;
    /** 版权信息 */
    copyright?: string;
  } | null>('/api/biz-design/shop', {
    method: 'GET',
    ...(options || {}),
  });
}
