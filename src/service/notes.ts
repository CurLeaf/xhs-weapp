/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 获取笔记详情 获取笔记详情，包含用户信息、版块成员信息 GET /api/bbs/notes/${param0} */
export function bbsNotesIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsNotesIdUsingGetResponse>(`/api/bbs/notes/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取笔记评论列表 获取指定笔记的评论列表，包含每个评论的回复，支持分页和排序 GET /api/bbs/notes/${param0}/comments */
export function bbsNotesIdCommentsUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesIdCommentsUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsNotesIdCommentsUsingGetResponse>(
    `/api/bbs/notes/${param0}/comments`,
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // pageSize has a default value: 10
        pageSize: '10',
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取单个资源的统计数据 获取指定笔记的点赞数、收藏数、评论数、浏览数、分享数、关注数 GET /api/bbs/notes/${param0}/stats */
export function bbsNotesIdStatsUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesIdStatsUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsNotesIdStatsUsingGetResponse>(
    `/api/bbs/notes/${param0}/stats`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取笔记列表 获取已发布的笔记列表，支持按标题模糊查询、版块筛选、用户ID筛选和用户名模糊查询 GET /api/bbs/notes/list */
export function bbsNotesListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.BbsNotesListUsingGetResponse>('/api/bbs/notes/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取随机笔记作者ID 随机获取一个发布过笔记的作者ID，避免短时间内重复推荐 GET /api/bbs/notes/random-author */
export function bbsNotesRandomAuthorUsingGet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.BbsNotesRandomAuthorUsingGetResponse>(
    '/api/bbs/notes/random-author',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获取某些资源的点赞数;收藏数;评论数;浏览数;分享数;关注数 获取某些资源的点赞数;收藏数;评论数;浏览数;分享数;关注数 POST /api/bbs/notes/stats */
export function bbsNotesStatsUsingPost({
  body,
  options,
}: {
  body: API.BbsNotesStatsUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.BbsNotesStatsUsingPostResponse>('/api/bbs/notes/stats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 评论笔记 对指定笔记添加评论 POST /api/bbs/notes/user/${param0}/comments */
export function bbsNotesUserIdCommentsUsingPost({
  params,
  body,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserIdCommentsUsingPostParams;
  body: API.BbsNotesUserIdCommentsUsingPostBody;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsNotesUserIdCommentsUsingPostResponse>(
    `/api/bbs/notes/user/${param0}/comments`,
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

/** 点赞回复 点赞指定回复 POST /api/bbs/notes/user/${param0}/comments/${param1}/like */
export function bbsNotesUserIdCommentsCommentIdLikeUsingPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserIdCommentsCommentIdLikeUsingPostParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, commentId: param1, ...queryParams } = params;

  return request<API.BbsNotesUserIdCommentsCommentIdLikeUsingPostResponse>(
    `/api/bbs/notes/user/${param0}/comments/${param1}/like`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 取消点赞回复 取消点赞指定回复 DELETE /api/bbs/notes/user/${param0}/comments/${param1}/like */
export function bbsNotesUserIdCommentsCommentIdLikeUsingDelete({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserIdCommentsCommentIdLikeUsingDeleteParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, commentId: param1, ...queryParams } = params;

  return request<API.BbsNotesUserIdCommentsCommentIdLikeUsingDeleteResponse>(
    `/api/bbs/notes/user/${param0}/comments/${param1}/like`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 回复笔记评论 回复指定笔记的评论 POST /api/bbs/notes/user/${param0}/comments/${param1}/reply */
export function bbsNotesUserIdCommentsCommentIdReplyUsingPost({
  params,
  body,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserIdCommentsCommentIdReplyUsingPostParams;
  body: API.BbsNotesUserIdCommentsCommentIdReplyUsingPostBody;
  options?: CustomRequestOptions;
}) {
  const { id: param0, commentId: param1, ...queryParams } = params;

  return request<API.BbsNotesUserIdCommentsCommentIdReplyUsingPostResponse>(
    `/api/bbs/notes/user/${param0}/comments/${param1}/reply`,
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

/** 收藏笔记 收藏指定笔记 POST /api/bbs/notes/user/${param0}/favorite */
export function bbsNotesUserIdFavoriteUsingPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserIdFavoriteUsingPostParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsNotesUserIdFavoriteUsingPostResponse>(
    `/api/bbs/notes/user/${param0}/favorite`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 取消收藏笔记 取消收藏指定笔记 DELETE /api/bbs/notes/user/${param0}/favorite */
export function bbsNotesUserIdFavoriteUsingDelete({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserIdFavoriteUsingDeleteParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsNotesUserIdFavoriteUsingDeleteResponse>(
    `/api/bbs/notes/user/${param0}/favorite`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 关注笔记作者 关注指定笔记的作者 POST /api/bbs/notes/user/${param0}/follow */
export function bbsNotesUserIdFollowUsingPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserIdFollowUsingPostParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsNotesUserIdFollowUsingPostResponse>(
    `/api/bbs/notes/user/${param0}/follow`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 取消关注笔记作者 取消关注指定笔记的作者 DELETE /api/bbs/notes/user/${param0}/follow */
export function bbsNotesUserIdFollowUsingDelete({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserIdFollowUsingDeleteParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsNotesUserIdFollowUsingDeleteResponse>(
    `/api/bbs/notes/user/${param0}/follow`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 点赞 对指定对象进行点赞 POST /api/bbs/notes/user/${param0}/like */
export function bbsNotesUserIdLikeUsingPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserIdLikeUsingPostParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsNotesUserIdLikeUsingPostResponse>(
    `/api/bbs/notes/user/${param0}/like`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 取消点赞 取消对指定对象的点赞 DELETE /api/bbs/notes/user/${param0}/like */
export function bbsNotesUserIdLikeUsingDelete({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserIdLikeUsingDeleteParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsNotesUserIdLikeUsingDeleteResponse>(
    `/api/bbs/notes/user/${param0}/like`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 批量获取当前用户对资源的点赞、收藏、关注状态 返回每个资源的行为状态数组，包含点赞、收藏、关注状态 POST /api/bbs/notes/user/action-status */
export function bbsNotesUserActionStatusUsingPost({
  body,
  options,
}: {
  body: API.BbsNotesUserActionStatusUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.BbsNotesUserActionStatusUsingPostResponse>(
    '/api/bbs/notes/user/action-status',
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

/** 获取用户对某个资源的行为状态 获取当前用户对指定资源的行为状态 GET /api/bbs/notes/user/action-status/${param0} */
export function bbsNotesUserActionStatusIdUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserActionStatusIdUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.BbsNotesUserActionStatusIdUsingGetResponse>(
    `/api/bbs/notes/user/action-status/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取笔记列表 默认获取当前用户发布的笔记列表，可通过参数查询用户点赞或收藏的笔记列表 GET /api/bbs/notes/user/my/list */
export function bbsNotesUserMyListUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserMyListUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.BbsNotesUserMyListUsingGetResponse>(
    '/api/bbs/notes/user/my/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 发布笔记 发布新笔记，可以指定版块和标签 POST /api/bbs/notes/user/publish */
export function bbsNotesUserPublishUsingPost({
  body,
  options,
}: {
  body: API.BbsNotesUserPublishUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.BbsNotesUserPublishUsingPostResponse>(
    '/api/bbs/notes/user/publish',
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

/** 获取当前用户对某用户的关注状态 通过响应状态码判断关注状态：200=已关注，204=未关注 GET /api/bbs/notes/user/user/${param0}/follow-status */
export function bbsNotesUserUserUserIdFollowStatusUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserUserUserIdFollowStatusUsingGetParams;
  options?: CustomRequestOptions;
}) {
  const { userId: param0, ...queryParams } = params;

  return request<API.BbsNotesUserUserUserIdFollowStatusUsingGetResponse>(
    `/api/bbs/notes/user/user/${param0}/follow-status`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取当前用户关注列表 获取当前用户关注的用户列表，支持分页 GET /api/bbs/notes/user/user/following */
export function bbsNotesUserUserFollowingUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.BbsNotesUserUserFollowingUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.BbsNotesUserUserFollowingUsingGetResponse>(
    '/api/bbs/notes/user/user/following',
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
