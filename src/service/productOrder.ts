/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 测试绑定用户为店员 商品订单模块 POST /api/shop/order/bind-clerk */
export function shopOrderBindClerkUsingPost({
  body,
  options,
}: {
  body: API.ShopOrderBindClerkUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderBindClerkUsingPostResponse>(
    '/api/shop/order/bind-clerk',
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

/** 取消订单 - 用户取消订单，恢复库存 商品订单模块 POST /api/shop/order/cancel */
export function shopOrderCancelUsingPost({
  body,
  options,
}: {
  body: API.ShopOrderCancelUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderCancelUsingPostResponse>(
    '/api/shop/order/cancel',
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

/** 确认收货 - 用户确认收到商品 商品订单模块 POST /api/shop/order/confirm-receive */
export function shopOrderConfirmReceiveUsingPost({
  body,
  options,
}: {
  body: API.ShopOrderConfirmReceiveUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderConfirmReceiveUsingPostResponse>(
    '/api/shop/order/confirm-receive',
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

/** 获取单个订单详情信息 商品订单模块 GET /api/shop/order/detail/${param0} */
export function shopOrderDetailIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopOrderDetailIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.ShopOrderDetailIdUsingGetResponse>(
    `/api/shop/order/detail/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 判断商品是否允许自提 商品订单模块 POST /api/shop/order/is-allow-self-pickup */
export function shopOrderIsAllowSelfPickupUsingPost({
  body,
  options,
}: {
  body: API.ShopOrderIsAllowSelfPickupUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderIsAllowSelfPickupUsingPostResponse>(
    '/api/shop/order/is-allow-self-pickup',
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

/** 判断当前用户是否是店员 商品订单模块 GET /api/shop/order/is-clerk */
export function shopOrderIsClerkUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderIsClerkUsingGetResponse>(
    '/api/shop/order/is-clerk',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获取用户订单列表（分页查询，支持状态过滤） 商品订单模块 GET /api/shop/order/list */
export function shopOrderListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopOrderListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderListUsingGetResponse>('/api/shop/order/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单支付 - 创建支付订单，获取支付参数 商品订单模块 POST /api/shop/order/pay */
export function shopOrderPayUsingPost({
  body,
  options,
}: {
  body: API.ShopOrderPayUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderPayUsingPostResponse>('/api/shop/order/pay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 预览订单信息 根据SKU列表预览订单信息，用于优惠券选择前的预计算 POST /api/shop/order/preview-info */
export function shopOrderPreviewInfoUsingPost({
  body,
  options,
}: {
  body: API.ShopOrderPreviewInfoUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderPreviewInfoUsingPostResponse>(
    '/api/shop/order/preview-info',
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

/** 预览运费 - 根据商品和地址计算运费 商品订单模块 POST /api/shop/order/preview-shipping-fee */
export function shopOrderPreviewShippingFeeUsingPost({
  body,
  options,
}: {
  body: API.ShopOrderPreviewShippingFeeUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderPreviewShippingFeeUsingPostResponse>(
    '/api/shop/order/preview-shipping-fee',
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

/** 创建自提订单 商品订单模块 POST /api/shop/order/self-pickup */
export function shopOrderSelfPickupUsingPost({
  body,
  options,
}: {
  body: API.ShopOrderSelfPickupUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderSelfPickupUsingPostResponse>(
    '/api/shop/order/self-pickup',
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

/** 获取所有的自提点 商品订单模块 GET /api/shop/order/self-pickup-points */
export function shopOrderSelfPickupPointsUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderSelfPickupPointsUsingGetResponse>(
    '/api/shop/order/self-pickup-points',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 提交订单 - 创建新订单，计算总价，扣减库存 商品订单模块 POST /api/shop/order/submit */
export function shopOrderSubmitUsingPost({
  body,
  options,
}: {
  body: API.ShopOrderSubmitUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderSubmitUsingPostResponse>(
    '/api/shop/order/submit',
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

/** 生成二维码 商品订单模块 POST /api/shop/order/verify */
export function shopOrderVerifyUsingPost({
  body,
  options,
}: {
  body: API.ShopOrderVerifyUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderVerifyUsingPostResponse>(
    '/api/shop/order/verify',
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

/** 获取订单核销码 商品订单模块 GET /api/shop/order/verify-code */
export function shopOrderVerifyCodeUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopOrderVerifyCodeUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderVerifyCodeUsingGetResponse>(
    '/api/shop/order/verify-code',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 查询订单核销状态 用于轮询核销状态的接口 GET /api/shop/order/verify-status */
export function shopOrderVerifyStatusUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.ShopOrderVerifyStatusUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.ShopOrderVerifyStatusUsingGetResponse>(
    '/api/shop/order/verify-status',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
