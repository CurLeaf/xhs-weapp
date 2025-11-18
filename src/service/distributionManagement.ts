/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取分销员列表 获取当前用户的名下分销员列表，包含每个分销员的客户数、佣金数、订单数等统计信息 GET /api/biz-distribution/agent-list */
export function bizDistributionAgentListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BizDistributionAgentListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionAgentListUsingGetResponse>(
    '/api/biz-distribution/agent-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取申请详情 获取当前用户申请详情 GET /api/biz-distribution/apply-detail */
export function bizDistributionApplyDetailUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionApplyDetailUsingGetResponse>(
    '/api/biz-distribution/apply-detail',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 申请成为团长 用户申请成为分销团长 POST /api/biz-distribution/apply-leader */
export function bizDistributionApplyLeaderUsingPost({
  body,
  options,
}: {
  body: API.BizDistributionApplyLeaderUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionApplyLeaderUsingPostResponse>(
    '/api/biz-distribution/apply-leader',
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

/** 绑定分销关系 将当前用户绑定为指定分销员的下级 POST /api/biz-distribution/bind-customer */
export function bizDistributionBindCustomerUsingPost({
  body,
  options,
}: {
  body: API.BizDistributionBindCustomerUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionBindCustomerUsingPostResponse>(
    '/api/biz-distribution/bind-customer',
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

/** 获取佣金订单列表 获取当前用户的佣金订单列表，支持时间过滤 GET /api/biz-distribution/commission-order */
export function bizDistributionCommissionOrderUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BizDistributionCommissionOrderUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionCommissionOrderUsingGetResponse>(
    '/api/biz-distribution/commission-order',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取用户佣金统计 获取当前用户的佣金统计信息，包括总额、可提现、已提现等 GET /api/biz-distribution/commission-stats */
export function bizDistributionCommissionStatsUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionCommissionStatsUsingGetResponse>(
    '/api/biz-distribution/commission-stats',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获取分销配置 获取团购分销业务配置信息 GET /api/biz-distribution/config */
export function bizDistributionConfigUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionConfigUsingGetResponse>(
    '/api/biz-distribution/config',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 用户统计 获取当前用户的用户统计信息 GET /api/biz-distribution/customer-and-agent-stats */
export function bizDistributionCustomerAndAgentStatsUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionCustomerAndAgentStatsUsingGetResponse>(
    '/api/biz-distribution/customer-and-agent-stats',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 将分销员降级为客户 团长将自己团队中的分销员降级为客户，如果该分销员有下级，会将下级重新分配给团长 POST /api/biz-distribution/downgrade-agent-to-customer */
export function bizDistributionDowngradeAgentToCustomerUsingPost({
  body,
  options,
}: {
  body: API.BizDistributionDowngradeAgentToCustomerUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionDowngradeAgentToCustomerUsingPostResponse>(
    '/api/biz-distribution/downgrade-agent-to-customer',
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

/** 生成小程序二维码 分销管理接口 POST /api/biz-distribution/generate-qrcode */
export function bizDistributionGenerateQrcodeUsingPost({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionGenerateQrcodeUsingPostResponse>(
    '/api/biz-distribution/generate-qrcode',
    {
      method: 'POST',
      ...(options || {}),
    }
  );
}

/** 判断是否有分销权限 判断当前用户是否有分销权限 GET /api/biz-distribution/has-permission */
export function bizDistributionHasPermissionUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionHasPermissionUsingGetResponse>(
    '/api/biz-distribution/has-permission',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获取团队列表 获取当前团长名下所有分销员和客户的列表 GET /api/biz-distribution/team-list */
export function bizDistributionTeamListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BizDistributionTeamListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionTeamListUsingGetResponse>(
    '/api/biz-distribution/team-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 尝试绑定分销关系 尝试绑定分销关系 POST /api/biz-distribution/try-bind */
export function bizDistributionTryBindUsingPost({
  body,
  options,
}: {
  body: API.BizDistributionTryBindUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionTryBindUsingPostResponse>(
    '/api/biz-distribution/try-bind',
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

/** 将客户升级为分销员 团长将自己团队中的客户升级为分销员 POST /api/biz-distribution/upgrade-customer-to-agent */
export function bizDistributionUpgradeCustomerToAgentUsingPost({
  body,
  options,
}: {
  body: API.BizDistributionUpgradeCustomerToAgentUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionUpgradeCustomerToAgentUsingPostResponse>(
    '/api/biz-distribution/upgrade-customer-to-agent',
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

/** 获取用户分销角色 获取当前用户的分销角色信息 GET /api/biz-distribution/user-role */
export function bizDistributionUserRoleUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionUserRoleUsingGetResponse>(
    '/api/biz-distribution/user-role',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获取用户钱包明细 获取当前用户的钱包明细 GET /api/biz-distribution/wallet-detail */
export function bizDistributionWalletDetailUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionWalletDetailUsingGetResponse>(
    '/api/biz-distribution/wallet-detail',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 发起提现申请 分销员发起提现申请 POST /api/biz-distribution/withdraw-apply */
export function bizDistributionWithdrawApplyUsingPost({
  body,
  options,
}: {
  body: API.BizDistributionWithdrawApplyUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionWithdrawApplyUsingPostResponse>(
    '/api/biz-distribution/withdraw-apply',
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

/** 获取提现申请记录列表 获取当前用户的提现申请记录列表 GET /api/biz-distribution/withdraw-apply-list */
export function bizDistributionWithdrawApplyListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BizDistributionWithdrawApplyListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.BizDistributionWithdrawApplyListUsingGetResponse>(
    '/api/biz-distribution/withdraw-apply-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
