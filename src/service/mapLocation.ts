/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 地图点位模块 POST /api/map/points */
export function mapPointsUsingPost({
  body,
  options,
}: {
  body: API.MapPointsUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.MapPointsUsingPostResponse>('/api/map/points', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
