/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取用户收货地址 商店用户相关接口 GET /api/shop/user/address */
export function shopUserAddressUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<
    | {
        /** 状态码 */
        code: number;
        /** 响应消息 */
        message: string;
        data: {
          /** 地址ID */
          id: string;
          /** 用户ID */
          userId: string;
          address: {
            /** 省份 */
            province: string;
            /** 城市 */
            city: string;
            /** 区县 */
            district: string;
            /** 详细地址 */
            street: string;
            /** 邮编 */
            zipCode: string;
            /** 联系人姓名 */
            contactName: string;
            /** 联系人电话 */
            contactPhone: string;
          };
          /** 地址状态 */
          status: string;
          /** 创建时间 */
          createdAt: string;
          /** 更新时间 */
          updatedAt: string;
        }[];
      }
    | {
        /** 状态码 */
        code: number;
        /** 响应消息 */
        message: string;
        data: null;
      }
  >('/api/shop/user/address', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 添加用户收货地址 商店用户相关接口 POST /api/shop/user/address */
export function shopUserAddressUsingPost({
  body,
  options,
}: {
  body: API.ShopUserAddressUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<
    | {
        /** 状态码 */
        code: number;
        /** 响应消息 */
        message: string;
        data: {
          /** 地址ID */
          id: string;
          /** 用户ID */
          userId: string;
          address: {
            /** 省份 */
            province: string;
            /** 城市 */
            city: string;
            /** 区县 */
            district: string;
            /** 详细地址 */
            street: string;
            /** 邮编 */
            zipCode: string;
            /** 联系人姓名 */
            contactName: string;
            /** 联系人电话 */
            contactPhone: string;
          };
          /** 地址状态 */
          status: string;
          /** 创建时间 */
          createdAt: string;
          /** 更新时间 */
          updatedAt: string;
        };
      }
    | {
        /** 状态码 */
        code: number;
        /** 响应消息 */
        message: string;
        data: null;
      }
  >('/api/shop/user/address', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置默认收货地址 商店用户相关接口 POST /api/shop/user/address/${param0}/default */
export function shopUserAddressIdOpenApiDefaultUsingPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopUserAddressIdOpenApiDefaultUsingPostParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<
    | {
        /** 状态码 */
        code: number;
        /** 响应消息 */
        message: string;
        data: {
          /** 地址ID */
          id: string;
          /** 用户ID */
          userId: string;
          address: {
            /** 省份 */
            province: string;
            /** 城市 */
            city: string;
            /** 区县 */
            district: string;
            /** 详细地址 */
            street: string;
            /** 邮编 */
            zipCode: string;
            /** 联系人姓名 */
            contactName: string;
            /** 联系人电话 */
            contactPhone: string;
          };
          /** 地址状态 */
          status: string;
          /** 创建时间 */
          createdAt: string;
          /** 更新时间 */
          updatedAt: string;
        };
      }
    | {
        /** 状态码 */
        code: number;
        /** 响应消息 */
        message: string;
        data: null;
      }
  >(`/api/shop/user/address/${param0}/default`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除用户收货地址 商店用户相关接口 POST /api/shop/user/address/${param0}/delete */
export function shopUserAddressIdOpenApiDeleteUsingPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopUserAddressIdOpenApiDeleteUsingPostParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<
    | {
        /** 状态码 */
        code: number;
        /** 响应消息 */
        message: string;
        data: {
          /** 地址ID */
          id: string;
          /** 用户ID */
          userId: string;
          address: {
            /** 省份 */
            province: string;
            /** 城市 */
            city: string;
            /** 区县 */
            district: string;
            /** 详细地址 */
            street: string;
            /** 邮编 */
            zipCode: string;
            /** 联系人姓名 */
            contactName: string;
            /** 联系人电话 */
            contactPhone: string;
          };
          /** 地址状态 */
          status: string;
          /** 创建时间 */
          createdAt: string;
          /** 更新时间 */
          updatedAt: string;
        };
      }
    | {
        /** 状态码 */
        code: number;
        /** 响应消息 */
        message: string;
        data: null;
      }
  >(`/api/shop/user/address/${param0}/delete`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}
