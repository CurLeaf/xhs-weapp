/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 手机号验证码登录 使用手机号和验证码登录 POST /api/login/phone/captcha */
export function loginPhoneCaptchaUsingPost({
  body,
  options,
}: {
  body: API.LoginPhoneCaptchaUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.LoginPhoneCaptchaUsingPostResponse>(
    '/api/login/phone/captcha',
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

/** 账号密码登录 登录 POST /api/login/signin */
export function loginSigninUsingPost({
  body,
  options,
}: {
  body: API.LoginSigninUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.LoginSigninUsingPostResponse>('/api/login/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 统一登录 支持短信登录/小程序抖音登录 POST /api/login/union */
export function loginUnionUsingPost({
  body,
  options,
}: {
  body: API.LoginUnionUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.LoginUnionUsingPostResponse>('/api/login/union', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 小程序code登录 使用code登录，根据请求头app-channel识别渠道（wechat/douyin），用户必须已注册 POST /api/login/weapp/code */
export function loginWeappCodeUsingPost({
  body,
  options,
}: {
  body: API.LoginWeappCodeUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.LoginWeappCodeUsingPostResponse>('/api/login/weapp/code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 小程序手机号注册 使用code和手机号信息注册用户，根据请求头app-channel识别渠道（wechat/douyin） POST /api/login/weapp/phone */
export function loginWeappPhoneUsingPost({
  body,
  options,
}: {
  body: API.LoginWeappPhoneUsingPostBody;
  options?: CustomRequestOptions;
}) {
  return request<API.LoginWeappPhoneUsingPostResponse>(
    '/api/login/weapp/phone',
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
