/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 申请成为名师的学生 创建学生申请记录，绑定指定名师 POST /api/map/student/apply */
export function mapStudentApplyUsingPost({
  body,
  options,
}: {
  body: API.MapStudentApplyUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.MapStudentApplyUsingPostResponse>(
    '/api/map/student/apply',
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
