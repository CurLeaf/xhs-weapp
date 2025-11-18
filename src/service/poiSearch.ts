/* eslint-disable */
// @ts-ignore
import request from '@/http/vue-query';
import { CustomRequestOptions_ } from '@/http/types';

import * as API from './types';

/** 周边搜索POI 根据中心点坐标搜索指定半径范围内的POI数据，支持关键词和类型过滤，按距离或权重排序，兼容高德地图接口格式。支持腾讯地图(tmap)和高德地图(amap)坐标系输入和输出，默认为高德坐标系。 GET /api/poi/v1/place/around */
export function poiV1PlaceAroundUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.PoiV1PlaceAroundUsingGetParams;
  options?: CustomRequestOptions;
}) {
  return request<API.PoiV1PlaceAroundUsingGetResponse>(
    '/api/poi/v1/place/around',
    {
      method: 'GET',
      params: {
        // radius has a default value: 5000
        radius: '5000',
        // sortrule has a default value: distance
        sortrule: 'distance',
        // page_size has a default value: 10
        page_size: '10',
        // page_num has a default value: 1
        page_num: '1',
        // coord_type has a default value: amap
        coord_type: 'amap',
        ...params,
      },
      ...(options || {}),
    }
  );
}
