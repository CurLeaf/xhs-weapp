/* eslint-disable */
// @ts-ignore

export type ActxActivityFeeItemsIdUsingGetParams = {
  /** 活动ID */
  id: string;
};

export type ActxActivityFeeItemsIdUsingGetResponse = {
  success: boolean;
  data?: {
    id: string;
    name: string;
    description: string | null;
    amount: number;
    required: boolean;
    minQuantity: number;
    enabled: boolean;
    sort: number;
  }[];
  message?: string;
  error?: string;
};

export type ActxActivityFeeItemsIdUsingGetResponses = {
  200: ActxActivityFeeItemsIdUsingGetResponse;
};

export type ActxActivityIdFormUsingGetParams = {
  /** 活动ID */
  id: string;
};

export type ActxActivityIdFormUsingGetResponse = {
  success: boolean;
  data?: {
    enableForm?: boolean;
    fields?: {
      /** 字段标签 */
      label: string;
      /** 字段类型 */
      type: string;
      /** 是否必填 */
      required: boolean;
      /** 占位提示文本 */
      placeholder: string;
      /** 字段描述 */
      description?: string;
      /** 选项列表 */
      options?: string[];
      /** 最大长度 */
      maxLength?: number;
      /** 文本框行数 */
      rows?: number;
      /** 验证规则 */
      validation?: string;
    }[];
  };
  message?: string;
  error?: string;
};

export type ActxActivityIdFormUsingGetResponses = {
  200: ActxActivityIdFormUsingGetResponse;
};

export type ActxActivityIdProductsUsingGetParams = {
  /** 活动ID */
  id: string;
};

export type ActxActivityIdProductsUsingGetResponse = {
  success: boolean;
  data?: {
    id: string;
    name: string;
    description?: string;
    coverImage?: string;
    price: number;
    originalPrice?: number;
    stock: number;
    sold: number;
    purchaseLimit?: number;
    effectiveType: string;
    effectiveDate?: Date | string | string | number;
    expireType: string;
    expireDate?: Date | string | string | number;
    expireAfterDays?: number;
    autoRefundOnExpire: boolean;
  }[];
  message?: string;
  error?: string;
};

export type ActxActivityIdProductsUsingGetResponses = {
  200: ActxActivityIdProductsUsingGetResponse;
};

export type ActxActivityIdUsingGetParams = {
  /** 活动ID */
  id: string;
};

export type ActxActivityIdUsingGetResponse = {
  success: boolean;
  data?: {
    id?: string;
    title?: string;
    description?: string;
    coverImage?: string;
    shareImage?: string;
    shareTitle?: string;
    shareDesc?: string;
    status?: string;
    startTime?: Date | string | string | number;
    endTime?: Date | string | string | number;
    timePeriods?: unknown;
    cycleType?: string;
    enableForm?: boolean;
    enableTimeLimit?: boolean;
    fields?: unknown;
    servicePhone?: string;
    serviceWechat?: string;
    serviceQrcode?: string;
    feeItems?: {
      id: string;
      name: string;
      amount: number;
      required: boolean;
      minQuantity: number;
      enabled: boolean;
      sort: number;
      description: string | null;
    }[];
    products?: {
      id: string;
      name: string;
      coverImage?: string;
      price: number;
      images: string[] | null;
      originalPrice?: number;
      stock: number;
      sold: number;
      purchaseLimit?: number;
      effectiveType: string;
      effectiveDate?: Date | string | string | number;
      expireType: string;
      expireDate?: Date | string | string | number;
      expireAfterDays?: number;
      autoRefundOnExpire: boolean;
    }[];
    stores?: {
      id: string;
      name: string;
      address: string;
      phone: string;
      longitude?: number;
      latitude?: number;
    }[];
    pv?: number;
    uv?: number;
  };
  message?: string;
  error?: string;
};

export type ActxActivityIdUsingGetResponses = {
  200: ActxActivityIdUsingGetResponse;
};

export type ActxActivityProductIdUsingGetParams = {
  /** 商品ID */
  id: string;
};

export type ActxActivityProductIdUsingGetResponse = {
  success: boolean;
  data?: {
    id?: string;
    name?: string;
    description?: string | null;
    coverImage?: string | null;
    images?: string[] | null;
    price?: number;
    originalPrice?: number;
    stock?: number;
    sold?: number;
    verified?: number;
    purchaseLimit?: number;
    activityLimit?: number;
    effectiveType?: string;
    effectiveDate?: Date | string | string | number | null;
    expireType?: string;
    expireDate?: Date | string | string | number | null;
    expireAfterDays?: number | null;
    autoRefundOnExpire?: boolean;
    activityId?: string;
    activity: {
      id: string;
      title: string;
      status: string;
      startTime: Date | string | string | number;
      endTime: Date | string | string | number;
    };
  };
  message?: string;
  error?: string;
};

export type ActxActivityProductIdUsingGetResponses = {
  200: ActxActivityProductIdUsingGetResponse;
};

export type ActxActivityUsingGetParams = {
  ids?: string[];
  /** YYYY-MM-DD */
  startTime?: string;
  /** YYYY-MM-DD */
  endTime?: string;
  /** 活动状态 */
  status?: string;
};

export type ActxActivityUsingGetResponse = {
  success: boolean;
  data: {
    id: string;
    coverImage: string;
    title: string;
    description: string | null;
    rules: string | null;
    shareImage: string | null;
    shareTitle: string | null;
    shareDesc: string | null;
    status: string;
    startTime: Date | string | string | number;
    endTime: Date | string | string | number;
    timePeriods:
      | {
          id: string;
          startTime: string;
          endTime: string;
          weekdays: number[];
        }[]
      | null;
    products: {
      id: string;
      name: string;
      coverImage: string | null;
      price: number;
      originalPrice: number | null;
      stock: number;
      sold: number;
      purchaseLimit: number | null;
      enabled: boolean;
      effectiveType: string;
      effectiveDate: Date | string | string | number | null;
      expireType: string;
      expireDate: Date | string | string | number | null;
      expireAfterDays: number | null;
      autoRefundOnExpire: boolean;
      activityId: string;
    }[];
    feeItems: {
      id: string;
      name: string;
      amount: number;
      required: boolean;
      minQuantity: number;
      enabled: boolean;
      sort: number;
    }[];
    stores: {
      id: string;
      name: string;
      address: string;
      phone: string;
      longitude: number | null;
      latitude: number | null;
    }[];
  }[];
};

export type ActxActivityUsingGetResponses = {
  200: ActxActivityUsingGetResponse;
};

export type ActxClerkBindUsingPostBody = {
  /** 绑定令牌 */
  token: string;
};

export type ActxClerkBindUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
};

export type ActxClerkBindUsingPostResponses = {
  200: ActxClerkBindUsingPostResponse;
};

export type ActxClerkCheckUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 是否为活动店员 */
    isClerk: boolean;
    /** 用户名 */
    userName: string;
  };
};

export type ActxClerkCheckUsingGetResponses = {
  200: ActxClerkCheckUsingGetResponse;
};

export type ActxHealthUsingGetResponses = {
  200: unknown;
};

export type ActxHistoryActivitiesUsingGetParams = {
  /** 页码 */
  page?: number | number;
  /** 每页数量 */
  limit?: number | number;
};

export type ActxHistoryActivitiesUsingGetResponse = {
  success: boolean;
  data?: {
    activities?: {
      activity: {
        id: string;
        title: string;
        coverImage: string;
        startTime: Date | string | string | number;
        endTime?: Date | string | string | number;
      };
      orders: unknown[];
      stats: {
        totalOrders: number;
        totalAmount: number;
        usedOrders: number;
        pendingOrders: number;
      };
    }[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      pages: number;
    };
  };
  message?: string;
  error?: string;
};

export type ActxHistoryActivitiesUsingGetResponses = {
  200: ActxHistoryActivitiesUsingGetResponse;
};

export type ActxHistoryOrdersUsingGetParams = {
  /** 页码 */
  page?: number | number;
  /** 每页数量 */
  limit?: number | number;
  /** 订单状态筛选 */
  status?: string;
  /** 活动ID筛选 */
  activityId?: string;
};

export type ActxHistoryOrdersUsingGetResponse = {
  success: boolean;
  data?: {
    orders?: {
      id: string;
      orderNo: string;
      activity: {
        id: string;
        title: string;
        coverImage: string;
      };
      status: string;
      payStatus: string;
      amount: number;
      createdAt: Date | string | string | number;
      items: {
        id: string;
        name: string;
        coverImage?: string;
        price: number;
        quantity: number;
        usedCount: number;
        effectiveAt?: Date | string | string | number;
        expireAt?: Date | string | string | number;
        usedAt?: Date | string | string | number;
        product: {
          name: string;
          coverImage?: string;
        };
      }[];
    }[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      pages: number;
    };
  };
  message?: string;
  error?: string;
};

export type ActxHistoryOrdersUsingGetResponses = {
  200: ActxHistoryOrdersUsingGetResponse;
};

export type ActxOrderCancelUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 取消原因 */
  reason?: string;
};

export type ActxOrderCancelUsingPostResponse = {
  success: boolean;
  data?: {
    /** 订单ID */
    orderId?: string;
    /** 订单状态 */
    status?: string;
    /** 退款金额 */
    refundAmount?: number;
    /** 取消原因 */
    cancelReason?: string;
    /** 处理结果消息 */
    message?: string;
    /** 处理预计时间 */
    estimatedTime?: string;
  };
  message?: string;
  error?: string;
};

export type ActxOrderCancelUsingPostResponses = {
  200: ActxOrderCancelUsingPostResponse;
};

export type ActxOrderIdRefundUsingPostBody = {
  /** 退款原因 */
  reason: string;
};

export type ActxOrderIdRefundUsingPostParams = {
  /** 订单ID */
  id: string;
};

export type ActxOrderIdRefundUsingPostResponse = {
  success: boolean;
  data?: {
    refundId?: string;
    refundAmount?: number;
    message?: string;
    estimatedTime?: string;
  };
  message?: string;
  error?: string;
};

export type ActxOrderIdRefundUsingPostResponses = {
  200: ActxOrderIdRefundUsingPostResponse;
};

export type ActxOrderIdStatusUsingGetParams = {
  /** 订单ID */
  id: string;
};

export type ActxOrderIdStatusUsingGetResponse = {
  success: boolean;
  data?: {
    orderId?: string;
    orderNo?: string;
    status?: string;
    payStatus?: string;
    amount?: number;
    payTime?: Date | string | string | number;
    paymentOrderId?: string;
  };
  message?: string;
  error?: string;
};

export type ActxOrderIdStatusUsingGetResponses = {
  200: ActxOrderIdStatusUsingGetResponse;
};

export type ActxOrderIdUsingGetParams = {
  /** 订单ID */
  id: string;
};

export type ActxOrderIdUsingGetResponse = {
  success: boolean;
  data?: {
    id?: string;
    orderNo?: string;
    activity: {
      id: string;
      title: string;
      coverImage: string;
    };
    status?: string;
    payStatus?: string;
    amount?: number;
    formData?: unknown;
    remark?: string;
    payTime?: Date | string | string | number;
    createdAt?: Date | string | string | number;
    expiredAt?: Date | string | string | number | null;
    feeItems?:
      | {
          /** 费用项ID */
          id: string;
          /** 费用项名称 */
          name: string;
          /** 费用金额 */
          amount: number;
          /** 购买数量 */
          quantity: number;
          /** 总金额 */
          total: number;
        }[]
      | null;
    items?: {
      id: string;
      name: string;
      coverImage?: string;
      price: number;
      quantity: number;
      usedCount: number;
      effectiveAt?: Date | string | string | number;
      expireAt?: Date | string | string | number;
      usedAt?: Date | string | string | number;
      product: {
        name: string;
        coverImage?: string;
      };
    }[];
  };
  message?: string;
  error?: string;
};

export type ActxOrderIdUsingGetResponses = {
  200: ActxOrderIdUsingGetResponse;
};

export type ActxOrderItemOrderItemIdVerifyUsingPostBody = {
  /** 核销数量 */
  quantity: number | number;
};

export type ActxOrderItemOrderItemIdVerifyUsingPostParams = {
  /** 订单项ID */
  orderItemId: string;
};

export type ActxOrderItemOrderItemIdVerifyUsingPostResponse = {
  success: boolean;
  message?: string;
  data?: {
    /** 订单项ID */
    orderItemId?: string;
    /** 订单ID */
    orderId?: string;
    /** 订单号 */
    orderNo?: string;
    /** 活动标题 */
    activityTitle?: string;
    /** 商品名称 */
    productName?: string;
    /** 本次核销数量 */
    verifiedQuantity?: number;
    /** 剩余可核销数量 */
    remainingQuantity?: number;
    /** 订单项总数量 */
    totalQuantity?: number;
    /** 累计已核销数量 */
    newUsedCount?: number;
    /** 订单是否全部核销完成 */
    orderFullyUsed?: boolean;
    /** 订单当前状态 */
    orderStatus?: string;
  };
  error?: string;
};

export type ActxOrderItemOrderItemIdVerifyUsingPostResponses = {
  200: ActxOrderItemOrderItemIdVerifyUsingPostResponse;
};

export type ActxOrderListUsingGetParams = {
  /** 订单状态筛选：ALL(全部), PENDING(待支付), PAID(已支付), USED(已核销), EXPIRED(已过期), REFUNDED(已退款), CANCELLED(已取消) */
  status?: string;
  /** 页码 */
  page?: number | number;
  /** 每页数量 */
  pageSize?: number | number;
};

export type ActxOrderListUsingGetResponse = {
  success: boolean;
  data?: {
    orders?: {
      id: string;
      orderNo: string;
      activity: {
        id: string;
        title: string;
        coverImage: string;
        startTime: Date | string | string | number;
        endTime: Date | string | string | number;
      };
      status: string;
      payStatus: string;
      amount: number;
      paidAmount: number;
      expiredAt: Date | string | string | number | null;
    }[];
    pagination: {
      page: number;
      pageSize: number;
      total: number;
      totalPages: number;
    };
  };
  message?: string;
  error?: string;
};

export type ActxOrderListUsingGetResponses = {
  200: ActxOrderListUsingGetResponse;
};

export type ActxOrderPaymentSignUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 支付方式：wechat/alipay */
  paymentMethod: string;
};

export type ActxOrderPaymentSignUsingPostResponse = {
  success: boolean;
  data?: {
    orderId?: string;
    paymentMethod?: string;
    timestamp?: number;
    nonceStr?: string;
    sign?: string;
    paymentOrderId?: string;
    mockPayment?: boolean;
    paymentParams?: unknown;
  };
  message?: string;
  error?: string;
};

export type ActxOrderPaymentSignUsingPostResponses = {
  200: ActxOrderPaymentSignUsingPostResponse;
};

export type ActxOrderPayUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 支付渠道ID */
  channelId: string;
  /** 支付主题/商品名称 */
  subject?: string;
  /** 支付描述 */
  description?: string;
  /** 微信openid */
  openid: string;
};

export type ActxOrderPayUsingPostResponse = {
  success: boolean;
  message?: string;
  data?: {
    /** 活动订单ID */
    orderId?: string;
    /** 订单号 */
    orderNo?: string;
    /** 支付网关订单ID */
    paymentGatewayOrderId?: string;
    /** 支付渠道ID */
    channelId?: string;
    /** 支付金额 */
    amount?: number;
    /** 支付订单创建时间 */
    createdAt?: string;
    /** 支付渠道额外参数 */
    extra?: unknown;
    /** 支付链接 */
    paymentUrl?: string;
    /** 微信小程序支付参数 */
    payParams?: unknown;
  };
  error?: string;
};

export type ActxOrderPayUsingPostResponses = {
  200: ActxOrderPayUsingPostResponse;
};

export type ActxOrderQrcodeOrderItemIdUsingGetParams = {
  /** 订单项ID */
  orderItemId: string;
};

export type ActxOrderQrcodeOrderItemIdUsingGetResponse = {
  success: boolean;
  data?: {
    orderId?: string;
    orderNo?: string;
    verifyCode?: string;
    qrContent?: unknown;
    qrImageUrl?: string;
    expiresAt?: string;
    remainingTime?: number;
    orderInfo: {
      activity: {
        id: string;
        title: string;
        coverImage: string;
        stores: {
          id: string;
          name: string;
        }[];
      };
      items: {
        name: string;
        quantity: number;
        usedCount: number;
        remainingCount: number;
      }[];
      amount: number;
      status: string;
    };
  };
  message?: string;
};

export type ActxOrderQrcodeOrderItemIdUsingGetResponses = {
  200: ActxOrderQrcodeOrderItemIdUsingGetResponse;
};

export type ActxOrderUsingPostBody = {
  /** 商品ID */
  productId: string;
  /** 购买数量 */
  quantity: number | number;
  /** 备注 */
  remark?: string;
  formData?: {
    /** 字段名 */
    field: string;
    /** 字段值 */
    value: unknown;
    /** 字段类型 */
    type?: string;
  }[];
  feeItems?: {
    id: string;
    /** 购买数量 */
    quantity: number | number;
  }[];
};

export type ActxOrderUsingPostResponse = {
  success: boolean;
  data?: {
    orderId?: string;
    orderNo?: string;
    amount?: number;
    message?: string;
  };
  message?: string;
  error?: string;
};

export type ActxOrderUsingPostResponses = {
  200: ActxOrderUsingPostResponse;
};

export type ActxTourCarouselUsingGetResponse = {
  success: boolean;
  data?: {
    id: string;
    cover: string | null;
    duration: unknown;
    title: string;
    images: string[];
  }[];
  message?: string;
  error?: string;
};

export type ActxTourCarouselUsingGetResponses = {
  200: ActxTourCarouselUsingGetResponse;
};

export type ActxTourIdUsingGetParams = {
  /** 旅游路线ID */
  id: string;
};

export type ActxTourIdUsingGetResponse = {
  success: boolean;
  data?: {
    title?: string;
    cover?: string | null;
    images?: string[];
    description?: string | null;
    content?: string | null;
    tags?: string[];
    duration?: unknown;
    spots?: {
      id: string;
      name: string;
      cover: string | null;
      content: string | null;
      address: unknown;
    }[];
    schedules?: {
      note: unknown | null;
      startDate: Date | string | string | number | null;
      endDate: Date | string | string | number | null;
    }[];
  };
  message?: string;
  error?: string;
};

export type ActxTourIdUsingGetResponses = {
  200: ActxTourIdUsingGetResponse;
};

export type ActxTourListUsingGetParams = {
  /** 搜索关键词，可模糊匹配路线名称或景点名称 */
  search?: string;
  /** 天数筛选 */
  duration?: string;
};

export type ActxTourListUsingGetResponse = {
  success: boolean;
  data?: {
    id: string;
    cover: string | null;
    title: string;
    tags: string[];
  }[];
  message?: string;
  error?: string;
};

export type ActxTourListUsingGetResponses = {
  200: ActxTourListUsingGetResponse;
};

export type ActxTourSpotIdUsingGetParams = {
  /** 景点ID */
  id: string;
};

export type ActxTourSpotIdUsingGetResponse = {
  success: boolean;
  data?: {
    name?: string;
    cover?: string | null;
    images?: string[];
    description?: string | null;
    tags?: string[];
    content?: string | null;
    address?: unknown;
    status?: string;
    openingHours?: unknown;
  };
  message?: string;
  error?: string;
};

export type ActxTourSpotIdUsingGetResponses = {
  200: ActxTourSpotIdUsingGetResponse;
};

export type ActxVerificationOrderUsingPostBody = {
  /** 二维码内容 */
  qrContent: unknown;
  /** 核销数量 */
  quantity?: number | number;
  /** 店员ID */
  clerkId?: string;
  /** 店员姓名 */
  clerkName?: string;
  /** 门店ID */
  storeId?: string;
};

export type ActxVerificationOrderUsingPostResponse = {
  success: boolean;
  data?: {
    orderId?: string;
    verifyCode?: string;
    verifiedQuantity?: number;
    remainingQuantity?: number;
    message?: string;
  };
  message?: string;
};

export type ActxVerificationOrderUsingPostResponses = {
  200: ActxVerificationOrderUsingPostResponse;
};

export type ActxVerificationValidateUsingPostBody = {
  /** 二维码内容 */
  qrContent: unknown;
};

export type ActxVerificationValidateUsingPostResponse = {
  success: boolean;
  data?: {
    valid?: boolean;
    message?: string;
    order: {
      id: string;
      orderNo: string;
      status: string;
      activityTitle: string;
      amount?: number;
      totalQuantity?: number;
      totalUsed?: number;
      remainingQuantity?: number;
      items?: {
        name: string;
        quantity: number;
        usedCount: number;
        remainingCount: number;
      }[];
    };
  };
  message?: string;
};

export type ActxVerificationValidateUsingPostResponses = {
  200: ActxVerificationValidateUsingPostResponse;
};

export type BbsCheckinActivityCreateUsingPostBody = {
  /** 活动标题 */
  title: string;
  /** 活动描述 */
  description?: string;
  /** 打卡频率 */
  frequency: string | string;
  /** 开始日期 */
  startDate: string;
  /** 结束日期 */
  endDate?: string;
  /** 打卡开始时间 */
  startTime?: string;
  /** 打卡结束时间 */
  endTime?: string;
  checkInType: (string | string | string)[];
  customSchedule: {
    weekly: number[];
  } | null;
  /** 打卡要求配置 */
  requirements?: unknown;
};

export type BbsCheckinActivityCreateUsingPostResponse = {
  /** 响应状态 */
  success: boolean;
  /** 响应消息 */
  message?: string;
  /** 活动ID */
  data: string;
};

export type BbsCheckinActivityCreateUsingPostResponses = {
  200: BbsCheckinActivityCreateUsingPostResponse;
};

export type BbsCheckinActivityIdCheckinUsingPostBody = {
  /** 打卡内容 */
  content?: string;
  /** 打卡图片 */
  images?: string[];
  /** 经度 */
  lat?: number;
  /** 纬度 */
  lng?: number;
  /** 省份 */
  province?: string;
  /** 城市 */
  city?: string;
  /** 区县 */
  district?: string;
  /** 完整地址 */
  address?: string;
};

export type BbsCheckinActivityIdCheckinUsingPostParams = {
  /** 活动ID */
  id: string;
};

export type BbsCheckinActivityIdCheckinUsingPostResponse = {
  /** 响应状态 */
  success: boolean;
  /** 响应消息 */
  message?: string;
  data?: {
    /** 记录ID */
    id?: string;
    content?: string | null;
    images?:
      | {
          /** 图片地址 */
          url: string;
          /** 图片宽度 */
          width: number;
          /** 图片高度 */
          height: number;
        }[]
      | null;
    lat?: number | null;
    lng?: number | null;
    province?: string | null;
    city?: string | null;
    district?: string | null;
    address?: string | null;
    /** 打卡日期时间 */
    checkInDate?: Date | string | string | number;
    /** 是否有效打卡 */
    isValid?: boolean;
    /** 创建时间 */
    createdAt?: Date | string | string | number;
    /** 更新时间 */
    updatedAt?: Date | string | string | number;
    participant?: {
      user: {
        /** 用户ID */
        id: string;
        nickname: string | null;
        avatarUrl: string | null;
      };
    } | null;
  };
};

export type BbsCheckinActivityIdCheckinUsingPostResponses = {
  200: BbsCheckinActivityIdCheckinUsingPostResponse;
};

export type BbsCheckinActivityIdJoinUsingPostParams = {
  /** 活动ID */
  id: string;
};

export type BbsCheckinActivityIdJoinUsingPostResponse = {
  /** 响应状态 */
  success: boolean;
  /** 响应消息 */
  message?: string;
};

export type BbsCheckinActivityIdJoinUsingPostResponses = {
  200: BbsCheckinActivityIdJoinUsingPostResponse;
};

export type BbsCheckinActivityIdLeaveUsingPostParams = {
  /** 活动ID */
  id: string;
};

export type BbsCheckinActivityIdLeaveUsingPostResponse = {
  /** 响应状态 */
  success: boolean;
  /** 响应消息 */
  message?: string;
};

export type BbsCheckinActivityIdLeaveUsingPostResponses = {
  200: BbsCheckinActivityIdLeaveUsingPostResponse;
};

export type BbsCheckinActivityIdRecordsUsingGetParams = {
  /** 活动ID */
  id: string;
  /** 查询指定用户的打卡记录 */
  userId?: string;
  /** 页码 */
  _page?: number;
  /** 每页数量 */
  _pageSize?: number;
};

export type BbsCheckinActivityIdRecordsUsingGetResponse = {
  /** 响应状态 */
  success: boolean;
  /** 响应消息 */
  message?: string;
  data:
    | {
        /** 记录ID */
        id: string;
        content: string | null;
        images:
          | {
              /** 图片地址 */
              url: string;
              /** 图片宽度 */
              width: number;
              /** 图片高度 */
              height: number;
            }[]
          | null;
        lat: number | null;
        lng: number | null;
        province: string | null;
        city: string | null;
        district: string | null;
        address: string | null;
        /** 打卡日期时间 */
        checkInDate: Date | string | string | number;
        /** 是否有效打卡 */
        isValid: boolean;
        /** 创建时间 */
        createdAt: Date | string | string | number;
        /** 更新时间 */
        updatedAt: Date | string | string | number;
        participant: {
          user: {
            /** 用户ID */
            id: string;
            nickname: string | null;
            avatarUrl: string | null;
          };
        } | null;
      }[]
    | null;
};

export type BbsCheckinActivityIdRecordsUsingGetResponses = {
  200: BbsCheckinActivityIdRecordsUsingGetResponse;
};

export type BbsCheckinActivityIdUsingGetParams = {
  /** 活动ID */
  id: string;
};

export type BbsCheckinActivityIdUsingGetResponse = {
  /** 响应状态 */
  success: boolean;
  /** 响应消息 */
  message?: string;
  data: {
    /** 活动ID */
    id: string;
    /** 活动标题 */
    title: string;
    description: string | null;
    /** 打卡类型 */
    checkInType: (string | string | string)[];
    /** 打卡频率 */
    frequency: string | string;
    /** 开始日期 */
    startDate: Date | string | string | number;
    endDate: Date | string | string | number | null;
    startTime: string | null;
    endTime: string | null;
    customSchedule: {
      weekly: number[];
    } | null;
    /** 打卡要求配置 */
    requirements?: unknown;
    /** 参与人数 */
    participantCount: number;
    /** 打卡总次数 */
    checkInCount: number;
    /** 活动状态 */
    status: string;
    /** 是否下架 */
    isUnpublished: boolean;
    unpublishReason: string | null;
    /** 创建时间 */
    createdAt: Date | string | string | number;
    /** 更新时间 */
    updatedAt: Date | string | string | number;
    creator: {
      /** 创建者ID */
      id: string;
      nickname: string | null;
      avatarUrl: string | null;
    } | null;
    /** 参与者 */
    participants:
      | {
          /** 用户ID */
          userId: string;
          /** 参与状态 */
          status: string;
          /** 总打卡次数 */
          totalCheckIns: number;
        }[]
      | null;
  } | null;
};

export type BbsCheckinActivityIdUsingGetResponses = {
  200: BbsCheckinActivityIdUsingGetResponse;
};

export type BbsCheckinActivityListUsingGetParams = {
  /** 页码 */
  _page?: number;
  /** 每页数量 */
  _pageSize?: number;
  /** 活动标题模糊查询 */
  title?: string;
  /** 活动状态: active(进行中), ended(已结束), all(全部) */
  status?: string | string | string;
};

export type BbsCheckinActivityListUsingGetResponse = {
  /** 响应状态 */
  success: boolean;
  /** 响应消息 */
  message?: string;
  data?: {
    /** 活动ID */
    id: string;
    /** 活动标题 */
    title: string;
    description: string | null;
    /** 打卡类型 */
    checkInType: (string | string | string)[];
    /** 打卡频率 */
    frequency: string | string;
    /** 开始日期 */
    startDate: Date | string | string | number;
    endDate: Date | string | string | number | null;
    startTime: string | null;
    endTime: string | null;
    customSchedule: {
      weekly: number[];
    } | null;
    /** 打卡要求配置 */
    requirements?: unknown;
    /** 参与人数 */
    participantCount: number;
    /** 打卡总次数 */
    checkInCount: number;
    /** 活动状态 */
    status: string;
    /** 是否下架 */
    isUnpublished: boolean;
    unpublishReason: string | null;
    /** 创建时间 */
    createdAt: Date | string | string | number;
    /** 更新时间 */
    updatedAt: Date | string | string | number;
    creator: {
      /** 创建者ID */
      id: string;
      nickname: string | null;
      avatarUrl: string | null;
    } | null;
    /** 参与者 */
    participants:
      | {
          /** 用户ID */
          userId: string;
          /** 参与状态 */
          status: string;
          /** 总打卡次数 */
          totalCheckIns: number;
        }[]
      | null;
  }[];
};

export type BbsCheckinActivityListUsingGetResponses = {
  200: BbsCheckinActivityListUsingGetResponse;
};

export type BbsNotesIdCommentsUsingGetParams = {
  /** 笔记ID */
  id: string;
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
};

export type BbsNotesIdCommentsUsingGetResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data?: {
    /** 评论ID */
    id: string;
    content: string | null;
    /** 评论创建时间 */
    createdAt: Date | string | string | number;
    address: string | null;
    user: {
      /** 用户ID */
      id: string;
      nickname: string | null;
      avatarUrl: string | null;
    };
    /** 回复列表 */
    replies: {
      /** 回复ID */
      id: string;
      content: string | null;
      /** 回复创建时间 */
      createdAt: Date | string | string | number;
      address: string | null;
      user: {
        /** 用户ID */
        id: string;
        nickname: string | null;
        avatarUrl: string | null;
      };
    }[];
  }[];
};

export type BbsNotesIdCommentsUsingGetResponses = {
  200: BbsNotesIdCommentsUsingGetResponse;
};

export type BbsNotesIdStatsUsingGetParams = {
  /** 笔记ID */
  id: string;
};

export type BbsNotesIdStatsUsingGetResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data?: {
    /** 统计ID */
    id?: string;
    /** 业务类型 */
    bizType?: string;
    /** 业务ID */
    bizId?: string;
    /** 评论数 */
    commentCount?: number;
    /** 点赞数 */
    likeCount?: number;
    /** 收藏数 */
    favoriteCount?: number;
    /** 浏览数 */
    viewCount?: number;
    /** 分享数 */
    shareCount?: number;
    /** 关注数 */
    followCount?: number;
    /** 创建时间 */
    createdAt?: Date | string | string | number;
    /** 更新时间 */
    updatedAt?: Date | string | string | number;
  };
};

export type BbsNotesIdStatsUsingGetResponses = {
  200: BbsNotesIdStatsUsingGetResponse;
};

export type BbsNotesIdUsingGetParams = {
  /** 笔记ID */
  id: string;
};

export type BbsNotesIdUsingGetResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data?: {
    /** 笔记ID */
    id?: string;
    /** 笔记标题 */
    title?: string;
    images?: {
      /** 图片地址 */
      url: string;
      /** 图片宽度 */
      width: number;
      /** 图片高度 */
      height: number;
    }[];
    tags?: {
      /** 标签名称 */
      name: string;
    }[];
    /** 创建时间 */
    createdAt?: Date | string | string | number;
    content?: string | null;
    sectionId?: string | null;
    lat?: number | null;
    lng?: number | null;
    province?: string | null;
    city?: string | null;
    district?: string | null;
    address?: string | null;
    user?: {
      /** 用户ID */
      id: string;
      nickname: string | null;
      avatarUrl: string | null;
    } | null;
    member?: {
      title: string | null;
      section: {
        /** 版块名称 */
        name: string;
      } | null;
    } | null;
  };
};

export type BbsNotesIdUsingGetResponses = {
  200: BbsNotesIdUsingGetResponse;
};

export type BbsNotesListUsingGetParams = {
  /** 页码 */
  _page?: number;
  /** 每页数量 */
  _pageSize?: number;
  /** 笔记标题模糊查询 */
  name?: string;
  /** 版块ID */
  sectionId?: string;
  /** 发布文章的用户ID */
  userId?: string;
  /** 发布文章的用户名模糊查询 */
  username?: string;
};

export type BbsNotesListUsingGetResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 笔记ID */
    id: string;
    /** 笔记标题 */
    title: string;
    coverImage: string | null;
    sectionId: string | null;
    lat: number | null;
    lng: number | null;
    content: string | null;
    section: {
      /** 版块名称 */
      name: string;
    } | null;
    user: {
      avatarUrl: string | null;
      nickname: string | null;
    } | null;
    stats: {
      /** 统计ID */
      id: string;
      /** 业务类型 */
      bizType: string;
      /** 业务ID */
      bizId: string;
      /** 评论数 */
      commentCount: number;
      /** 点赞数 */
      likeCount: number;
      /** 收藏数 */
      favoriteCount: number;
      /** 浏览数 */
      viewCount: number;
      /** 分享数 */
      shareCount: number;
      /** 关注数 */
      followCount: number;
      /** 创建时间 */
      createdAt: Date | string | string | number;
      /** 更新时间 */
      updatedAt: Date | string | string | number;
    };
  }[];
};

export type BbsNotesListUsingGetResponses = {
  200: BbsNotesListUsingGetResponse;
};

export type BbsNotesRandomAuthorUsingGetResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: string | null;
};

export type BbsNotesRandomAuthorUsingGetResponses = {
  200: BbsNotesRandomAuthorUsingGetResponse;
};

export type BbsNotesStatsUsingPostBody = {
  /** ID列表 */
  ids: string[];
};

export type BbsNotesStatsUsingPostResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data?: {
    /** 资源ID */
    id: string;
    stats: {
      /** 评论数 */
      commentCount: number;
      /** 点赞数 */
      likeCount: number;
      /** 收藏数 */
      favoriteCount: number;
      /** 浏览数 */
      viewCount: number;
      /** 分享数 */
      shareCount: number;
      /** 关注数 */
      followCount: number;
    };
  }[];
};

export type BbsNotesStatsUsingPostResponses = {
  200: BbsNotesStatsUsingPostResponse;
};

export type BbsNotesUserActionStatusIdUsingGetParams = {
  /** 资源ID */
  id: string;
};

export type BbsNotesUserActionStatusIdUsingGetResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 是否已点赞 */
    hasLiked: boolean;
    /** 是否已收藏 */
    hasFavorited: boolean;
    /** 是否已关注 */
    hasFollowed: boolean;
  };
};

export type BbsNotesUserActionStatusIdUsingGetResponses = {
  200: BbsNotesUserActionStatusIdUsingGetResponse;
};

export type BbsNotesUserActionStatusUsingPostBody = {
  /** ID列表 */
  ids: string[];
};

export type BbsNotesUserActionStatusUsingPostResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 资源ID */
    id: string;
    /** 是否已点赞 */
    hasLiked: boolean;
    /** 是否已收藏 */
    hasFavorited: boolean;
    /** 是否已关注 */
    hasFollowed: boolean;
  }[];
};

export type BbsNotesUserActionStatusUsingPostResponses = {
  200: BbsNotesUserActionStatusUsingPostResponse;
};

export type BbsNotesUserIdCommentsCommentIdLikeUsingDeleteParams = {
  id: string;
  /** 评论ID */
  commentId: string;
};

export type BbsNotesUserIdCommentsCommentIdLikeUsingDeleteResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data?: {
    /** 是否已点赞 */
    liked?: boolean;
    /** 操作结果 */
    action?: string;
  };
};

export type BbsNotesUserIdCommentsCommentIdLikeUsingDeleteResponses = {
  200: BbsNotesUserIdCommentsCommentIdLikeUsingDeleteResponse;
};

export type BbsNotesUserIdCommentsCommentIdLikeUsingPostParams = {
  id: string;
  /** 评论ID */
  commentId: string;
};

export type BbsNotesUserIdCommentsCommentIdLikeUsingPostResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data?: {
    /** 是否已点赞 */
    liked?: boolean;
    /** 操作结果 */
    action?: string;
  };
};

export type BbsNotesUserIdCommentsCommentIdLikeUsingPostResponses = {
  200: BbsNotesUserIdCommentsCommentIdLikeUsingPostResponse;
};

export type BbsNotesUserIdCommentsCommentIdReplyUsingPostBody = {
  /** 回复内容 */
  content: string;
};

export type BbsNotesUserIdCommentsCommentIdReplyUsingPostParams = {
  /** 笔记ID */
  id: string;
  /** 评论ID */
  commentId: string;
};

export type BbsNotesUserIdCommentsCommentIdReplyUsingPostResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: unknown | null;
};

export type BbsNotesUserIdCommentsCommentIdReplyUsingPostResponses = {
  200: BbsNotesUserIdCommentsCommentIdReplyUsingPostResponse;
};

export type BbsNotesUserIdCommentsUsingPostBody = {
  /** 评论内容 */
  content: string;
};

export type BbsNotesUserIdCommentsUsingPostParams = {
  /** 笔记ID */
  id: string;
};

export type BbsNotesUserIdCommentsUsingPostResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: unknown | null;
};

export type BbsNotesUserIdCommentsUsingPostResponses = {
  200: BbsNotesUserIdCommentsUsingPostResponse;
};

export type BbsNotesUserIdFavoriteUsingDeleteParams = {
  /** 笔记ID */
  id: string;
};

export type BbsNotesUserIdFavoriteUsingDeleteResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 是否已收藏 */
    favorited: boolean;
    /** 操作结果 */
    action: string;
  } | null;
};

export type BbsNotesUserIdFavoriteUsingDeleteResponses = {
  200: BbsNotesUserIdFavoriteUsingDeleteResponse;
};

export type BbsNotesUserIdFavoriteUsingPostParams = {
  /** 笔记ID */
  id: string;
};

export type BbsNotesUserIdFavoriteUsingPostResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 是否已收藏 */
    favorited: boolean;
    /** 操作结果 */
    action: string;
  } | null;
};

export type BbsNotesUserIdFavoriteUsingPostResponses = {
  200: BbsNotesUserIdFavoriteUsingPostResponse;
};

export type BbsNotesUserIdFollowUsingDeleteParams = {
  /** 笔记ID */
  id: string;
};

export type BbsNotesUserIdFollowUsingDeleteResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 是否已关注 */
    followed: boolean;
    /** 操作结果 */
    action: string;
  } | null;
};

export type BbsNotesUserIdFollowUsingDeleteResponses = {
  200: BbsNotesUserIdFollowUsingDeleteResponse;
};

export type BbsNotesUserIdFollowUsingPostParams = {
  /** 笔记ID */
  id: string;
};

export type BbsNotesUserIdFollowUsingPostResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 是否已关注 */
    followed: boolean;
    /** 操作结果 */
    action: string;
  } | null;
};

export type BbsNotesUserIdFollowUsingPostResponses = {
  200: BbsNotesUserIdFollowUsingPostResponse;
};

export type BbsNotesUserIdLikeUsingDeleteParams = {
  /** 笔记ID */
  id: string;
};

export type BbsNotesUserIdLikeUsingDeleteResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data?: {
    /** 是否已点赞 */
    liked?: boolean;
    /** 操作结果 */
    action?: string;
  };
};

export type BbsNotesUserIdLikeUsingDeleteResponses = {
  200: BbsNotesUserIdLikeUsingDeleteResponse;
};

export type BbsNotesUserIdLikeUsingPostParams = {
  /** 笔记ID */
  id: string;
};

export type BbsNotesUserIdLikeUsingPostResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data?: {
    /** 是否已点赞 */
    liked?: boolean;
    /** 操作结果 */
    action?: string;
  };
};

export type BbsNotesUserIdLikeUsingPostResponses = {
  200: BbsNotesUserIdLikeUsingPostResponse;
};

export type BbsNotesUserMyListUsingGetParams = {
  /** 页码 */
  _page?: number;
  /** 每页数量 */
  _pageSize?: number;
  /** 查询类型，传入"liked"表示查询我点赞的笔记，传入"favorited"表示查询我收藏的笔记 */
  type?: string;
};

export type BbsNotesUserMyListUsingGetResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 笔记ID */
    id: string;
    /** 笔记标题 */
    title: string;
    coverImage: string | null;
    /** 创建时间 */
    createdAt: Date | string | string | number;
    section: {
      /** 版块名称 */
      name: string;
    } | null;
    user: {
      avatarUrl: string | null;
      nickname: string | null;
    } | null;
    stats: {
      /** 业务类型 */
      bizType: string;
      /** 业务ID */
      bizId: string;
      /** 评论数 */
      commentCount: number;
      /** 点赞数 */
      likeCount: number;
      /** 收藏数 */
      favoriteCount: number;
      /** 浏览数 */
      viewCount: number;
      /** 分享数 */
      shareCount: number;
      /** 关注数 */
      followCount: number;
      /** 创建时间 */
      createdAt: Date | string | string | number;
      /** 更新时间 */
      updatedAt: Date | string | string | number;
    };
  }[];
};

export type BbsNotesUserMyListUsingGetResponses = {
  200: BbsNotesUserMyListUsingGetResponse;
};

export type BbsNotesUserPublishUsingPostBody = {
  /** 笔记标题 */
  title: string;
  /** 笔记内容 */
  content?: string;
  images?: {
    /** 图片地址 */
    url: string;
    /** 图片宽度 */
    width: number;
    /** 图片高度 */
    height: number;
  }[];
  /** 版块ID */
  sectionId?: string;
  tags?: string[];
  lat: number | null;
  lng: number | null;
  /** 详细地址 */
  address?: string;
};

export type BbsNotesUserPublishUsingPostResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 笔记ID */
    id: string;
    /** 笔记标题 */
    title: string;
    content: string | null;
    images?: {
      /** 图片地址 */
      url: string;
      /** 图片宽度 */
      width: number;
      /** 图片高度 */
      height: number;
    }[];
    /** 笔记状态 */
    status: string;
    /** 创建时间 */
    createdAt: Date | string | string | number;
    lat: number | null;
    lng: number | null;
    address: string | null;
    user: {
      /** 用户ID */
      id: string;
      nickname: string | null;
      avatarUrl: string | null;
    } | null;
    section: {
      /** 版块ID */
      id: string;
      /** 版块名称 */
      name: string;
    } | null;
    tags: {
      /** 标签ID */
      id: string;
      /** 标签名称 */
      name: string;
      description: string | null;
    }[];
  } | null;
};

export type BbsNotesUserPublishUsingPostResponses = {
  200: BbsNotesUserPublishUsingPostResponse;
};

export type BbsNotesUserUserFollowingUsingGetParams = {
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
};

export type BbsNotesUserUserFollowingUsingGetResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    data: {
      /** 关注时间 */
      followedAt: Date | string | string | number;
      user: {
        /** 用户ID */
        id: string;
        nickname: string | null;
        avatarUrl: string | null;
        /** 用户名 */
        username: string;
      } | null;
    }[];
    pagination: {
      /** 当前页 */
      page: number;
      /** 每页大小 */
      pageSize: number;
      /** 总数 */
      total: number;
      /** 总页数 */
      totalPages: number;
    };
  };
};

export type BbsNotesUserUserFollowingUsingGetResponses = {
  200: BbsNotesUserUserFollowingUsingGetResponse;
};

export type BbsNotesUserUserUserIdFollowStatusUsingGetParams = {
  /** 目标用户ID */
  userId: string;
};

export type BbsNotesUserUserUserIdFollowStatusUsingGetResponse = {
  /** 响应状态码：200=已关注，204=未关注 */
  code: number;
  /** 响应消息 */
  message: string;
};

export type BbsNotesUserUserUserIdFollowStatusUsingGetResponses = {
  200: BbsNotesUserUserUserIdFollowStatusUsingGetResponse;
};

export type BbsSectionsDetailUsingGetParams = {
  /** 版块ID */
  id: string;
};

export type BbsSectionsDetailUsingGetResponses = {
  200: {
    /** 版块ID */
    id: string;
    /** 版块名称 */
    name: string;
    description: string | null;
    cover: string | null;
    type: string | null;
    /** 是否激活 */
    isActive: boolean;
    /** 加入模式 */
    joinMode: string | string;
  } | null;
};

export type BbsSectionsJoinUsingPostBody = {
  /** 版块ID */
  sectionId: string;
};

export type BbsSectionsJoinUsingPostResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
};

export type BbsSectionsJoinUsingPostResponses = {
  200: BbsSectionsJoinUsingPostResponse;
};

export type BbsSectionsLeaveUsingPostBody = {
  /** 版块ID */
  sectionId: string;
};

export type BbsSectionsLeaveUsingPostResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
};

export type BbsSectionsLeaveUsingPostResponses = {
  200: BbsSectionsLeaveUsingPostResponse;
};

export type BbsSectionsListUsingGetResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 版块ID */
    id: string;
    /** 版块名称 */
    name: string;
  }[];
};

export type BbsSectionsListUsingGetResponses = {
  200: BbsSectionsListUsingGetResponse;
};

export type BbsSectionsUserJoinedUsingGetParams = {
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
};

export type BbsSectionsUserJoinedUsingGetResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    data: {
      /** 加入时间 */
      joinedAt: Date | string | string | number;
      /** 角色 */
      role: string;
      title: string | null;
      section: {
        /** 版块ID */
        id: string;
        /** 版块名称 */
        name: string;
        description: string | null;
        cover: string | null;
        type: string | null;
        /** 是否激活 */
        isActive: boolean;
      } | null;
    }[];
    pagination: {
      /** 当前页 */
      page: number;
      /** 每页大小 */
      pageSize: number;
      /** 总数 */
      total: number;
      /** 总页数 */
      totalPages: number;
    };
  };
};

export type BbsSectionsUserJoinedUsingGetResponses = {
  200: BbsSectionsUserJoinedUsingGetResponse;
};

export type BbsTagsListUsingGetParams = {
  /** 笔记ID，获取指定笔记的标签 */
  noteId?: string;
  /** 是否只获取热门标签 */
  isHot?: boolean;
};

export type BbsTagsListUsingGetResponse = {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 标签名称 */
    name: string;
  }[];
};

export type BbsTagsListUsingGetResponses = {
  200: BbsTagsListUsingGetResponse;
};

export type BizDesignConfigUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 首页ID */
    homePageId?: string;
    /** 标签页配置 */
    tabs?: {
      /** 图标 */
      icon: string;
      /** 激活图标 */
      activeIcon: string;
      /** 标题 */
      title: string;
      /** 页面ID */
      pageId: string;
    }[];
    /** 标签页激活颜色 */
    tabActiveColor?: string;
    /** 标签页非激活颜色 */
    tabInactiveColor?: string;
    /** 标签页样式 */
    tabStyle?: string;
    /** 标签栏样式 */
    tabBarStyle?: string;
    /** 主体色 */
    colorTheme?: string;
    /** 按钮主色背景 */
    buttonPrimaryBgColor?: string;
    /** 按钮主色文字颜色 */
    buttonPrimaryColor?: string;
    personalCenter: {
      /** 个人中心广告配置 */
      bannerAds: {
        /** 图片 */
        image: string;
        /** 链接 */
        link?: string;
      }[];
      modules: {
        /** 演出模块开关 */
        performance: boolean;
        /** 商城模块开关 */
        shop: boolean;
        /** 活动模块开关 */
        activity: boolean;
      };
      /** 背景图片 */
      backgroundImage?: string;
      /** 背景颜色 */
      backgroundColor: string;
      /** 版权信息 */
      copyright?: string;
    };
    routePage: {
      /** 路线页面广告配置 */
      bannerAds: {
        /** 图片 */
        image: string;
        /** 链接 */
        link?: string;
      }[];
    };
    merchant?: {
      /** 商户名称 */
      name?: string;
      /** 商户地址 */
      address?: string;
      logo?: string | null;
    };
  } | null;
};

export type BizDesignConfigUsingGetResponses = {
  200: BizDesignConfigUsingGetResponse;
};

export type BizDesignIndexUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 页面ID */
    id: string;
    /** 页面名称 */
    name: string;
    /** 页面内容 */
    content: string;
    shareTitle: string | null;
    shareDesc: string | null;
    shareIcon: string | null;
  } | null;
};

export type BizDesignIndexUsingGetResponses = {
  200: BizDesignIndexUsingGetResponse;
};

export type BizDesignPageIdUsingGetParams = {
  /** 页面ID */
  id: string;
};

export type BizDesignPageIdUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 页面ID */
    id: string;
    /** 页面名称 */
    name: string;
    /** 页面内容 */
    content: string;
    shareTitle: string | null;
    shareDesc: string | null;
    shareIcon: string | null;
  } | null;
};

export type BizDesignPageIdUsingGetResponses = {
  200: BizDesignPageIdUsingGetResponse;
};

export type BizDesignProfileConfigUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
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
  } | null;
};

export type BizDesignProfileConfigUsingGetResponses = {
  200: BizDesignProfileConfigUsingGetResponse;
};

export type BizDesignShopUsingGetResponses = {
  200: {
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
  } | null;
};

export type BizDistributionAgentListUsingGetParams = {
  /** 分销员|客户 */
  roleType?: string;
};

export type BizDistributionAgentListUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 分销员ID */
    id: string;
    /** 用户ID */
    userId: string;
    /** 角色类型 */
    roleType: string | string | string;
    parentId: string | null;
    /** 佣金比例 */
    commissionRate: number;
    /** 状态 */
    status: string | string;
    /** 创建时间 */
    createdAt: Date | string | string | number;
    /** 更新时间 */
    updatedAt: Date | string | string | number;
    user: {
      /** 用户ID */
      id: string;
      /** 用户名 */
      username: string;
      name: string | null;
      nickname: string | null;
      avatarUrl: string | null;
      phone: string | null;
    };
    stats: {
      /** 客户数量 */
      customerCount: number;
      /** 总佣金(分) */
      totalCommission: number;
      /** 总订单数 */
      totalOrders: number;
    };
  }[];
};

export type BizDistributionAgentListUsingGetResponses = {
  200: BizDistributionAgentListUsingGetResponse;
};

export type BizDistributionApplyDetailUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 申请ID */
    id: string;
    /** 用户ID */
    userId: string;
    /** 真实姓名 */
    realName: string;
    /** 身份证号 */
    idCardNumber: string;
    /** 联系电话 */
    contactPhone: string;
    paymentChannelInfo: {
      /** 渠道类型 */
      type: string | string | string;
      /** 渠道配置 */
      config:
        | {
            /** 微信号 */
            wechatNumber: string;
          }
        | {
            /** 持卡人姓名 */
            cardHolder: string;
            /** 银行卡号 */
            cardNumber: string;
            /** 开户行 */
            bankBranch: string;
          }
        | {
            /** 支付宝账号 */
            alipayAccount: string;
            /** 真实姓名 */
            realName: string;
          };
    };
    /** 申请状态 */
    status: string | string | string;
    /** 创建时间 */
    createdAt: Date | string | string | number;
  } | null;
};

export type BizDistributionApplyDetailUsingGetResponses = {
  200: BizDistributionApplyDetailUsingGetResponse;
};

export type BizDistributionApplyLeaderUsingPostBody = {
  /** 真实姓名 */
  realName: string;
  /** 身份证号 */
  idCardNumber: string;
  /** 联系电话 */
  contactPhone: string;
  paymentChannelInfo: {
    /** 渠道类型 */
    type: string | string | string;
    /** 渠道配置 */
    config:
      | {
          /** 微信号 */
          wechatNumber: string;
        }
      | {
          /** 持卡人姓名 */
          cardHolder: string;
          /** 银行卡号 */
          cardNumber: string;
          /** 开户行 */
          bankBranch: string;
        }
      | {
          /** 支付宝账号 */
          alipayAccount: string;
          /** 真实姓名 */
          realName: string;
        };
  };
};

export type BizDistributionApplyLeaderUsingPostResponse = {
  success: boolean;
  message?: string;
};

export type BizDistributionApplyLeaderUsingPostResponses = {
  200: BizDistributionApplyLeaderUsingPostResponse;
};

export type BizDistributionBindCustomerUsingPostBody = {
  /** 上级分销员ID */
  distributeId: string;
};

export type BizDistributionBindCustomerUsingPostResponse = {
  success: boolean;
  message?: string;
};

export type BizDistributionBindCustomerUsingPostResponses = {
  200: BizDistributionBindCustomerUsingPostResponse;
};

export type BizDistributionCommissionOrderUsingGetParams = {
  /** 页码 */
  page?: string;
  /** 每页数量 */
  pageSize?: string;
  /** 开始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
};

export type BizDistributionCommissionOrderUsingGetResponse = {
  success: boolean;
  message?: string;
  data?: {
    data?: {
      /** 佣金订单ID */
      id: string;
      /** 业务订单ID */
      orderId: string;
      /** 业务订单类型 */
      businessOrderType: string;
      /** 业务订单描述 */
      businessOrderDesc: string;
      /** 订单金额(分) */
      orderAmount: number;
      /** 订单实付金额(分) */
      actualPayAmount: number;
      /** 佣金金额(分) */
      commissionAmount: number;
      /** 佣金比例 */
      commissionRate: number;
      /** 佣金描述 */
      commissionDesc: string;
      /** 佣金状态 */
      status: string | string | string | string;
      /** 创建时间 */
      createdAt: Date | string | string | number;
      /** 更新时间 */
      updatedAt: Date | string | string | number;
      user: {
        /** 用户ID */
        id: string;
        /** 用户名 */
        username: string;
        name: string | null;
        nickname: string | null;
        avatarUrl: string | null;
      } | null;
    }[];
    /** 总数量 */
    total?: number;
    /** 总页数 */
    totalPages?: number;
    /** 当前页码 */
    page?: number;
  };
};

export type BizDistributionCommissionOrderUsingGetResponses = {
  200: BizDistributionCommissionOrderUsingGetResponse;
};

export type BizDistributionCommissionStatsUsingGetResponse = {
  success: boolean;
  message?: string;
  data?: {
    /** 佣金总额(分) */
    totalCommission?: number;
    /** 可提现佣金(分) */
    withdrawableCommission?: number;
    /** 已提现佣金(分) */
    withdrawnCommission?: number;
    /** 锁定佣金(分) */
    lockedCommission?: number;
    /** 总订单数 */
    totalOrders?: number;
    /** 佣金比例 */
    commissionRate?: number;
    /** 角色类型 */
    roleType?: string | string | string;
  };
};

export type BizDistributionCommissionStatsUsingGetResponses = {
  200: BizDistributionCommissionStatsUsingGetResponse;
};

export type BizDistributionConfigUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 团长佣金比例（百分比，0-100） */
    leaderCommissionRate: number;
    /** 是否开启二级分销员 */
    enableSecondaryDistributor: boolean;
    /** 是否开启团长自定义分销员比例 */
    enableCustomDistributorRate?: boolean;
    /** 分销员分佣比例（百分比，0-100） */
    distributorCommissionRate?: number;
    /** 分享词语 */
    shareMessage?: string;
    /** 海报背景图（图片URL） */
    posterBackground?: string;
    shareImages?: string[];
  } | null;
};

export type BizDistributionConfigUsingGetResponses = {
  200: BizDistributionConfigUsingGetResponse;
};

export type BizDistributionCustomerAndAgentStatsUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 客户数 */
    customerCount: number;
    /** 分销员数 */
    agentCount: number;
  };
};

export type BizDistributionCustomerAndAgentStatsUsingGetResponses = {
  200: BizDistributionCustomerAndAgentStatsUsingGetResponse;
};

export type BizDistributionDowngradeAgentToCustomerUsingPostBody = {
  /** 要降级的分销员ID */
  agentId: string;
};

export type BizDistributionDowngradeAgentToCustomerUsingPostResponse = {
  success: boolean;
  message?: string;
  data?: {
    /** 客户ID */
    customerId?: string;
    /** 用户名 */
    username?: string;
    name?: string | null;
    /** 重新分配的下级成员数量 */
    reassignedMembers?: number;
  };
};

export type BizDistributionDowngradeAgentToCustomerUsingPostResponses = {
  200: BizDistributionDowngradeAgentToCustomerUsingPostResponse;
};

export type BizDistributionGenerateQrcodeUsingPostResponse = {
  success: boolean;
  message?: string;
  /** 小程序二维码URL */
  data?: string;
};

export type BizDistributionGenerateQrcodeUsingPostResponses = {
  200: BizDistributionGenerateQrcodeUsingPostResponse;
};

export type BizDistributionHasPermissionUsingGetResponse = {
  success: boolean;
  message?: string;
  /** 是否有分销权限 */
  data: boolean;
};

export type BizDistributionHasPermissionUsingGetResponses = {
  200: BizDistributionHasPermissionUsingGetResponse;
};

export type BizDistributionTeamListUsingGetParams = {
  /** 分销员|客户 */
  roleType?: string | string | string;
};

export type BizDistributionTeamListUsingGetResponse = {
  success: boolean;
  message?: string;
  data?: {
    /** 分销员ID */
    id: string;
    /** 用户ID */
    userId: string;
    /** 角色类型 */
    roleType: string | string | string;
    parentId: string | null;
    /** 佣金比例 */
    commissionRate: number;
    /** 状态 */
    status: string | string;
    /** 创建时间 */
    createdAt: Date | string | string | number;
    /** 更新时间 */
    updatedAt: Date | string | string | number;
    user: {
      /** 用户ID */
      id: string;
      /** 用户名 */
      username: string;
      name: string | null;
      nickname: string | null;
      avatarUrl: string | null;
      phone: string | null;
    };
    parent: {
      /** 上级分销员ID */
      id: string;
      user: {
        /** 用户ID */
        id: string;
        name: string | null;
        /** 用户名 */
        username: string;
        nickname: string | null;
      };
    } | null;
  }[];
};

export type BizDistributionTeamListUsingGetResponses = {
  200: BizDistributionTeamListUsingGetResponse;
};

export type BizDistributionTryBindUsingPostBody = {
  /** 目标用户ID */
  targetId: string;
};

export type BizDistributionTryBindUsingPostResponse = {
  success: boolean;
  message?: string;
};

export type BizDistributionTryBindUsingPostResponses = {
  200: BizDistributionTryBindUsingPostResponse;
};

export type BizDistributionUpgradeCustomerToAgentUsingPostBody = {
  /** 分佣比例 */
  commissionRate: number;
  /** 要升级的客户ID */
  customerId: string;
};

export type BizDistributionUpgradeCustomerToAgentUsingPostResponse = {
  success: boolean;
  message?: string;
  data?: {
    /** 分销员ID */
    agentId?: string;
    /** 用户名 */
    username?: string;
    name?: string | null;
  };
};

export type BizDistributionUpgradeCustomerToAgentUsingPostResponses = {
  200: BizDistributionUpgradeCustomerToAgentUsingPostResponse;
};

export type BizDistributionUserRoleUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 分销员ID */
    id: string;
    /** 用户ID */
    userId: string;
    /** 角色类型 */
    roleType: string | string | string;
    parentId: string | null;
    /** 佣金比例 */
    commissionRate: number;
    /** 状态 */
    status: string | string;
    /** 创建时间 */
    createdAt: Date | string | string | number;
    /** 更新时间 */
    updatedAt: Date | string | string | number;
  };
};

export type BizDistributionUserRoleUsingGetResponses = {
  200: BizDistributionUserRoleUsingGetResponse;
};

export type BizDistributionWalletDetailUsingGetResponse = {
  success: boolean;
  message: string | null;
  data:
    | {
        /** 交易记录ID */
        id: string;
        /** 用户ID */
        memberId: string;
        /** 钱包类型ID */
        typeId: string;
        /** 交易金额(分) */
        amount: number;
        /** 交易前余额(分) */
        balanceBefore: number;
        /** 交易后余额(分) */
        balanceAfter: number;
        /** 来源类型 */
        sourceType: string;
        sourceScene: string | null;
        sourceId: string | null;
        orderId: string | null;
        remark: string | null;
        fromEntryId: string | null;
        operatorType: string | null;
        operatorId: string | null;
        /** 创建时间 */
        createdAt: Date | string | string | number;
      }[]
    | null;
};

export type BizDistributionWalletDetailUsingGetResponses = {
  200: BizDistributionWalletDetailUsingGetResponse;
};

export type BizDistributionWithdrawApplyListUsingGetParams = {
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
};

export type BizDistributionWithdrawApplyListUsingGetResponse = {
  success: boolean;
  message?: string;
  data?: {
    data?: {
      /** 申请ID */
      id: string;
      /** 提现金额(分) */
      withdrawalAmount: number;
      paymentChannelInfo: {
        /** 渠道类型 */
        type: string | string | string;
        /** 渠道配置 */
        config:
          | {
              /** 微信号 */
              wechatNumber: string;
            }
          | {
              /** 持卡人姓名 */
              cardHolder: string;
              /** 银行卡号 */
              cardNumber: string;
              /** 开户行 */
              bankBranch: string;
            }
          | {
              /** 支付宝账号 */
              alipayAccount: string;
              /** 真实姓名 */
              realName: string;
            };
      };
      /** 状态 */
      status: string;
      /** 创建时间 */
      createdAt: Date | string | string | number;
    }[];
    pagination: {
      /** 总数 */
      total: number;
      /** 当前页 */
      page: number;
      /** 每页数量 */
      size: number;
      /** 总页数 */
      totalPages: number;
    };
  };
};

export type BizDistributionWithdrawApplyListUsingGetResponses = {
  200: BizDistributionWithdrawApplyListUsingGetResponse;
};

export type BizDistributionWithdrawApplyUsingPostBody = {
  /** 提现金额(分) */
  amount: number;
  paymentChannelInfo: {
    /** 渠道类型 */
    type: string | string | string;
    /** 渠道配置 */
    config:
      | {
          /** 微信号 */
          wechatNumber: string;
        }
      | {
          /** 持卡人姓名 */
          cardHolder: string;
          /** 银行卡号 */
          cardNumber: string;
          /** 开户行 */
          bankBranch: string;
        }
      | {
          /** 支付宝账号 */
          alipayAccount: string;
          /** 真实姓名 */
          realName: string;
        };
  };
};

export type BizDistributionWithdrawApplyUsingPostResponse = {
  success: boolean;
  message?: string;
};

export type BizDistributionWithdrawApplyUsingPostResponses = {
  200: BizDistributionWithdrawApplyUsingPostResponse;
};

export type CmsArticleIdUsingGetParams = {
  /** 文章ID */
  id: string;
};

export type CmsArticleIdUsingGetResponse = {
  success: boolean;
  message?: string;
  data?: {
    /** 文章ID */
    id?: string;
    /** 文章标题 */
    title?: string;
    description?: string | null;
    content?: string | null;
    coverImage?: string | null;
    author?: string | null;
    /** 浏览数 */
    viewCount?: number;
    tags?: string[] | null;
    /** 创建时间 */
    createdAt?: Date | string | string | number;
    /** 更新时间 */
    updatedAt?: Date | string | string | number;
    category?: {
      /** 分类ID */
      id: string;
      /** 分类名称 */
      name: string;
      color: string | null;
    } | null;
  };
};

export type CmsArticleIdUsingGetResponses = {
  200: CmsArticleIdUsingGetResponse;
};

export type CmsArticlesUsingGetParams = {
  ids?: string[];
  /** 分类ID */
  categoryId?: string;
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
};

export type CmsArticlesUsingGetResponse = {
  success: boolean;
  message?: string;
  data?: {
    data?: {
      /** 文章ID */
      id: string;
      /** 文章标题 */
      title: string;
      description: string | null;
      coverImage: string | null;
      author: string | null;
      /** 浏览数 */
      viewCount: number;
      /** 分享数 */
      shareCount: number;
      tags: string[] | null;
      /** 创建时间 */
      createdAt: Date | string | string | number;
      category: {
        /** 分类ID */
        id: string;
        /** 分类名称 */
        name: string;
        color: string | null;
      } | null;
    }[];
    /** 总数 */
    total?: number;
    /** 当前页码 */
    page?: number;
    /** 总页数 */
    totalPages?: number;
  };
};

export type CmsArticlesUsingGetResponses = {
  200: CmsArticlesUsingGetResponse;
};

export type CmsCategoriesUsingGetResponse = {
  success: boolean;
  message?: string;
  data?: {
    /** 分类ID */
    id: string;
    /** 分类名称 */
    name: string;
    description: string | null;
    icon: string | null;
    color: string | null;
    parentId: string | null;
    /** 排序 */
    sortOrder: number;
  }[];
};

export type CmsCategoriesUsingGetResponses = {
  200: CmsCategoriesUsingGetResponse;
};

export type LoginPhoneCaptchaUsingPostBody = {
  /** 手机号 */
  phone: string;
};

export type LoginPhoneCaptchaUsingPostResponse = {
  code: number;
  message: string;
};

export type LoginPhoneCaptchaUsingPostResponses = {
  200: LoginPhoneCaptchaUsingPostResponse;
};

export type LoginSigninUsingPostBody = {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
};

export type LoginSigninUsingPostResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export type LoginSigninUsingPostResponses = {
  200: LoginSigninUsingPostResponse;
};

export type LoginUnionUsingPostBody = {
  /** 登录类型：sms-短信登录，weapp-微信小程序，douyin-抖音小程序，xhs-小红书，wemp-微信公众号 */
  type: string | string | string | string | string;
  /** 手机号（sms登录时必填） */
  phone?: string;
  /** 短信验证码（sms登录时必填） */
  smsCode?: string;
  /** 小程序登录code（小程序登录时必填） */
  code?: string;
  /** 加密数据（小程序获取手机号时使用） */
  encryptedData?: string;
  /** 加密算法初始向量（小程序获取手机号时使用） */
  iv?: string;
  /** 用户头像 */
  avatar?: string;
  /** 用户昵称 */
  nickname?: string;
};

export type LoginUnionUsingPostResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export type LoginUnionUsingPostResponses = {
  200: LoginUnionUsingPostResponse;
};

export type LoginWeappCodeUsingPostBody = {
  /** 小程序登录时获取的code */
  code: string;
};

export type LoginWeappCodeUsingPostResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export type LoginWeappCodeUsingPostResponses = {
  200: LoginWeappCodeUsingPostResponse;
};

export type LoginWeappPhoneUsingPostBody = {
  /** 小程序登录时获取的code */
  code: string;
  /** 包括敏感数据在内的完整用户信息的加密数据 */
  encryptedData: string;
  /** 加密算法的初始向量 */
  iv: string;
  /** 昵称 */
  nickname?: string;
  /** 头像 */
  avatar?: string;
};

export type LoginWeappPhoneUsingPostResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export type LoginWeappPhoneUsingPostResponses = {
  200: LoginWeappPhoneUsingPostResponse;
};

export type LotActivityActivityIdUsingGetParams = {
  /** 活动ID */
  activityId: string;
};

export type LotActivityActivityIdUsingGetResponse = {
  success: boolean;
  message?: string;
  data?: {
    activity: {
      /** 活动ID */
      id: string;
      /** 活动标题 */
      title: string;
      /** 活动说明 */
      description: string;
      cover: string | null;
      /** 开始时间 */
      startTime: Date | string | string | number;
      /** 结束时间 */
      endTime: Date | string | string | number;
      timeSlots:
        | {
            /** 开始时间 HH:mm */
            start: string;
            /** 结束时间 HH:mm */
            end: string;
          }[]
        | null;
      /** 活动状态 */
      status: string | string | string | string;
      rules: string | null;
      /** 奖品列表 */
      prizes: {
        /** 奖品ID */
        id: string;
        /** 奖品名称 */
        name: string;
        imageUrl: string | null;
        /** 奖品类型 */
        type: string | string | string | string | string;
        /** 奖品数量 */
        amount: number;
        /** 单位 */
        unit: string | string | string | string;
        /** 基础概率 */
        baseProbability: number;
        description: string | null;
      }[];
    };
    quota: {
      /** 当前可用配额余额 */
      balance: number;
      /** 总获得配额 */
      totalEarned: number;
      /** 总使用配额 */
      totalUsed: number;
      /** 每日已使用配额 */
      dailyUsedQuota: number;
      sources: {
        id: string;
        /** 用户配额ID */
        userQuotaId: string;
        type: string | string | string | string | string;
        /** 初始入账数量 */
        amount: number;
        /** 当前剩余数量 */
        remainingAmount: number;
        reason: string | null;
        sourceId: string | null;
        createdAt: Date | string | string | number;
        expiredAt?: Date | string | string | number | null;
        /** 是否已过期 */
        isExpired: boolean;
      }[];
      validEntries: {
        id: string;
        amount: number;
        remainingAmount: number;
        expiredAt?: Date | string | string | number | null;
        createdAt: Date | string | string | number;
      }[];
    };
  };
};

export type LotActivityActivityIdUsingGetResponses = {
  200: LotActivityActivityIdUsingGetResponse;
};

export type LotDrawActivityIdUsingPostParams = {
  /** 活动ID */
  activityId: string;
};

export type LotDrawActivityIdUsingPostResponse = {
  /** 记录ID */
  id: string;
  /** 活动ID */
  activityId: string;
  /** 状态 */
  status: string | string;
  prize?: {
    /** 奖品ID */
    id: string;
    name: string | null;
    imageUrl: string | null;
    /** 奖品类型 */
    type: string;
    value: string | null;
    /** 奖品数量 */
    amount: number;
    /** 单位 */
    unit: string;
    /** 基础概率 */
    baseProbability: number;
    /** 领取方式 */
    redeemMethod: string;
    redeemDeadline: Date | string | string | number | null;
    description?: string | null;
  } | null;
  reward?: {
    /** 奖励ID */
    id?: string;
    /** 核销码 */
    redeemCode?: string;
    /** 过期时间 */
    expireAt?: Date | string | string | number;
  };
};

export type LotDrawActivityIdUsingPostResponses = {
  200: LotDrawActivityIdUsingPostResponse;
};

export type LotQuotaAddUsingPostBody = {
  /** 活动ID */
  activityId: string;
  /** 发放数量 */
  amount: number | number;
  /** 来源类型 */
  sourceType: string;
  /** 发放原因 */
  reason?: string;
  /** 来源ID（如任务ID、订单ID等） */
  sourceId?: string;
  /** 过期时间 */
  expiredAt?: Date | string | string | number;
};

export type LotQuotaAddUsingPostResponse = {
  success: boolean;
  message?: string;
  quota?: {
    id?: string;
    userId?: string;
    activityId?: string;
    balance?: number;
    totalEarned?: number;
    totalUsed?: number;
    dailyUsedQuota?: number;
    lastDrawTime?: Date | string | string | number | null;
    createdAt?: Date | string | string | number;
    updatedAt?: Date | string | string | number;
    version?: number;
  };
};

export type LotQuotaAddUsingPostResponses = {
  200: LotQuotaAddUsingPostResponse;
};

export type LotQuotaStatsUsingGetParams = {
  /** 活动ID */
  activityId: string;
};

export type LotQuotaStatsUsingGetResponse = {
  success: boolean;
  message?: string;
  data?: {
    /** 今日可抽次数 */
    todayAvailableDraws?: number;
  };
};

export type LotQuotaStatsUsingGetResponses = {
  200: LotQuotaStatsUsingGetResponse;
};

export type LotRecordsUsingGetParams = {
  /** 页码 */
  page?: number | number;
  /** 每页数量 */
  limit?: number | number;
  /** 活动ID筛选 */
  activityId?: string;
};

export type LotRecordsUsingGetResponse = {
  success: boolean;
  message?: string;
  data?: {
    records?: {
      id: string;
      userId: string;
      activityId: string;
      prizeId: string | null;
      prizeData: {
        /** 奖品ID */
        id: string;
        name: string | null;
        imageUrl: string | null;
        /** 奖品类型 */
        type: string;
        value: string | null;
        /** 奖品数量 */
        amount: number;
        /** 单位 */
        unit: string;
        /** 基础概率 */
        baseProbability: number;
        /** 领取方式 */
        redeemMethod: string;
        redeemDeadline: Date | string | string | number | null;
        description?: string | null;
      } | null;
      drawTime: Date | string | string | number;
      status: string | string;
      createdAt: Date | string | string | number;
      updatedAt: Date | string | string | number;
      activity: {
        id: string;
        title: string;
        cover: string | null;
      };
      reward: {
        id: string;
        status: string | string | string | string;
        redeemCode: string | null;
        expireAt: Date | string | string | number | null;
      } | null;
    }[];
    total?: number;
    page?: number;
    totalPages?: number;
  };
};

export type LotRecordsUsingGetResponses = {
  200: LotRecordsUsingGetResponse;
};

export type LotRewardRewardIdDeliveryUsingPostBody = {
  /** 收货人姓名 */
  receiverName: string;
  /** 收货人电话 */
  receiverPhone: string;
  /** 省份 */
  province: string;
  /** 城市 */
  city: string;
  /** 区县 */
  district: string;
  /** 详细地址 */
  address: string;
  /** 邮编 */
  postalCode?: string;
};

export type LotRewardRewardIdDeliveryUsingPostParams = {
  /** 奖励ID */
  rewardId: string;
};

export type LotRewardRewardIdDeliveryUsingPostResponse = {
  success: boolean;
  message?: string;
  data?: {
    id?: string;
    recordId?: string;
    activityId?: string;
    userId?: string;
    prizeId?: string;
    prizeData: {
      /** 奖品ID */
      id: string;
      name: string | null;
      imageUrl: string | null;
      /** 奖品类型 */
      type: string;
      value: string | null;
      /** 奖品数量 */
      amount: number;
      /** 单位 */
      unit: string;
      /** 基础概率 */
      baseProbability: number;
      /** 领取方式 */
      redeemMethod: string;
      redeemDeadline: Date | string | string | number | null;
      description?: string | null;
    };
    status?: string | string | string | string;
    redeemCode?: string | null;
    redeemTime?: Date | string | string | number | null;
    verifierId?: string | null;
    verifier?: string | null;
    redeemMethod?: string;
    deliveryInfo?: {
      /** 收货人姓名 */
      receiverName: string;
      /** 收货人电话 */
      receiverPhone: string;
      /** 省份 */
      province: string;
      /** 城市 */
      city: string;
      /** 区县 */
      district: string;
      /** 详细地址 */
      address: string;
      /** 邮编 */
      postalCode?: string;
      /** 物流单号 */
      trackingNumber?: string;
      /** 快递公司 */
      carrier?: string;
      /** 发货时间 */
      shippedAt?: string;
      /** 送达时间 */
      deliveredAt?: string;
    } | null;
    adminNote?: string | null;
    expireAt?: Date | string | string | number | null;
    createdAt?: Date | string | string | number;
    updatedAt?: Date | string | string | number;
    activity: {
      id: string;
      title: string;
      cover: string | null;
    };
    record: {
      id: string;
      userId: string;
      activityId: string;
      prizeId: string | null;
      prizeData: {
        /** 奖品ID */
        id: string;
        name: string | null;
        imageUrl: string | null;
        /** 奖品类型 */
        type: string;
        value: string | null;
        /** 奖品数量 */
        amount: number;
        /** 单位 */
        unit: string;
        /** 基础概率 */
        baseProbability: number;
        /** 领取方式 */
        redeemMethod: string;
        redeemDeadline: Date | string | string | number | null;
        description?: string | null;
      } | null;
      drawTime: Date | string | string | number;
      status: string | string;
      createdAt: Date | string | string | number;
      updatedAt: Date | string | string | number;
    };
  };
};

export type LotRewardRewardIdDeliveryUsingPostResponses = {
  200: LotRewardRewardIdDeliveryUsingPostResponse;
};

export type LotRewardRewardIdUsingGetParams = {
  /** 奖励ID */
  rewardId: string;
};

export type LotRewardRewardIdUsingGetResponse = {
  success: boolean;
  message?: string;
  data?: {
    id?: string;
    recordId?: string;
    activityId?: string;
    userId?: string;
    prizeId?: string;
    prizeData: {
      /** 奖品ID */
      id: string;
      name: string | null;
      imageUrl: string | null;
      /** 奖品类型 */
      type: string;
      value: string | null;
      /** 奖品数量 */
      amount: number;
      /** 单位 */
      unit: string;
      /** 基础概率 */
      baseProbability: number;
      /** 领取方式 */
      redeemMethod: string;
      redeemDeadline: Date | string | string | number | null;
      description?: string | null;
    };
    status?: string | string | string | string;
    redeemCode?: string | null;
    redeemTime?: Date | string | string | number | null;
    verifierId?: string | null;
    verifier?: string | null;
    redeemMethod?: string;
    deliveryInfo?: {
      /** 收货人姓名 */
      receiverName: string;
      /** 收货人电话 */
      receiverPhone: string;
      /** 省份 */
      province: string;
      /** 城市 */
      city: string;
      /** 区县 */
      district: string;
      /** 详细地址 */
      address: string;
      /** 邮编 */
      postalCode?: string;
      /** 物流单号 */
      trackingNumber?: string;
      /** 快递公司 */
      carrier?: string;
      /** 发货时间 */
      shippedAt?: string;
      /** 送达时间 */
      deliveredAt?: string;
    } | null;
    adminNote?: string | null;
    expireAt?: Date | string | string | number | null;
    createdAt?: Date | string | string | number;
    updatedAt?: Date | string | string | number;
    activity: {
      id: string;
      title: string;
      cover: string | null;
    };
    record: {
      id: string;
      userId: string;
      activityId: string;
      prizeId: string | null;
      prizeData: {
        /** 奖品ID */
        id: string;
        name: string | null;
        imageUrl: string | null;
        /** 奖品类型 */
        type: string;
        value: string | null;
        /** 奖品数量 */
        amount: number;
        /** 单位 */
        unit: string;
        /** 基础概率 */
        baseProbability: number;
        /** 领取方式 */
        redeemMethod: string;
        redeemDeadline: Date | string | string | number | null;
        description?: string | null;
      } | null;
      drawTime: Date | string | string | number;
      status: string | string;
      createdAt: Date | string | string | number;
      updatedAt: Date | string | string | number;
    };
  };
};

export type LotRewardRewardIdUsingGetResponses = {
  200: LotRewardRewardIdUsingGetResponse;
};

export type LotRewardsUsingGetParams = {
  /** 页码 */
  page?: number | number;
  /** 每页数量 */
  limit?: number | number;
  /** 状态筛选 */
  status?: string;
  /** 活动ID筛选 */
  activityId?: string;
};

export type LotRewardsUsingGetResponse = {
  success: boolean;
  message?: string;
  data?: {
    rewards?: {
      id: string;
      activityId: string;
      userId: string;
      prizeId: string;
      prizeData: {
        /** 奖品ID */
        id: string;
        name: string | null;
        imageUrl: string | null;
        /** 奖品类型 */
        type: string;
        value: string | null;
        /** 奖品数量 */
        amount: number;
        /** 单位 */
        unit: string;
        /** 基础概率 */
        baseProbability: number;
        /** 领取方式 */
        redeemMethod: string;
        redeemDeadline: Date | string | string | number | null;
        description?: string | null;
      };
      status: string | string | string | string;
      redeemCode: string | null;
      redeemTime: Date | string | string | number | null;
      expireAt: Date | string | string | number | null;
      createdAt: Date | string | string | number;
      activity: {
        id: string;
        title: string;
        cover: string | null;
      };
    }[];
    total?: number;
    page?: number;
    totalPages?: number;
  };
};

export type LotRewardsUsingGetResponses = {
  200: LotRewardsUsingGetResponse;
};

export type LotVerifyUsingPostBody = {
  /** 核销码 */
  redeemCode: string;
};

export type LotVerifyUsingPostResponse = {
  success: boolean;
  message?: string;
};

export type LotVerifyUsingPostResponses = {
  200: LotVerifyUsingPostResponse;
};

export type MapMasterIdUsingGetParams = {
  /** 名师ID */
  id: string;
};

export type MapMasterIdUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 名师ID */
    id: string;
    /** 名师姓名 */
    name: string;
    /** 名师简介 */
    intro: string;
    /** 籍贯 */
    hometown: string | null;
    /** 地址 */
    address: string | null;
    /** 纬度 */
    latitude: number;
    /** 经度 */
    longitude: number;
    /** 联系电话 */
    phone: string;
    /** 头像 */
    avatar: string;
    /** 流派 */
    style: string;
    /** 证书 */
    certificate: string[];
    /** 图片集 */
    images:
      | {
          /** 图片URL */
          url: string;
          /** 图片标题 */
          title?: string;
        }[]
      | null;
    /** 视频集 */
    videos:
      | {
          /** 视频URL */
          url: string;
          /** 视频封面 */
          cover?: string;
          /** 视频标题 */
          title?: string;
        }[]
      | null;
    org: {
      /** 组织ID */
      id: string;
      /** 组织名称 */
      name: string;
      /** 图片集 */
      images:
        | {
            /** 图片URL */
            url: string;
            /** 图片标题 */
            title?: string;
          }[]
        | null;
      /** 组织简介 */
      intro: string;
    } | null;
  } | null;
};

export type MapMasterIdUsingGetResponses = {
  200: MapMasterIdUsingGetResponse;
};

export type MapMasterMyUsingGetParams = {
  /** 页码 */
  page?: number;
  /** 每页条数 */
  pageSize?: number;
  /** 名师状态 */
  status?: string;
  /** 所属组织ID */
  orgId?: string;
  /** 搜索关键词 */
  keyword?: string;
};

export type MapMasterMyUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    list: {
      /** 名师ID */
      id: string;
      /** 名师姓名 */
      name: string;
      /** 籍贯 */
      hometown: string | null;
      /** 地址 */
      address: string | null;
      /** 纬度 */
      latitude: number;
      /** 经度 */
      longitude: number;
      /** 头像 */
      avatar: string;
      /** 图片集 */
      images:
        | {
            /** 图片URL */
            url: string;
            /** 图片标题 */
            title?: string;
          }[]
        | null;
      org: {
        /** 组织ID */
        id: string;
        /** 组织名称 */
        name: string;
      } | null;
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页条数 */
    pageSize: number;
  } | null;
};

export type MapMasterMyUsingGetResponses = {
  200: MapMasterMyUsingGetResponse;
};

export type MapMasterSearchUsingGetParams = {
  /** 搜索关键词 */
  keyword: string;
  /** 页码 */
  page?: number;
  /** 每页条数 */
  pageSize?: number;
};

export type MapMasterSearchUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    list: {
      /** 名师ID */
      id: string;
      /** 名师姓名 */
      name: string;
      /** 地址 */
      address: string | null;
      /** 纬度 */
      latitude: number;
      /** 经度 */
      longitude: number;
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页条数 */
    pageSize: number;
  } | null;
};

export type MapMasterSearchUsingGetResponses = {
  200: MapMasterSearchUsingGetResponse;
};

export type MapMasterUsingPostBody = {
  /** 名师姓名 */
  name: string;
  /** 名师简介 */
  intro: string;
  /** 籍贯 */
  hometown?: string;
  /** 地址 */
  address?: string;
  /** 纬度 */
  latitude: number;
  /** 经度 */
  longitude: number;
  /** 联系电话 */
  phone: string;
  /** 头像 */
  avatar: string;
  /** 流派 */
  style: string;
  /** 证书 */
  certificate: string[];
  /** 图片集 */
  images?: {
    /** 图片URL */
    url: string;
    /** 图片标题 */
    title?: string;
  }[];
  /** 视频集 */
  videos?: {
    /** 视频URL */
    url: string;
    /** 视频封面 */
    cover?: string;
    /** 视频标题 */
    title?: string;
  }[];
  /** 所属组织ID */
  orgId?: string;
};

export type MapMasterUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 名师ID */
    id: string;
    /** 名师姓名 */
    name: string;
    /** 所属组织ID */
    orgId: string | null;
  } | null;
};

export type MapMasterUsingPostResponses = {
  200: MapMasterUsingPostResponse;
};

export type MapOrgIdUsingGetParams = {
  /** 组织ID */
  id: string;
};

export type MapOrgIdUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 组织ID */
    id: string;
    /** 组织名称 */
    name: string;
    /** 组织简介 */
    intro: string;
    /** 营业执照 */
    license: string[];
    /** 联系人 */
    userName: string;
    /** 联系电话 */
    phone: string;
    /** 身份证号 */
    idCard: string;
    /** 组织类型 */
    orgType: string;
    /** 组织规模 */
    orgSize: string;
    /** 地址 */
    address: string | null;
    /** 纬度 */
    latitude: number;
    /** 经度 */
    longitude: number;
    /** 图片集 */
    images:
      | {
          /** 图片URL */
          url: string;
          /** 图片标题 */
          title?: string;
        }[]
      | null;
    /** 视频集 */
    videos:
      | {
          /** 视频URL */
          url: string;
          /** 视频封面 */
          cover?: string;
          /** 视频标题 */
          title?: string;
        }[]
      | null;
    masters: {
      /** 名师ID */
      id: string;
      /** 名师姓名 */
      name: string;
      /** 头像 */
      avatar: string;
      /** 图片集 */
      images:
        | {
            /** 图片URL */
            url: string;
            /** 图片标题 */
            title?: string;
          }[]
        | null;
      /** 名师简介 */
      intro: string;
    }[];
  } | null;
};

export type MapOrgIdUsingGetResponses = {
  200: MapOrgIdUsingGetResponse;
};

export type MapOrgMyUsingGetParams = {
  /** 页码 */
  page?: number;
  /** 每页条数 */
  pageSize?: number;
  /** 组织状态 */
  status?: string;
  /** 组织类型 */
  orgType?: string;
  /** 搜索关键词 */
  keyword?: string;
};

export type MapOrgMyUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    list: {
      /** 组织ID */
      id: string;
      /** 组织名称 */
      name: string;
      /** 组织类型 */
      orgType: string | null;
      /** 地址 */
      address: string | null;
      /** 纬度 */
      latitude: number;
      /** 经度 */
      longitude: number;
      /** 图片集 */
      images:
        | {
            /** 图片URL */
            url: string;
            /** 图片标题 */
            title?: string;
          }[]
        | null;
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页条数 */
    pageSize: number;
  } | null;
};

export type MapOrgMyUsingGetResponses = {
  200: MapOrgMyUsingGetResponse;
};

export type MapOrgSearchUsingGetParams = {
  /** 搜索关键词 */
  keyword: string;
  /** 页码 */
  page?: number;
  /** 每页条数 */
  pageSize?: number;
};

export type MapOrgSearchUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    list: {
      /** 组织ID */
      id: string;
      /** 组织名称 */
      name: string;
      /** 地址 */
      address: string | null;
      /** 纬度 */
      latitude: number;
      /** 经度 */
      longitude: number;
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页条数 */
    pageSize: number;
  } | null;
};

export type MapOrgSearchUsingGetResponses = {
  200: MapOrgSearchUsingGetResponse;
};

export type MapOrgUsingPostBody = {
  /** 组织名称 */
  name: string;
  /** 组织简介 */
  intro: string;
  /** 营业执照 */
  license: string[];
  /** 联系人 */
  userName: string;
  /** 联系电话 */
  phone: string;
  /** 身份证号 */
  idCard: string;
  /** 组织类型 */
  orgType: string;
  /** 组织规模 */
  orgSize: string;
  /** 图片集 */
  images?: {
    /** 图片URL */
    url: string;
    /** 图片标题 */
    title?: string;
  }[];
  /** 视频集 */
  videos?: {
    /** 视频URL */
    url: string;
    /** 视频封面 */
    cover?: string;
    /** 视频标题 */
    title?: string;
  }[];
  /** 地址 */
  address?: string;
  /** 纬度 */
  latitude: number;
  /** 经度 */
  longitude: number;
};

export type MapOrgUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 组织ID */
    id: string;
    /** 组织名称 */
    name: string;
    /** 组织类型 */
    orgType: string;
    /** 组织规模 */
    orgSize: string;
    /** 地址 */
    address: string | null;
    /** 纬度 */
    latitude: number;
    /** 经度 */
    longitude: number;
  } | null;
};

export type MapOrgUsingPostResponses = {
  200: MapOrgUsingPostResponse;
};

export type MapPointsUsingPostBody = {
  /** 点位类型: org-组织, master-名师 */
  type: string;
  /** 中心点纬度 */
  latitude?: number;
  /** 中心点经度 */
  longitude?: number;
  /** 搜索半径(米),默认10000米 */
  radius?: number;
  /** 每页数量,默认10 */
  pageSize?: number;
  /** 页码,从1开始,默认1 */
  page?: number;
};

export type MapPointsUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    list: {
      /** ID */
      id: string;
      /** 名称 */
      name: string;
      /** 简介 */
      intro: string;
      /** 类型 */
      type: string;
      /** 纬度 */
      latitude: number;
      /** 经度 */
      longitude: number;
      /** 地址 */
      address: string;
    }[];
    /** 总数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页数量 */
    pageSize: number;
    /** 总页数 */
    totalPages: number;
  } | null;
};

export type MapPointsUsingPostResponses = {
  200: MapPointsUsingPostResponse;
};

export type MapStudentApplyUsingPostBody = {
  /** 名师ID */
  masterId: string;
  /** 学生姓名 */
  name: string;
  /** 学生头像 */
  avatar: string;
  /** 联系电话 */
  phone: string;
  /** 流派 */
  style: string;
  /** 证书 */
  certificate?: string[];
};

export type MapStudentApplyUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 学生ID */
    id: string;
    /** 名师ID */
    masterId: string;
    /** 申请状态 */
    status: string;
  } | null;
};

export type MapStudentApplyUsingPostResponses = {
  200: MapStudentApplyUsingPostResponse;
};

export type MapStylesUsingGetParams = {
  /** 页码 */
  page?: number;
  /** 每页条数 */
  pageSize?: number;
  /** 流派名称关键词 */
  keyword?: string;
};

export type MapStylesUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    list: {
      /** 流派ID */
      id: string;
      /** 流派名称 */
      name: string;
      /** 创建人姓名 */
      creatorName: string;
      /** 创建时间 */
      createdAt: Date | string | string | number;
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页条数 */
    pageSize: number;
  } | null;
};

export type MapStylesUsingGetResponses = {
  200: MapStylesUsingGetResponse;
};

export type PaymentCashierOrderInfoUsingGetParams = {
  /** 业务类型 */
  bizType: string;
  /** 业务订单ID */
  bizOrderId: string;
};

export type PaymentCashierOrderInfoUsingGetResponse = {
  /** 支付金额（单位分） */
  amount: number;
  /** 订单标题 */
  subject: string;
  /** 订单描述 */
  description: string;
  /** 用户ID */
  userId?: string;
  /** 业务类型名称 */
  bizTypeName: string;
};

export type PaymentCashierOrderInfoUsingGetResponses = {
  200: PaymentCashierOrderInfoUsingGetResponse;
};

export type PaymentCashierPaymentStatusUsingGetParams = {
  /** 业务类型 */
  bizType: string;
  /** 业务订单ID */
  bizOrderId: string;
};

export type PaymentCashierPaymentStatusUsingGetResponse = {
  /** 是否成功 */
  success: boolean;
  /** 消息 */
  message?: string;
  data?: {
    /** 支付订单ID */
    paymentOrderId?: string;
    /** 业务订单ID */
    businessOrderId?: string;
    /** 业务类型 */
    businessType?: string;
    /** 支付状态 */
    status?: string;
    /** 订单金额（分） */
    amount?: number;
    /** 已支付金额（分） */
    paidAmount?: number;
    /** 已退款金额（分） */
    refundedAmount?: number;
    /** 订单标题 */
    subject?: string;
    /** 订单描述 */
    description?: string;
    /** 创建时间 */
    createdAt?: string;
    /** 支付时间 */
    paidAt?: string;
    /** 退款时间 */
    refundedAt?: string;
    channelTransactionId?: string | null;
    channel: {
      /** 渠道ID */
      id: string;
      /** 渠道名称 */
      name: string;
      /** 渠道类型 */
      type: string;
    };
  };
};

export type PaymentCashierPaymentStatusUsingGetResponses = {
  200: PaymentCashierPaymentStatusUsingGetResponse;
};

export type PaymentCashierUnionUsingPostBody = {
  /** 业务类型 */
  bizType: string;
  /** 业务订单ID */
  bizOrderId: string;
  /** 支付渠道ID */
  channelId: string;
  /** 渠道授权码（如微信code） */
  channelCode?: string;
  /** 支付方式，默认为jsapi */
  channelMethod?: string;
};

export type PaymentCashierUnionUsingPostResponses = {
  200: {
    /** 状态：SUCCESS-成功，NEED_LOGIN-需要登录 */
    status: string;
    paymentData: {
      /** 支付参数 */
      payParams?: Record<string, unknown>;
      /** 额外信息 */
      extra?: Record<string, unknown>;
      /** 创建时间 */
      createdAt: string;
    };
    /** 登录URL（需要登录时返回） */
    loginUrl?: string;
  } | null;
};

export type PaymentListUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data:
    | {
        /** 渠道ID */
        id: string;
        /** 渠道名称 */
        name: string;
        /** 渠道类型 */
        type: string;
        /** 支付方式 */
        payMethods: string;
        logo: string | null;
        /** 应用ID */
        appId: string;
      }[]
    | null;
};

export type PaymentListUsingGetResponses = {
  200: PaymentListUsingGetResponse;
};

export type PaymentLoginChannlIdUsingPostBody = {
  /** 微信登录code */
  code: string;
};

export type PaymentLoginChannlIdUsingPostParams = {
  /** 支付渠道ID */
  channlId: string;
};

export type PaymentLoginChannlIdUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: string | null;
};

export type PaymentLoginChannlIdUsingPostResponses = {
  200: PaymentLoginChannlIdUsingPostResponse;
};

export type PaymentPayAppIdUsingPostBody = {
  /** 支付订单ID */
  paymentOrderId: string;
  /** 微信登录code */
  code: string;
};

export type PaymentPayAppIdUsingPostParams = {
  /** 支付渠道ID */
  appId: string;
};

export type PaymentPayAppIdUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 支付参数(app/公众号等) */
    payParams?: Record<string, unknown>;
    /** 额外信息 */
    extra?: Record<string, unknown>;
    /** 创建时间 */
    createdAt: string;
  } | null;
};

export type PaymentPayAppIdUsingPostResponses = {
  200: PaymentPayAppIdUsingPostResponse;
};

export type PaymentTransferUsingGetParams = {
  /** 提款单 */
  order: string;
};

export type PaymentTransferUsingGetResponses = {
  200: unknown;
};

export type PointBalanceUsingGetResponse = {
  success: boolean;
  message?: string;
  data: number | null;
};

export type PointBalanceUsingGetResponses = {
  200: PointBalanceUsingGetResponse;
};

export type PointConfigUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 是否开启消费领积分 */
    enablePointReward: boolean;
    /** 消费领积分的比例(百分比,如10表示10%) */
    pointRewardRate: number;
    /** 积分和现金的转化比例(如100表示100积分=1元) */
    pointToCashRate: number;
    /** 积分使用规则 */
    pointUsageRule: string;
  } | null;
};

export type PointConfigUsingGetResponses = {
  200: PointConfigUsingGetResponse;
};

export type PointOrderCreateUsingPostBody = {
  /** 积分商品ID */
  productId: string;
  /** 子项商品ID(商城skuid) */
  childId?: string;
  /** 购买数量 */
  quantity: number;
  /** 购买模式：POINT积分/POINT_AND_CASH积分+现金/CASH_DIRECT现金直购 */
  purchaseMode: string | string | string;
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
};

export type PointOrderCreateUsingPostResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 业务类型 */
    bizType: string;
    /** 业务订单ID */
    bizOrderId: string;
  } | null;
};

export type PointOrderCreateUsingPostResponses = {
  200: PointOrderCreateUsingPostResponse;
};

export type PointOrderDetailUsingGetParams = {
  /** 积分订单ID */
  id?: string;
  /** 业务订单ID */
  bizOrderId?: string;
};

export type PointOrderDetailUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 订单ID */
    id: string;
    /** 用户ID */
    userId: string;
    /** 总消耗积分 */
    totalPointsUsed: number;
    /** 总订单支付金额 */
    totalOrderAmount: number;
    /** 实付金额 */
    actualPayAmount: number;
    /** 运费 */
    shippingFee: number;
    /** 活动商品ID */
    activityProductId: string;
    /** 业务类型 */
    bizType: string;
    /** 业务项目ID */
    bizItemId: string;
    /** 商品名称 */
    productName: string;
    productImage: string | null;
    /** 购买模式：POINT积分/POINT_AND_CASH积分+现金/CASH_DIRECT现金直购 */
    purchaseMode: string | string | string;
    /** 积分价格 */
    productPointPrice: number;
    /** 现金价格 */
    productCashPrice: number;
    /** 购买数量 */
    quantity: number;
    status: string | null;
    bizOrderId: string | null;
    /** 创建时间 */
    createdAt: Date | string | string | number;
    /** 更新时间 */
    updatedAt: Date | string | string | number;
    activityProduct: {
      /** 活动商品ID */
      id: string;
      /** 关联活动ID */
      activityId: string;
      /** 商品所属模块 */
      bizType: string;
      /** 商品ID */
      bizItemId: string;
      childItems: string[] | null;
      /** 商品名称 */
      name: string;
      image: string | null;
      description: string | null;
      /** 积分价格 */
      pointPrice: number;
      /** 现金价格(分) */
      cashPrice: number;
      /** 原价(分) */
      originalPrice: number;
      cashDirectPrice: number | null;
      /** 库存 */
      stock: number;
      limitPerUser: number | null;
      /** 已售数量 */
      soldCount: number;
      /** 购买模式：POINT积分/POINT_AND_CASH积分+现金/CASH_DIRECT现金直购 */
      purchaseMode: string | string | string;
      /** 允许现金直购 */
      allowCashOnly: boolean;
      /** 是否开启限购 */
      enableLimit: boolean;
      /** 创建时间 */
      createdAt: Date | string | string | number;
      /** 更新时间 */
      updatedAt: Date | string | string | number;
      activity: {
        /** 活动ID */
        id: string;
        /** 活动名称 */
        name: string;
        image: string | null;
        description: string | null;
        startTime: Date | string | string | number | null;
        endTime: Date | string | string | number | null;
        /** 活动类型 */
        type: string;
        /** 活动状态 */
        status: string;
        /** 创建时间 */
        createdAt: Date | string | string | number;
        /** 更新时间 */
        updatedAt: Date | string | string | number;
      };
    };
  } | null;
};

export type PointOrderDetailUsingGetResponses = {
  200: PointOrderDetailUsingGetResponse;
};

export type PointOrderListUsingGetParams = {
  /** 页码 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 订单状态筛选 */
  status?: string;
  /** 业务类型筛选 */
  bizType?: string;
  /** 关键字搜索（商品名称） */
  keyword?: string;
  /** 购买模式筛选 */
  purchaseMode?: string | string | string;
};

export type PointOrderListUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    data: {
      /** 订单ID */
      id: string;
      /** 用户ID */
      userId: string;
      /** 总消耗积分 */
      totalPointsUsed: number;
      /** 总订单支付金额 */
      totalOrderAmount: number;
      /** 实付金额 */
      actualPayAmount: number;
      /** 运费 */
      shippingFee: number;
      /** 活动商品ID */
      activityProductId: string;
      /** 业务类型 */
      bizType: string;
      /** 业务项目ID */
      bizItemId: string;
      /** 商品名称 */
      productName: string;
      productImage: string | null;
      /** 购买模式：POINT积分/POINT_AND_CASH积分+现金/CASH_DIRECT现金直购 */
      purchaseMode: string | string | string;
      /** 积分价格 */
      productPointPrice: number;
      /** 现金价格 */
      productCashPrice: number;
      /** 购买数量 */
      quantity: number;
      status: string | null;
      bizOrderId: string | null;
      /** 创建时间 */
      createdAt: Date | string | string | number;
      /** 更新时间 */
      updatedAt: Date | string | string | number;
      activityProduct: {
        /** 活动商品ID */
        id: string;
        /** 关联活动ID */
        activityId: string;
        /** 商品所属模块 */
        bizType: string;
        /** 商品ID */
        bizItemId: string;
        childItems: string[] | null;
        /** 商品名称 */
        name: string;
        image: string | null;
        description: string | null;
        /** 积分价格 */
        pointPrice: number;
        /** 现金价格(分) */
        cashPrice: number;
        /** 原价(分) */
        originalPrice: number;
        cashDirectPrice: number | null;
        /** 库存 */
        stock: number;
        limitPerUser: number | null;
        /** 已售数量 */
        soldCount: number;
        /** 购买模式：POINT积分/POINT_AND_CASH积分+现金/CASH_DIRECT现金直购 */
        purchaseMode: string | string | string;
        /** 允许现金直购 */
        allowCashOnly: boolean;
        /** 是否开启限购 */
        enableLimit: boolean;
        /** 创建时间 */
        createdAt: Date | string | string | number;
        /** 更新时间 */
        updatedAt: Date | string | string | number;
        activity: {
          /** 活动ID */
          id: string;
          /** 活动名称 */
          name: string;
          image: string | null;
          description: string | null;
          startTime: Date | string | string | number | null;
          endTime: Date | string | string | number | null;
          /** 活动类型 */
          type: string;
          /** 活动状态 */
          status: string;
          /** 创建时间 */
          createdAt: Date | string | string | number;
          /** 更新时间 */
          updatedAt: Date | string | string | number;
        };
      };
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 总页数 */
    totalPages: number;
  } | null;
};

export type PointOrderListUsingGetResponses = {
  200: PointOrderListUsingGetResponse;
};

export type PointProductIdSpecUsingGetParams = {
  /** 商城商品ID */
  id: string;
};

export type PointProductIdSpecUsingGetResponse = {
  success: boolean;
  message?: string;
  data:
    | {
        /** 规格ID */
        id: string;
        specifications: {
          /** 规格名称 */
          name: string;
          /** 规格值 */
          value: string;
        }[];
      }[]
    | null;
};

export type PointProductIdSpecUsingGetResponses = {
  200: PointProductIdSpecUsingGetResponse;
};

export type PointProductIdUsingGetParams = {
  /** 积分商品ID */
  id: string;
};

export type PointProductIdUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 商品ID */
    id: string;
    /** 关联活动ID */
    activityId: string;
    /** 商品所属模块 */
    bizType: string;
    /** 商品ID */
    bizItemId: string;
    childItems: string[] | null;
    /** 商品名称 */
    name: string;
    image: string | null;
    description: string | null;
    /** 积分价格 */
    pointPrice: number;
    /** 现金价格(分) */
    cashPrice: number;
    /** 原价(分) */
    originalPrice: number;
    cashDirectPrice: number | null;
    /** 库存 */
    stock: number;
    limitPerUser: number | null;
    /** 已售数量 */
    soldCount: number;
    /** 购买模式：POINT积分/POINT_AND_CASH积分+现金/CASH_DIRECT现金直购 */
    purchaseMode: string | string | string;
    /** 允许现金直购 */
    allowCashOnly: boolean;
    /** 是否开启限购 */
    enableLimit: boolean;
    /** 创建时间 */
    createdAt: Date | string | string | number;
    /** 更新时间 */
    updatedAt: Date | string | string | number;
    activity: {
      /** 活动ID */
      id: string;
      /** 活动名称 */
      name: string;
      image: string | null;
      description: string | null;
      startTime: Date | string | string | number | null;
      endTime: Date | string | string | number | null;
      /** 活动类型 */
      type: string;
      /** 活动状态 */
      status: string;
      /** 创建时间 */
      createdAt: Date | string | string | number;
      /** 更新时间 */
      updatedAt: Date | string | string | number;
    };
  } | null;
};

export type PointProductIdUsingGetResponses = {
  200: PointProductIdUsingGetResponse;
};

export type PointProductListUsingGetParams = {
  /** 页码 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 关键字搜索（商品名称） */
  keyword?: string;
};

export type PointProductListUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    data: {
      /** 商品ID */
      id: string;
      /** 关联活动ID */
      activityId: string;
      /** 商品所属模块 */
      bizType: string;
      /** 商品ID */
      bizItemId: string;
      childItems: string[] | null;
      /** 商品名称 */
      name: string;
      image: string | null;
      description: string | null;
      /** 积分价格 */
      pointPrice: number;
      /** 现金价格(分) */
      cashPrice: number;
      /** 原价(分) */
      originalPrice: number;
      cashDirectPrice: number | null;
      /** 库存 */
      stock: number;
      limitPerUser: number | null;
      /** 已售数量 */
      soldCount: number;
      /** 购买模式：POINT积分/POINT_AND_CASH积分+现金 */
      purchaseMode: string | string | string;
      /** 允许现金直购 */
      allowCashOnly: boolean;
      /** 是否开启限购 */
      enableLimit: boolean;
      /** 创建时间 */
      createdAt: Date | string | string | number;
      /** 更新时间 */
      updatedAt: Date | string | string | number;
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 总页数 */
    totalPages: number;
  } | null;
};

export type PointProductListUsingGetResponses = {
  200: PointProductListUsingGetResponse;
};

export type PointWalletBalanceUsingGetParams = {
  /** 页码 */
  page: number;
  /** 每页数量 */
  pageSize: number;
};

export type PointWalletBalanceUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 积分余额 */
    balance: number;
    transactions: {
      data: {
        /** 交易数量（正数入账，负数出账） */
        amount: number;
        remark: string | null;
        /** 创建时间 */
        createdAt: Date | string | string | number;
      }[];
      /** 总记录数 */
      total: number;
      /** 当前页码 */
      page: number;
      /** 总页数 */
      totalPages: number;
    };
  } | null;
};

export type PointWalletBalanceUsingGetResponses = {
  200: PointWalletBalanceUsingGetResponse;
};

export type PoiV1AddressUsingGetParams = {
  /** 地址 */
  address: string;
};

export type PoiV1AddressUsingGetResponses = {
  200: {
    /** 省 */
    province: string;
    /** 城市 */
    city: string;
    /** 地址 */
    address: string;
    area?: string | null;
    name?: string | null;
    phone?: string | null;
  } | null;
};

export type PoiV1PlaceAroundUsingGetParams = {
  /** 中心点坐标，格式为"经度,纬度" */
  location: string;
  /** 搜索关键词，用于过滤周边POI */
  keywords?: string;
  /** POI分类编码，多个用|分隔，200300->厕所,150907->停车场入口 */
  types?: string;
  /** 搜索半径，单位米，最大50000 */
  radius?: string;
  /** 排序规则 */
  sortrule?: 'distance' | 'weight';
  /** 每页返回结果数量，最大25 */
  page_size?: string;
  /** 页码，从1开始 */
  page_num?: string;
  /** 坐标系类型，amap为高德地图坐标系，tmap为腾讯地图坐标系 */
  coord_type?: 'amap' | 'tmap';
};

export type PoiV1PlaceAroundUsingGetResponse = {
  /** 状态码，1表示成功，0表示失败 */
  status: string;
  /** 状态信息 */
  info: string;
  /** 更详细的状态码 */
  infocode: string;
  /** 搜索结果总数 */
  count: string;
  /** POI数据列表，按距离排序 */
  pois: {
    /** POI唯一标识 */
    id: string;
    /** POI名称 */
    name: string;
    /** 经纬度坐标，格式为"经度,纬度" */
    location: string;
    /** 纬度 */
    lat: number;
    /** 经度 */
    lng: number;
    /** POI类型名称 */
    type: string;
    /** POI类型编码 */
    typecode: string;
    /** 详细地址 */
    address: string;
    /** 省名称 */
    pname?: string;
    /** 城市名称 */
    cityname?: string;
    /** 区域名称 */
    adname?: string;
    /** 省编码 */
    pcode?: string;
    /** 区域编码 */
    adcode?: string;
    /** 城市编码 */
    citycode?: string;
    /** 电话号码数组 */
    tel?: string[];
    /** 距离中心点的距离（米） */
    distance: string;
    /** 照片信息 */
    photos?: unknown;
    rating?: string | null;
    cost?: string | null;
  }[];
};

export type PoiV1PlaceAroundUsingGetResponses = {
  200: PoiV1PlaceAroundUsingGetResponse;
};

export type PrmtCouponCouponListUsingGetParams = {
  /** 页码 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 优惠券类型筛选 */
  type?: string | string;
  ids?: string[];
};

export type PrmtCouponCouponListUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    data: {
      /** 优惠券ID */
      id: string;
      /** 优惠券名称 */
      name: string;
      image: string | null;
      description: string | null;
      /** 优惠券类型：DISCOUNT折扣券/VOUCHER代金券 */
      type: string | string;
      /** 优惠值：折扣券为折扣比例(如85表示8.5折)，代金券为减免金额(分) */
      value: number;
      /** 领取条件配置：包含conditions数组(TotalLimitCondition、PersonalLimitCondition) */
      receiveConfig: unknown;
      /** 使用条件配置：包含conditions数组(ConsumptionLimitCondition) */
      useConfig: unknown;
      /** 领取模式：DAYS_AFTER_RECEIVE领取后X天失效/SPECIFIC_DATE_RANGE指定时间范围 */
      receiveMode: string | string;
      /** 是否限制领取总数 */
      isLimitTotal: boolean;
      /** 领取总数限制（isLimitTotal为true时有效） */
      totalLimit: number;
      /** 剩余可领取数量（isLimitTotal为true时有效） */
      remainingLimit: number;
      startTime: Date | string | string | number | null;
      endTime: Date | string | string | number | null;
      expiredDays: number | null;
      /** 状态：ACTIVE启用/INACTIVE禁用/EXPIRED已过期 */
      status: string | string | string;
      /** 创建时间 */
      createdAt: Date | string | string | number;
      /** 更新时间 */
      updatedAt: Date | string | string | number;
      /** 最高优惠金额（分） */
      discountLimit: number;
      minAmount: number | null;
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 总页数 */
    totalPages: number;
  } | null;
};

export type PrmtCouponCouponListUsingGetResponses = {
  200: PrmtCouponCouponListUsingGetResponse;
};

export type PrmtCouponReceiveCenterDetailUsingGetParams = {
  /** 领券中心ID */
  id: string;
};

export type PrmtCouponReceiveCenterDetailUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 领券中心ID */
    id: string;
    /** 活动标题 */
    title: string;
    description: string | null;
    cover: string | null;
    /** 开始时间 */
    startTime: Date | string | string | number;
    /** 结束时间 */
    endTime: Date | string | string | number;
    /** 状态 */
    status: string | string | string;
    /** 创建时间 */
    createdAt: Date | string | string | number;
    /** 更新时间 */
    updatedAt: Date | string | string | number;
    /** 优惠券列表 */
    centerCoupons: {
      /** 关联ID */
      id: string;
      /** 领券中心ID */
      ReceiveCenterId: string;
      /** 优惠券ID */
      couponId: string;
      /** 排序 */
      sortOrder: number;
      beginTime: Date | string | string | number | null;
      endTime: Date | string | string | number | null;
      /** 创建时间 */
      createdAt: Date | string | string | number;
      /** 更新时间 */
      updatedAt: Date | string | string | number;
      /** 版本号（乐观锁） */
      version: number;
      coupon: {
        /** 优惠券ID */
        id: string;
        /** 优惠券名称 */
        name: string;
        image: string | null;
        description: string | null;
        /** 优惠券类型：DISCOUNT折扣券/VOUCHER代金券 */
        type: string | string;
        /** 优惠值：折扣券为折扣比例(如85表示8.5折)，代金券为减免金额(分) */
        value: number;
        /** 领取条件配置：包含conditions数组(TotalLimitCondition、PersonalLimitCondition) */
        receiveConfig: unknown;
        /** 使用条件配置：包含conditions数组(ConsumptionLimitCondition) */
        useConfig: unknown;
        /** 领取模式：DAYS_AFTER_RECEIVE领取后X天失效/SPECIFIC_DATE_RANGE指定时间范围 */
        receiveMode: string | string;
        /** 是否限制领取总数 */
        isLimitTotal: boolean;
        /** 领取总数限制（isLimitTotal为true时有效） */
        totalLimit: number;
        /** 剩余可领取数量（isLimitTotal为true时有效） */
        remainingLimit: number;
        startTime: Date | string | string | number | null;
        endTime: Date | string | string | number | null;
        expiredDays: number | null;
        /** 状态：ACTIVE启用/INACTIVE禁用/EXPIRED已过期 */
        status: string | string | string;
        /** 创建时间 */
        createdAt: Date | string | string | number;
        /** 更新时间 */
        updatedAt: Date | string | string | number;
        /** 最高优惠金额（分） */
        discountLimit: number;
        minAmount: number | null;
      };
    }[];
  } | null;
};

export type PrmtCouponReceiveCenterDetailUsingGetResponses = {
  200: PrmtCouponReceiveCenterDetailUsingGetResponse;
};

export type PrmtCouponReceiveCenterListUsingGetParams = {
  /** 页码 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 状态筛选 */
  status?: string | string | string;
};

export type PrmtCouponReceiveCenterListUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    data: {
      /** 领券中心ID */
      id: string;
      /** 活动标题 */
      title: string;
      description: string | null;
      cover: string | null;
      /** 开始时间 */
      startTime: Date | string | string | number;
      /** 结束时间 */
      endTime: Date | string | string | number;
      /** 状态 */
      status: string | string | string;
      /** 创建时间 */
      createdAt: Date | string | string | number;
      /** 更新时间 */
      updatedAt: Date | string | string | number;
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 总页数 */
    totalPages: number;
  } | null;
};

export type PrmtCouponReceiveCenterListUsingGetResponses = {
  200: PrmtCouponReceiveCenterListUsingGetResponse;
};

export type PrmtCouponUserAvailableCountUsingGetResponse = {
  success: boolean;
  message?: string;
  data: number | null;
};

export type PrmtCouponUserAvailableCountUsingGetResponses = {
  200: PrmtCouponUserAvailableCountUsingGetResponse;
};

export type PrmtCouponUserAvailableUsingGetParams = {
  /** 限制返回数量 */
  limit?: number;
};

export type PrmtCouponUserAvailableUsingGetResponse = {
  success: boolean;
  message?: string;
  data:
    | {
        /** 用户优惠券ID */
        id: string;
        /** 使用条件配置：包含conditions数组(ConsumptionLimitCondition) */
        useConfig: unknown;
        startTime: Date | string | string | number | null;
        endTime: Date | string | string | number | null;
        /** 优惠券名称 */
        couponName: string;
        /** 优惠券类型 */
        couponType: string | string;
        /** 优惠值：折扣券为折扣比例(如85表示8.5折)，代金券为减免金额(分) */
        couponValue: number;
        /** 最高优惠金额（分） */
        maxDiscountAmount: number;
        minAmount: number | null;
        limitDesc: string | null;
        bizType: string | null;
        orderId: string | null;
        orderDescription: string | null;
        /** 用户ID */
        userId: string;
        /** 优惠券ID */
        couponId: string;
        useDate: Date | string | string | number | null;
        /** 创建时间 */
        createdAt: Date | string | string | number;
        /** 状态：UNUSED未使用/USED已使用 */
        status: string | string;
      }[]
    | null;
};

export type PrmtCouponUserAvailableUsingGetResponses = {
  200: PrmtCouponUserAvailableUsingGetResponse;
};

export type PrmtCouponUserBatchReceiveUsingPostBody = {
  /** 优惠券ID数组 */
  couponIds: string[];
  /** 领券中心ID */
  receiveCenterId?: string;
};

export type PrmtCouponUserBatchReceiveUsingPostResponse = {
  success: boolean;
  message?: string;
  data: {
    results: {
      /** 优惠券ID */
      couponId: string;
      /** 是否领取成功 */
      success: boolean;
      /** 领取结果消息 */
      message: string;
      /** 用户优惠券ID（成功时返回） */
      userCouponId?: string;
      /** 失败原因代码 */
      reason?: string;
    }[];
    /** 成功领取数量 */
    successCount: number;
    /** 失败数量 */
    failCount: number;
  } | null;
};

export type PrmtCouponUserBatchReceiveUsingPostResponses = {
  200: PrmtCouponUserBatchReceiveUsingPostResponse;
};

export type PrmtCouponUserCouponCancelUsingPostBody = {
  /** 优惠券订单ID */
  id: string;
};

export type PrmtCouponUserCouponCancelUsingPostResponse = {
  success: boolean;
  message?: string;
};

export type PrmtCouponUserCouponCancelUsingPostResponses = {
  200: PrmtCouponUserCouponCancelUsingPostResponse;
};

export type PrmtCouponUserCouponCanPayUsingGetParams = {
  /** 优惠券订单ID */
  id: string;
};

export type PrmtCouponUserCouponCanPayUsingGetResponse = {
  success: boolean;
  message?: string;
  /** 是否可以支付 */
  data: boolean;
};

export type PrmtCouponUserCouponCanPayUsingGetResponses = {
  200: PrmtCouponUserCouponCanPayUsingGetResponse;
};

export type PrmtCouponUserCouponDetailUsingGetParams = {
  /** 用户优惠券ID */
  userCouponId: string;
};

export type PrmtCouponUserCouponDetailUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    /** 用户优惠券ID */
    id: string;
    /** 使用条件配置：包含conditions数组(ConsumptionLimitCondition) */
    useConfig: unknown;
    startTime: Date | string | string | number | null;
    endTime: Date | string | string | number | null;
    /** 优惠券名称 */
    couponName: string;
    /** 优惠券类型 */
    couponType: string | string;
    /** 优惠值：折扣券为折扣比例(如85表示8.5折)，代金券为减免金额(分) */
    couponValue: number;
    /** 最高优惠金额（分） */
    maxDiscountAmount: number;
    minAmount: number | null;
    limitDesc: string | null;
    bizType: string | null;
    orderId: string | null;
    orderDescription: string | null;
    /** 用户ID */
    userId: string;
    /** 优惠券ID */
    couponId: string;
    useDate: Date | string | string | number | null;
    /** 创建时间 */
    createdAt: Date | string | string | number;
    /** 状态：UNUSED未使用/USED已使用 */
    status: string | string;
  } | null;
};

export type PrmtCouponUserCouponDetailUsingGetResponses = {
  200: PrmtCouponUserCouponDetailUsingGetResponse;
};

export type PrmtCouponUserListUsingGetParams = {
  /** 页码 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 状态筛选 */
  status?: string | string | string;
};

export type PrmtCouponUserListUsingGetResponse = {
  success: boolean;
  message?: string;
  data: {
    data: {
      /** 用户优惠券ID */
      id: string;
      /** 使用条件配置：包含conditions数组(ConsumptionLimitCondition) */
      useConfig: unknown;
      startTime: Date | string | string | number | null;
      endTime: Date | string | string | number | null;
      /** 优惠券名称 */
      couponName: string;
      /** 优惠券类型 */
      couponType: string | string;
      /** 优惠值：折扣券为折扣比例(如85表示8.5折)，代金券为减免金额(分) */
      couponValue: number;
      /** 最高优惠金额（分） */
      maxDiscountAmount: number;
      minAmount: number | null;
      limitDesc: string | null;
      bizType: string | null;
      orderId: string | null;
      orderDescription: string | null;
      /** 用户ID */
      userId: string;
      /** 优惠券ID */
      couponId: string;
      useDate: Date | string | string | number | null;
      /** 创建时间 */
      createdAt: Date | string | string | number;
      /** 状态：UNUSED未使用/USED已使用 */
      status: string | string;
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 总页数 */
    totalPages: number;
  } | null;
};

export type PrmtCouponUserListUsingGetResponses = {
  200: PrmtCouponUserListUsingGetResponse;
};

export type PrmtCouponUserReceiveUsingPostBody = {
  /** 优惠券ID */
  couponId: string;
  /** 领券中心ID */
  receiveCenterId?: string;
};

export type PrmtCouponUserReceiveUsingPostResponse = {
  success: boolean;
  message?: string;
  data: string | null;
};

export type PrmtCouponUserReceiveUsingPostResponses = {
  200: PrmtCouponUserReceiveUsingPostResponse;
};

export type ProfileUsingGetResponse = {
  code: number;
  data: {
    /** 用户ID */
    id: string;
    /** 用户名 */
    name: string;
    email: string | null;
    phone: string | null;
    avatar: string | null;
    nickname: string | null;
    /** 用户名 */
    username: string;
  };
};

export type ProfileUsingGetResponses = {
  200: ProfileUsingGetResponse;
};

export type ProfileUsingPostBody = {
  /** 昵称 */
  nickname?: string;
  /** 头像 */
  avatar?: string;
};

export type ProfileUsingPostResponse = {
  /** 状态码 */
  code: number;
};

export type ProfileUsingPostResponses = {
  200: ProfileUsingPostResponse;
};

export type ReceiveCreateOrderUsingPostBody = {
  /** 收款码ID */
  qrCodeId: string;
  /** 订单金额(分) */
  amount: number;
  /** 备注 */
  remark?: string;
};

export type ReceiveCreateOrderUsingPostResponse = {
  success: boolean;
  message: string;
  data?: {
    /** 订单ID */
    id?: string;
    /** 订单号 */
    orderNo?: string;
    /** 收款码ID */
    qrCodeId?: string;
    /** 用户ID */
    userId?: string;
    /** 订单金额(分) */
    amount?: number;
    payAmount?: number | null;
    /** 订单状态 */
    status?: string;
    payMethod?: string | null;
    payerInfo?: string | null;
    remark?: string | null;
    expiredAt?: string | null;
    paidAt?: string | null;
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
  };
};

export type ReceiveCreateOrderUsingPostResponses = {
  200: ReceiveCreateOrderUsingPostResponse;
};

export type ReceiveCreateTemporaryOrderUsingPostBody = {
  /** 收款码ID */
  qrCodeId: string;
  /** 订单金额(分) */
  amount: number;
  /** 备注 */
  remark?: string;
};

export type ReceiveCreateTemporaryOrderUsingPostResponse = {
  success: boolean;
  message: string;
  data?: {
    /** 业务订单ID */
    businessOrderId?: string;
    /** 业务类型 */
    businessType?: string;
    /** 订单金额(分) */
    amount?: number;
    /** 货币 */
    currency?: string;
    /** 订单标题 */
    subject?: string;
    description?: string | null;
    /** 订单ID */
    id?: string;
  };
};

export type ReceiveCreateTemporaryOrderUsingPostResponses = {
  200: ReceiveCreateTemporaryOrderUsingPostResponse;
};

export type ReceiveGetQrcodeIdUsingGetParams = {
  /** 收款码ID */
  id: string;
};

export type ReceiveGetQrcodeIdUsingGetResponse = {
  success: boolean;
  message: string;
  data?: {
    /** 收款码ID */
    id?: string;
    /** 收款码名称 */
    name?: string;
    /** 收款码logo */
    logo?: string;
    /** 收款码描述 */
    description?: string;
    /** 支付渠道ID */
    channelId?: string;
    /** 小程序页面路径 */
    path?: string;
    qrcode?: string | null;
    /** 状态 */
    status?: string;
    /** 创建时间 */
    createdAt?: Date | string | string | number;
    /** 更新时间 */
    updatedAt?: Date | string | string | number;
  };
};

export type ReceiveGetQrcodeIdUsingGetResponses = {
  200: ReceiveGetQrcodeIdUsingGetResponse;
};

export type ReceiveWechatPayUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 支付渠道ID */
  channelId: string;
  /** 微信openid */
  openid: string;
};

export type ReceiveWechatPayUsingPostResponse = {
  success: boolean;
  message: string;
  data?: {
    /** 时间戳 */
    timeStamp?: string;
    /** 随机字符串 */
    nonceStr?: string;
    /** 订单详情扩展字符串 */
    package?: string;
    /** 签名方式 */
    signType?: string;
    /** 签名 */
    paySign?: string;
    /** 小程序appId */
    appId?: string;
  };
};

export type ReceiveWechatPayUsingPostResponses = {
  200: ReceiveWechatPayUsingPostResponse;
};

export type ShopAfterserviceApplyUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 售后原因 */
  reason: string;
  /** 售后原因详情 */
  reasonDetail?: string;
  /** 退货类型：RETURN_GOODS-退货, REFUND_ONLY-仅退款 */
  shopReturnType: string | string;
  /** 售后商品明细 */
  items: {
    /** 订单项ID */
    orderItemId: string;
    /** 退货数量 */
    quantity: number;
    /** 单项退货原因 */
    reason: string;
  }[];
};

export type ShopAfterserviceApplyUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 退货申请ID */
    id: string;
    /** 订单ID */
    orderId: string;
    /** 订单号 */
    orderNo: string;
    /** 退货单号 */
    returnNo: string;
    /** 退款金额（分） */
    refundAmount: number;
    /** 退货状态 */
    status: string;
    /** 退货类型 */
    type: string;
    /** 是否需要退货 */
    needReturn: boolean;
    returnAddress: {
      /** 地址标题 */
      title: string;
      /** 省份 */
      province: string;
      /** 城市 */
      city: string;
      /** 区县 */
      district: string;
      /** 详细地址 */
      address: string;
      /** 联系人 */
      contact: string;
      /** 联系电话 */
      phone: string;
      location: {
        /** 纬度 */
        lat: number;
        /** 经度 */
        lng: number;
      };
    };
    /** 退货商品明细 */
    items: {
      /** 订单项ID */
      orderItemId: string;
      /** SKU编码 */
      skuCode: string;
      /** 商品名称 */
      productName: string;
      /** 商品图片 */
      productImage?: string;
      /** 退货数量 */
      quantity: number;
      /** 单价（分） */
      unitPrice: number;
      /** 退款金额（分） */
      refundAmount: number;
    }[];
    /** 创建时间 */
    createdAt: string;
  } | null;
};

export type ShopAfterserviceApplyUsingPostResponses = {
  200: ShopAfterserviceApplyUsingPostResponse;
};

export type ShopAfterserviceCancelIdUsingPostParams = {
  /** 退货申请ID */
  id: string;
};

export type ShopAfterserviceCancelIdUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  /** 响应数据 */
  data: null;
};

export type ShopAfterserviceCancelIdUsingPostResponses = {
  200: ShopAfterserviceCancelIdUsingPostResponse;
};

export type ShopAfterserviceConfigUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 自动关闭订单时间(小时) */
    autoCloseOrderHours: number;
    /** 自动确认收货时间(天) */
    autoConfirmReceiptDays: number;
    /** 订单申请退款时间(天) */
    refundApplyDays: number;
    /** 运费计算方式 */
    shippingFeeCalculation: string | string;
    /** 是否开启商城自提功能 */
    enableSelfPickup: boolean;
    /** 退货原因列表 */
    returnReason: string[];
    afterSaleAddress: {
      title: string | null;
      province: string | null;
      city: string | null;
      district: string | null;
      street: string | null;
      address: string | null;
      contact: string | null;
      phone: string | null;
      location: {
        /** 纬度 */
        lat: number;
        /** 经度 */
        lng: number;
      } | null;
    } | null;
    /** 是否开启消费领积分 */
    enablePointReward: boolean;
    /** 消费领积分的比例(百分比) */
    pointRewardRate: number;
  } | null;
};

export type ShopAfterserviceConfigUsingGetResponses = {
  200: ShopAfterserviceConfigUsingGetResponse;
};

export type ShopAfterserviceDetailIdUsingGetParams = {
  /** 退货申请ID */
  id: string;
};

export type ShopAfterserviceDetailIdUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 退货申请ID */
    id: string;
    /** 订单ID */
    orderId: string;
    /** 订单号 */
    orderNo: string;
    /** 退货单号 */
    returnNo: string;
    /** 退款金额（分） */
    refundAmount: number;
    /** 退货状态 */
    status: string;
    /** 退货原因 */
    reason: string;
    /** 退货物流单号 */
    trackingNumber?: string;
    /** 退货原因详情 */
    reasonDetail?: string;
    /** 退货类型 */
    type: string;
    /** 是否需要退货 */
    needReturn: boolean;
    /** 联系信息 */
    contactInfo: {
      /** 省份 */
      province: string;
      /** 城市 */
      city: string;
      /** 区县 */
      district: string;
      /** 详细地址 */
      street: string;
      /** 联系人姓名 */
      contactName: string;
      /** 联系人电话 */
      contactPhone: string;
    };
    /** 处理时间 */
    processedAt?: string;
    /** 处理人 */
    processedBy?: string;
    /** 处理备注 */
    processNote?: string;
    /** 退货商品明细 */
    items: {
      /** 订单项ID */
      orderItemId: string;
      /** SKU编码 */
      skuCode: string;
      /** 商品名称 */
      productName: string;
      /** 商品图片 */
      productImage?: string;
      /** 退货数量 */
      quantity: number;
      /** 单价（分） */
      unitPrice: number;
      /** 退款金额（分） */
      refundAmount: number;
    }[];
    /** 创建时间 */
    createdAt: string;
  } | null;
};

export type ShopAfterserviceDetailIdUsingGetResponses = {
  200: ShopAfterserviceDetailIdUsingGetResponse;
};

export type ShopAfterserviceListUsingGetParams = {
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 商品名称 */
  productName?: string;
  /** 订单编号 */
  orderNo?: string;
  /** 退货单号 */
  returnNo?: string;
  /** 开始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
};

export type ShopAfterserviceListUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    items: {
      /** 退货申请ID */
      id: string;
      /** 订单ID */
      orderId: string;
      /** 订单号 */
      orderNo: string;
      /** 退货单号 */
      returnNo: string;
      /** 退款金额（分） */
      refundAmount: number;
      /** 退货状态 */
      status: string;
      /** 退货类型 */
      type: string;
      /** 是否需要退货 */
      needReturn: boolean;
      /** 退货商品明细 */
      items: {
        /** 订单项ID */
        orderItemId: string;
        /** SKU编码 */
        skuCode: string;
        /** 商品名称 */
        productName: string;
        /** 商品图片 */
        productImage?: string;
        /** 退货数量 */
        quantity: number;
        /** 单价（分） */
        unitPrice: number;
        /** 退款金额（分） */
        refundAmount: number;
      }[];
      /** 创建时间 */
      createdAt: string;
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页数量 */
    pageSize: number;
    /** 总页数 */
    totalPages: number;
  } | null;
};

export type ShopAfterserviceListUsingGetResponses = {
  200: ShopAfterserviceListUsingGetResponse;
};

export type ShopAfterserviceReturnAddressUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 地址标题 */
    title: string;
    /** 省份 */
    province: string;
    /** 城市 */
    city: string;
    /** 区县 */
    district: string;
    /** 详细地址 */
    address: string;
    /** 联系人 */
    contact: string;
    /** 联系电话 */
    phone: string;
    location: {
      /** 纬度 */
      lat: number;
      /** 经度 */
      lng: number;
    };
  } | null;
};

export type ShopAfterserviceReturnAddressUsingGetResponses = {
  200: ShopAfterserviceReturnAddressUsingGetResponse;
};

export type ShopAfterserviceTestRefundSuccessUsingPostBody = {
  /** 订单ID */
  id: string;
  /** 退款金额（分） */
  amount: number;
};

export type ShopAfterserviceTestRefundSuccessUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    refundRecord: {
      /** 退款记录ID */
      id: string;
      /** 订单ID */
      orderId: string;
      /** 退款金额 */
      amount: number;
      /** 退款状态 */
      status: string;
      /** 退款原因 */
      reason: string;
      /** 创建时间 */
      createdAt: string;
      /** 更新时间 */
      updatedAt: string;
      /** 响应原始数据 */
      responseRaw: string;
      /** 版本号 */
      version: number;
      /** 完成时间 */
      completedAt: string;
    };
    /** 处理结果 */
    result: unknown;
  } | null;
};

export type ShopAfterserviceTestRefundSuccessUsingPostResponses = {
  200: ShopAfterserviceTestRefundSuccessUsingPostResponse;
};

export type ShopAfterserviceTrackingUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 物流运单号 */
  trackingNumber: string;
};

export type ShopAfterserviceTrackingUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  /** 响应数据 */
  data: null;
};

export type ShopAfterserviceTrackingUsingPostResponses = {
  200: ShopAfterserviceTrackingUsingPostResponse;
};

export type ShopAfterserviceUsingGetResponses = {
  200: unknown;
};

export type ShopOrderBindClerkUsingPostBody = {
  /** 店员ID */
  clerkId: string;
  /** 用户ID */
  userId: string;
};

export type ShopOrderBindClerkUsingPostResponse = {
  success: boolean;
  message: string;
};

export type ShopOrderBindClerkUsingPostResponses = {
  200: ShopOrderBindClerkUsingPostResponse;
};

export type ShopOrderCancelUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 取消原因 */
  reason?: string;
};

export type ShopOrderCancelUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 订单ID */
    id: string;
    /** 订单号 */
    orderNo: string;
    /** 订单状态 */
    status: string;
    cancelReason: string | null;
    /** 更新时间 */
    updatedAt: string;
  } | null;
};

export type ShopOrderCancelUsingPostResponses = {
  200: ShopOrderCancelUsingPostResponse;
};

export type ShopOrderConfirmReceiveUsingPostBody = {
  /** 订单ID */
  orderId: string;
};

export type ShopOrderConfirmReceiveUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 订单ID */
    id: string;
    /** 订单号 */
    orderNo: string;
    /** 订单状态 */
    status: string;
    /** 收货时间 */
    receivedAt?: Date | string | string | number;
  } | null;
};

export type ShopOrderConfirmReceiveUsingPostResponses = {
  200: ShopOrderConfirmReceiveUsingPostResponse;
};

export type ShopOrderDetailIdUsingGetParams = {
  /** 订单ID */
  id: string;
};

export type ShopOrderDetailIdUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 订单ID */
    id: string;
    /** 订单号 */
    orderNo: string;
    shippingAddress: {
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
    } | null;
    billingAddress: unknown | null;
    /** 订单总金额 */
    totalAmount: number;
    /** 运费 */
    shippingFee: number;
    /** 应付金额 */
    paymentAmount: number;
    /** 已付金额 */
    paidAmount: number;
    /** 订单状态 */
    status: string;
    /** 订单类型 */
    orderType: string;
    usedPoint: number | null;
    /** 支付状态 */
    paymentStatus: string;
    /** 收货方式 */
    receiveType: string;
    storeId: string | null;
    verifyStatus: string | null;
    customerNote: string | null;
    cancelReason: string | null;
    /** 创建时间 */
    createdAt: string;
    /** 更新时间 */
    updatedAt: string;
    /** 门店信息 */
    store: {
      /** 门店名称 */
      name: string;
      /** 门店电话 */
      phone: string;
      /** 门店地址 */
      address: string;
      /** 省份 */
      province: string;
      /** 城市 */
      city: string;
      /** 区县 */
      district: string;
      businessHours: string | null;
      /** 纬度 */
      latitude: number;
      /** 经度 */
      longitude: number;
    } | null;
    /** 订单商品项 */
    items: {
      /** 订单项ID */
      id: string;
      /** 订单ID */
      orderId: string;
      /** SPU ID */
      spuId: string;
      /** SKU ID */
      skuId: string;
      /** SKU编码 */
      skuCode: string;
      /** 商品名称 */
      productName: string;
      /** 商品图片 */
      productImage: string | null;
      /** 规格信息 */
      specifications: unknown;
      /** 单价(分) */
      unitPrice: number;
      /** 数量 */
      quantity: number;
      /** 退货数量 */
      refundedQuantity: number;
      /** 小计(分) */
      totalPrice: number;
      /** 版本号 */
      version: number;
      /** 创建时间 */
      createdAt: string;
      /** 更新时间 */
      updatedAt: string;
      /** SPU信息 */
      spu: {
        /** SPU ID */
        id: string;
        /** 商品名称 */
        name: string;
        /** 商品描述 */
        description: string | null;
        /** 分类ID */
        categoryId: string | null;
        /** 品牌名称 */
        brandName: string | null;
        /** 品牌Logo */
        brandLogo: string | null;
        /** SPU状态 */
        status: string;
        /** 商品图片 */
        images: string[];
        /** 创建时间 */
        createdAt: string;
        /** 更新时间 */
        updatedAt: string;
      };
      /** SKU信息 */
      sku: {
        /** SKU ID */
        id: string;
        /** SPU ID */
        spuId: string;
        /** SKU编码 */
        skuCode: string;
        /** 规格组合 */
        specifications: unknown;
        /** 售价(分) */
        price: number;
        /** 原价(分) */
        originalPrice: number | null;
        /** 成本价(分) */
        costPrice: number | null;
        /** 总库存 */
        stockTotal: number;
        /** 预占库存 */
        stockReserved: number;
        /** 累计销量 */
        salesCount: number;
        /** 虚拟销量 */
        virtualSalesCount: number;
        /** SKU状态 */
        status: string;
        /** 重量(克) */
        weight: number | null;
        /** 体积(立方厘米) */
        volume: number | null;
        /** 商品图片URL */
        cover: string | null;
        /** 版本号 */
        version: number;
        /** 创建时间 */
        createdAt: string;
        /** 更新时间 */
        updatedAt: string;
      };
    }[];
    /** 物流信息 */
    shipments: {
      /** 发货单ID */
      id: string;
      /** 关联订单ID */
      orderId: string;
      /** 物流单号 */
      trackingNumber: string | null;
      /** 快递公司代码 */
      carrierCode: string;
      /** 快递公司名称 */
      carrierName: string;
      /** 收货地址 */
      shippingAddress: unknown;
      /** 发货状态 */
      status: string;
      /** 发货时间 */
      shippedAt: string | null;
      /** 预计送达时间 */
      estimatedDelivery: string | null;
      /** 实际送达时间 */
      deliveredAt: string | null;
      /** 发货备注 */
      notes: string | null;
      /** 创建时间 */
      createdAt: string;
      /** 更新时间 */
      updatedAt: string;
      /** 发货商品项 */
      items: {
        /** 发货项ID */
        id: string;
        /** 发货单ID */
        shipmentId: string;
        /** SKU ID */
        skuId: string | null;
        /** SKU编码 */
        skuCode: string;
        /** 商品名称 */
        productName: string;
        /** 发货数量 */
        quantity: number;
        /** 创建时间 */
        createdAt: string;
        /** 更新时间 */
        updatedAt: string;
      }[];
    }[];
    /** 退货信息 */
    returns: {
      /** 退货单ID */
      id: string;
      /** 退货单号 */
      returnNo: string;
      /** 订单号 */
      orderNo: string;
      /** 原订单ID */
      orderId: string;
      /** 客户ID */
      customerId: string;
      /** 退货原因 */
      reason: string;
      /** 退货原因详情 */
      reasonDetail: string | null;
      /** 退货物流单号 */
      trackingNumber: string | null;
      /** 退货类型 */
      type: string;
      /** 退货状态 */
      status: string;
      /** 物流状态 */
      shipmentStatus: string;
      /** 联系信息 */
      contactInfo: unknown | null;
      /** 退款金额(分) */
      refundAmount: number;
      /** 处理时间 */
      processedAt: string | null;
      /** 处理人 */
      processedBy: string | null;
      /** 处理备注 */
      processNote: string | null;
      /** 创建时间 */
      createdAt: string;
      /** 更新时间 */
      updatedAt: string;
      /** 退货商品项 */
      items: {
        /** 退货项ID */
        id: string;
        /** 退货单ID */
        returnId: string;
        /** 订单项ID */
        orderItemId: string;
        /** SKU ID */
        skuId: string | null;
        /** SKU编码 */
        skuCode: string;
        /** 商品名称 */
        productName: string;
        /** 商品图片 */
        productImage: string | null;
        /** 退货数量 */
        quantity: number;
        /** 单价(分) */
        unitPrice: number;
        /** 退款金额(分) */
        refundAmount: number;
        /** 创建时间 */
        createdAt: string;
        /** 更新时间 */
        updatedAt: string;
      }[];
    }[];
  } | null;
};

export type ShopOrderDetailIdUsingGetResponses = {
  200: ShopOrderDetailIdUsingGetResponse;
};

export type ShopOrderIsAllowSelfPickupUsingPostBody = {
  spuIds: string[];
};

export type ShopOrderIsAllowSelfPickupUsingPostResponse = {
  success: boolean;
  message: string;
  data: boolean;
};

export type ShopOrderIsAllowSelfPickupUsingPostResponses = {
  200: ShopOrderIsAllowSelfPickupUsingPostResponse;
};

export type ShopOrderIsClerkUsingGetResponse = {
  success: boolean;
  message: string;
};

export type ShopOrderIsClerkUsingGetResponses = {
  200: ShopOrderIsClerkUsingGetResponse;
};

export type ShopOrderListUsingGetParams = {
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 订单状态 */
  orderStatus?: string;
  /** 支付状态 */
  paymentStatus?: string;
  /** 订单号（模糊查询） */
  orderNo?: string;
  /** 开始日期 */
  startDate?: string;
  /** 结束日期 */
  endDate?: string;
};

export type ShopOrderListUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    items: {
      /** 订单ID */
      id: string;
      /** 订单号 */
      orderNo: string;
      /** 已付金额 */
      paidAmount: number;
      /** 订单总金额 */
      totalAmount: number;
      /** 运费 */
      shippingFee: number;
      /** 应付金额 */
      paymentAmount: number;
      /** 订单状态 */
      status: string;
      /** 收货方式 */
      receiveType: string;
      /** 支付状态 */
      paymentStatus: string;
      /** 创建时间 */
      createdAt: string;
      /** 更新时间 */
      updatedAt: string;
      /** 订单商品项 */
      items: {
        /** 订单项ID */
        id: string;
        /** SPU ID */
        spuId: string;
        /** SKU ID */
        skuId: string;
        /** SKU编码 */
        skuCode: string;
        /** 商品名称 */
        productName: string;
        /** 商品图片 */
        productImage?: string;
        /** 规格信息 */
        specifications: unknown;
        /** 单价(分) */
        unitPrice: number;
        /** 数量 */
        quantity: number;
        /** 小计(分) */
        totalPrice: number;
        /** 创建时间 */
        createdAt: string;
        /** 更新时间 */
        updatedAt: string;
      }[];
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页数量 */
    pageSize: number;
    /** 总页数 */
    totalPages: number;
  } | null;
};

export type ShopOrderListUsingGetResponses = {
  200: ShopOrderListUsingGetResponse;
};

export type ShopOrderPayUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 支付渠道ID */
  channelId: string;
  /** 支付主题/商品名称 */
  subject?: string;
  /** 支付描述 */
  description?: string;
  /** 微信openid */
  openid: string;
};

export type ShopOrderPayUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 商城订单ID */
    orderId: string;
    /** 订单号 */
    orderNo: string;
    /** 支付网关订单ID */
    paymentGatewayOrderId: string;
    /** 支付渠道Id */
    channelId: string;
    /** 支付金额 */
    amount: number;
    /** 支付订单创建时间 */
    createdAt: string;
    /** 支付渠道额外参数 */
    extra?: unknown;
    /** 支付链接 */
    paymentUrl?: string;
    /** 微信小程序支付参数 */
    payParams: {
      /** 微信小程序appId */
      appId: string;
      /** 随机字符串 */
      nonceStr: string;
      /** 订单详情扩展字符串 */
      package: string;
      /** 签名 */
      paySign: string;
      /** 签名方式 */
      signType: string;
      /** 时间戳 */
      timeStamp: string;
    };
  } | null;
};

export type ShopOrderPayUsingPostResponses = {
  200: ShopOrderPayUsingPostResponse;
};

export type ShopOrderPreviewInfoUsingPostBody = {
  /** 商品列表 */
  items: {
    /** SKU ID */
    skuId: string;
    /** 购买数量 */
    quantity: number;
  }[];
};

export type ShopOrderPreviewInfoUsingPostResponse = {
  success: boolean;
  message?: string;
  data:
    | {
        /** 商品类型 */
        bizType: string;
        /** 商品ID */
        productId: string;
        category: {
          /** 分类ID */
          categoryId: string;
          parentId: string | null;
        } | null;
        skuId: string | null;
        /** 价格 */
        price: number;
        /** 数量 */
        quantity: number;
      }[]
    | null;
};

export type ShopOrderPreviewInfoUsingPostResponses = {
  200: ShopOrderPreviewInfoUsingPostResponse;
};

export type ShopOrderPreviewShippingFeeUsingPostBody = {
  /** 商品列表 */
  goodsList: {
    /** SKU ID */
    skuId: string;
    /** 商品数量 */
    quantity: number;
  }[];
  /** 省份 */
  province: string;
  /** 城市 */
  city: string;
  /** 区县 */
  district: string;
};

export type ShopOrderPreviewShippingFeeUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 运费 */
    shippingFee: number;
  } | null;
};

export type ShopOrderPreviewShippingFeeUsingPostResponses = {
  200: ShopOrderPreviewShippingFeeUsingPostResponse;
};

export type ShopOrderSelfPickupPointsUsingGetResponse = {
  success: boolean;
  message: string;
  data: {
    /** 门店ID */
    id: string;
    /** 门店名称 */
    name: string;
    description: string | null;
    /** 联系电话 */
    phone: string;
    /** 门店地址 */
    address: string;
    /** 省 */
    province: string;
    /** 市 */
    city: string;
    /** 区县 */
    district: string;
    /** 纬度 */
    latitude: number;
    /** 经度 */
    longitude: number;
    businessHours: string | null;
    /** 门店状态 */
    status: string;
    /** 门店图片 */
    images: unknown;
    /** 门店标签 */
    tags: unknown;
    /** 创建时间 */
    createdAt: Date | string | string | number;
    /** 更新时间 */
    updatedAt: Date | string | string | number;
  }[];
};

export type ShopOrderSelfPickupPointsUsingGetResponses = {
  200: ShopOrderSelfPickupPointsUsingGetResponse;
};

export type ShopOrderSelfPickupUsingPostBody = {
  /** 订单商品项 */
  items: {
    /** SKU ID */
    skuId: string;
    /** 购买数量 */
    quantity: number;
  }[];
  /** 门店ID */
  storeId: string;
  /** 用户优惠券ID */
  userCouponId?: string;
};

export type ShopOrderSelfPickupUsingPostResponse = {
  /** 是否成功 */
  success: boolean;
  /** 响应消息 */
  message: string;
  data: string | null;
};

export type ShopOrderSelfPickupUsingPostResponses = {
  200: ShopOrderSelfPickupUsingPostResponse;
};

export type ShopOrderSubmitUsingPostBody = {
  /** 订单商品项 */
  items: {
    /** SKU ID */
    skuId: string;
    /** 购买数量 */
    quantity: number;
  }[];
  /** 收货地址信息 */
  shippingAddress: {
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
  /** 用户优惠券ID */
  userCouponId?: string;
};

export type ShopOrderSubmitUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 订单ID */
    id: string;
    /** 订单号 */
    orderNo: string;
    /** 订单总金额 */
    totalAmount: number;
    /** 运费 */
    shippingFee: number;
    /** 应付金额 */
    paymentAmount: number;
    /** 订单状态 */
    status: string;
    /** 支付状态 */
    paymentStatus: string;
    /** 创建时间 */
    createdAt: string;
  } | null;
};

export type ShopOrderSubmitUsingPostResponses = {
  200: ShopOrderSubmitUsingPostResponse;
};

export type ShopOrderVerifyCodeUsingGetParams = {
  /** 订单ID */
  orderId: string;
};

export type ShopOrderVerifyCodeUsingGetResponse = {
  success: boolean;
  message: string;
  data: {
    qrContent: string;
    qrImageUrl: string;
    verifyCode: string;
    expiresAt: string;
  } | null;
};

export type ShopOrderVerifyCodeUsingGetResponses = {
  200: ShopOrderVerifyCodeUsingGetResponse;
};

export type ShopOrderVerifyStatusUsingGetParams = {
  /** 订单ID */
  orderId: string;
};

export type ShopOrderVerifyStatusUsingGetResponse = {
  success: boolean;
  message?: string;
  data: string | string | null;
};

export type ShopOrderVerifyStatusUsingGetResponses = {
  200: ShopOrderVerifyStatusUsingGetResponse;
};

export type ShopOrderVerifyUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 店员ID */
  userId: string;
};

export type ShopOrderVerifyUsingPostResponse = {
  success: boolean;
  message: string;
  data: string;
};

export type ShopOrderVerifyUsingPostResponses = {
  200: ShopOrderVerifyUsingPostResponse;
};

export type ShopProductCategoriesUsingGetResponse = {
  code: number;
  message: string;
  /** 商品分类列表 */
  data: {
    items: {
      /** 分类ID */
      id: string;
      /** 分类名称 */
      name: string;
      /** 父分类ID */
      parentId: string | null;
      /** 分类层级 */
      level: number;
      /** 排序 */
      sortOrder: number;
      /** 状态 */
      status: string;
      /** 图标 */
      icon: string | null;
      /** 创建时间 */
      createdAt: string;
      /** 更新时间 */
      updatedAt: string;
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页条数 */
    pageSize: number;
    /** 总页数 */
    totalPages: number;
  } | null;
};

export type ShopProductCategoriesUsingGetResponses = {
  200: ShopProductCategoriesUsingGetResponse;
};

export type ShopProductDetailUsingGetParams = {
  /** 商品ID */
  id: string;
};

export type ShopProductDetailUsingGetResponse = {
  code: number;
  message: string;
  /** 商品详情 */
  data: {
    items: {
      /** SPU ID */
      id: string;
      /** 商品名称 */
      name: string;
      content: string | null;
      labels: string[] | null;
      /** 折扣活动描述 */
      actxDesc: string;
      /** 商品描述 */
      description: string | null;
      /** 所属分类ID */
      categoryId: string | null;
      /** 品牌名称 */
      brandName: string | null;
      /** 品牌Logo */
      brandLogo: string | null;
      /** SPU状态 */
      status: string;
      /** 商品原价 */
      originalPrice: number;
      /** 物流模板ID */
      shippingTemplateId: string | null;
      /** 运费(分) */
      shippingFee: number;
      /** 库存类型 */
      stockType: string;
      /** 商品属性 */
      attributes: unknown;
      /** 虚拟销量 */
      virtualSalesCount: number;
      /** 商品规格 */
      specifications: unknown;
      /** 商品图片 */
      images: string[];
      /** 商品分类 */
      category: {
        /** 分类ID */
        id: string;
        /** 分类名称 */
        name: string;
        /** 父分类ID */
        parentId: string | null;
        /** 分类层级 */
        level: number;
        /** 排序 */
        sortOrder: number;
        /** 状态 */
        status: string;
        /** 图标 */
        icon: string | null;
        /** 创建时间 */
        createdAt: string;
        /** 更新时间 */
        updatedAt: string;
      } | null;
      /** 商品规格 */
      skus: {
        /** SKU ID */
        id: string;
        /** 所属SPU ID */
        spuId: string;
        /** SKU编码 */
        skuCode: string;
        /** 规格组合 */
        specifications: unknown;
        /** 售价(分) */
        price: number;
        /** 原价(分) */
        originalPrice: number | null;
        /** 成本价(分) */
        costPrice: number | null;
        /** 总库存 */
        stockTotal: number;
        /** 预占库存 */
        stockReserved: number;
        /** 累计销量 */
        salesCount: number;
        /** 虚拟销量 */
        virtualSalesCount: number;
        /** SKU状态 */
        status: string;
        /** 重量(克) */
        weight: number | null;
        /** 体积(立方厘米) */
        volume: number | null;
        /** 商品图片URL */
        cover: string | null;
        /** 版本号 */
        version: number;
        /** 创建时间 */
        createdAt: string;
        /** 更新时间 */
        updatedAt: string;
      }[];
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页条数 */
    pageSize: number;
    /** 总页数 */
    totalPages: number;
  } | null;
};

export type ShopProductDetailUsingGetResponses = {
  200: ShopProductDetailUsingGetResponse;
};

export type ShopProductSearchUsingGetParams = {
  /** 搜索关键字 */
  keyword?: string;
  /** 商品分类ID */
  categoryId?: string;
  /** 最低价格 */
  minPrice?: string;
  /** 最高价格 */
  maxPrice?: string;
  /** 页码 */
  page?: string;
  /** 每页条数 */
  pageSize?: string;
  /** 标签，匹配商品标签数组中的任意一个 */
  label?: string;
  /** SKU ID列表，多个ID用逗号分隔 */
  skuIds?: string;
  /** 商品ID列表 */
  ids?: string[];
  /** 用户ID */
  userId?: string;
};

export type ShopProductSearchUsingGetResponse = {
  code: number;
  message: string;
  /** 商品列表 */
  data: {
    items: {
      /** SPU ID */
      id: string;
      /** 商品名称 */
      name: string;
      description: string | null;
      /** 所属分类ID */
      categoryId: string | null;
      /** 商品状态 */
      status: string;
      /** 商品图片 */
      images: string[];
      /** 商品分类 */
      category: {
        /** 分类ID */
        id: string;
        /** 分类名称 */
        name: string;
        /** 父分类ID */
        parentId: string | null;
        /** 分类层级 */
        level: number;
        /** 排序 */
        sortOrder: number;
        /** 状态 */
        status: string;
        /** 图标 */
        icon: string | null;
        /** 创建时间 */
        createdAt: string;
        /** 更新时间 */
        updatedAt: string;
      } | null;
      /** 商品价格 */
      price: number;
      /** 商品原价 */
      originalPrice: number;
      /** 虚拟销量 */
      virtualSalesCount: number;
      /** 商品规格 */
      skus: {
        /** SKU ID */
        id: string;
        /** 所属SPU ID */
        spuId: string;
        /** SKU编码 */
        skuCode: string;
        /** 规格组合 */
        specifications: unknown;
        /** 售价(分) */
        price: number;
        /** 原价(分) */
        originalPrice: number | null;
        /** 成本价(分) */
        costPrice: number | null;
        /** 总库存 */
        stockTotal: number;
        /** 预占库存 */
        stockReserved: number;
        /** 累计销量 */
        salesCount: number;
        /** 虚拟销量 */
        virtualSalesCount: number;
        /** SKU状态 */
        status: string;
        /** 重量(克) */
        weight: number | null;
        /** 体积(立方厘米) */
        volume: number | null;
        /** 商品图片URL */
        cover: string | null;
        /** 版本号 */
        version: number;
        /** 创建时间 */
        createdAt: string;
        /** 更新时间 */
        updatedAt: string;
      }[];
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页条数 */
    pageSize: number;
    /** 总页数 */
    totalPages: number;
  } | null;
};

export type ShopProductSearchUsingGetResponses = {
  200: ShopProductSearchUsingGetResponse;
};

export type ShopReviewCreateUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 订单项ID */
  orderItemId: string;
  /** SPU ID */
  spuId: string;
  /** SKU ID */
  skuId: string;
  /** 客户头像 */
  customerAvatar?: string;
  /** 客户昵称 */
  customerNickname?: string;
  /** 评分（1-5） */
  rating: number;
  /** 评价内容 */
  content?: string;
  images: string[];
  /** 是否匿名评价 */
  isAnonymous?: string | string;
};

export type ShopReviewCreateUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 评价ID */
    id: string;
    orderId: string | null;
    orderItemId: string | null;
    /** SPU ID */
    spuId: string;
    skuId: string | null;
    /** 客户ID */
    customerId: string;
    /** 评分 */
    rating: number;
    /** 评价内容 */
    content: string | null;
    images: string[];
    /** 是否匿名 */
    isAnonymous: boolean;
    /** 创建时间 */
    createdAt: string;
  } | null;
};

export type ShopReviewCreateUsingPostResponses = {
  200: ShopReviewCreateUsingPostResponse;
};

export type ShopReviewIdUsingGetParams = {
  /** 评价ID */
  id: string;
};

export type ShopReviewIdUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 评价ID */
    id: string;
    skuId: string | null;
    /** SPU ID */
    spuId: string;
    customerAvatar: string | null;
    customerNickname: string | null;
    /** 评分 */
    rating: number;
    content: string | null;
    images: string[];
    /** 是否匿名 */
    isAnonymous: boolean;
    replyContent: string | null;
    repliedAt: string | null;
    repliedBy: string | null;
    /** 创建时间 */
    createdAt: string;
    spuName: string | null;
    spuImages: string[];
    skuSpecifications: string | null;
  } | null;
};

export type ShopReviewIdUsingGetResponses = {
  200: ShopReviewIdUsingGetResponse;
};

export type ShopReviewListUsingGetParams = {
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** SPU ID */
  spuId?: string;
  /** 评分（1-5） */
  rating?: number;
  /** 评价状态（pending/approved/rejected） */
  status?: string;
  /** 是否匿名（true/false） */
  isAnonymous?: string;
  /** 开始日期 */
  startDate?: string;
  /** 结束日期 */
  endDate?: string;
};

export type ShopReviewListUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    items: {
      /** 评价ID */
      id: string;
      customerAvatar: string | null;
      customerNickname: string | null;
      /** 评分 */
      rating: number;
      content: string | null;
      images: string[];
      /** 是否匿名 */
      isAnonymous: boolean;
      replyContent: string | null;
      repliedAt: string | null;
      repliedBy: string | null;
      /** 创建时间 */
      createdAt: string;
    }[];
    /** 总记录数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页数量 */
    pageSize: number;
    /** 总页数 */
    totalPages: number;
  } | null;
};

export type ShopReviewListUsingGetResponses = {
  200: ShopReviewListUsingGetResponse;
};

export type ShopShipTrackTypeOrderNoUsingGetParams = {
  /** 订单号 */
  orderNo: string;
  /** 快递公司编码 */
  type: string;
};

export type ShopShipTrackTypeOrderNoUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data: {
    /** 运单编号 */
    number: string;
    /** 快递公司名称 */
    expName: string;
    /** 快递公司网站 */
    expSite: string;
    /** 快递公司电话 */
    expPhone: string;
    /** 投递状态 */
    deliveryStatus: string;
    /** 是否签收 */
    isSign: boolean;
    /** 快递员 */
    courier: string;
    /** 快递员电话 */
    courierPhone: string;
    /** 最新更新时间 */
    updateTime: string;
    /** 配送耗时 */
    takeTime: string;
    /** 快递公司编码 */
    type: string;
    /** 物流轨迹 */
    traces: {
      /** 时间 */
      time: string;
      /** 状态 */
      status: string;
    }[];
  };
};

export type ShopShipTrackTypeOrderNoUsingGetResponses = {
  200: ShopShipTrackTypeOrderNoUsingGetResponse;
};

export type ShopUserAddressIdOpenApiDefaultUsingPostParams = {
  /** 地址ID */
  id: string;
};

export type ShopUserAddressIdOpenApiDefaultUsingPostResponses = {
  200:
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
      };
};

export type ShopUserAddressIdOpenApiDeleteUsingPostParams = {
  /** 地址ID */
  id: string;
};

export type ShopUserAddressIdOpenApiDeleteUsingPostResponses = {
  200:
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
      };
};

export type ShopUserAddressUsingGetResponses = {
  200:
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
      };
};

export type ShopUserAddressUsingPostBody = {
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
};

export type ShopUserAddressUsingPostResponses = {
  200:
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
      };
};

export type ShopUserGoodsCollectAddUsingPostBody = {
  /** 商品SPU ID */
  spuId: string;
};

export type ShopUserGoodsCollectAddUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data?:
    | {
        /** 收藏ID */
        id: string;
        /** 用户ID */
        userId: string;
        /** 商品SPU ID */
        spuId: string;
        /** 收藏时间 */
        createdAt: string;
        /** 更新时间 */
        updatedAt: string;
      }
    | {
        /** 已存在的收藏ID */
        collectId: string;
        /** 是否已收藏 */
        isCollected: boolean;
      };
};

export type ShopUserGoodsCollectAddUsingPostResponses = {
  200: ShopUserGoodsCollectAddUsingPostResponse;
};

export type ShopUserGoodsCollectBatchStatusUsingPostBody = {
  /** 商品SPU ID列表 */
  spuIds: string[];
};

export type ShopUserGoodsCollectBatchStatusUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data?: {
    /** 商品SPU ID */
    spuId: string;
    /** 是否已收藏 */
    isCollected: boolean;
    /** 收藏ID，未收藏时为null */
    collectId?: string;
  }[];
};

export type ShopUserGoodsCollectBatchStatusUsingPostResponses = {
  200: ShopUserGoodsCollectBatchStatusUsingPostResponse;
};

export type ShopUserGoodsCollectListUsingGetParams = {
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 搜索关键字 */
  keyword?: string;
};

export type ShopUserGoodsCollectListUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data?: {
    items?: {
      /** 收藏ID */
      id: string;
      /** 用户ID */
      userId: string;
      /** 商品SPU ID */
      spuId: string;
      /** 收藏时间 */
      createdAt: string;
      /** 更新时间 */
      updatedAt: string;
      /** SPU信息 */
      spu: {
        /** SPU ID */
        id: string;
        /** 商品名称 */
        name: string;
        /** 商品描述 */
        description?: string;
        /** 分类ID */
        categoryId?: string;
        /** 品牌名称 */
        brandName?: string;
        /** 品牌Logo */
        brandLogo?: string;
        /** SPU状态 */
        status: string;
        /** 商品图片 */
        images: string[];
        /** 创建时间 */
        createdAt: string;
        /** 更新时间 */
        updatedAt: string;
      };
    }[];
    /** 总记录数 */
    total?: number;
    /** 当前页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 总页数 */
    totalPages?: number;
  };
};

export type ShopUserGoodsCollectListUsingGetResponses = {
  200: ShopUserGoodsCollectListUsingGetResponse;
};

export type ShopUserGoodsCollectRemoveUsingPostBody = {
  /** 商品SPU ID */
  spuId: string;
};

export type ShopUserGoodsCollectRemoveUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data?: {
    /** 商品SPU ID */
    spuId?: string;
    /** 是否已收藏 */
    isCollected?: boolean;
  };
};

export type ShopUserGoodsCollectRemoveUsingPostResponses = {
  200: ShopUserGoodsCollectRemoveUsingPostResponse;
};

export type ShopUserGoodsCollectStatusSpuIdUsingGetParams = {
  /** 商品SPU ID */
  spuId: string;
};

export type ShopUserGoodsCollectStatusSpuIdUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  data?: {
    /** 商品SPU ID */
    spuId?: string;
    /** 是否已收藏 */
    isCollected?: boolean;
    /** 收藏ID，未收藏时为null */
    collectId?: string;
  };
};

export type ShopUserGoodsCollectStatusSpuIdUsingGetResponses = {
  200: ShopUserGoodsCollectStatusSpuIdUsingGetResponse;
};

export type SystemConfigFileLinkUploadUsingPostBody = {
  url: string;
};

export type SystemConfigFileLinkUploadUsingPostResponse = {
  url: string;
};

export type SystemConfigFileLinkUploadUsingPostResponses = {
  200: SystemConfigFileLinkUploadUsingPostResponse;
};

export type SystemConfigOssUploadLinkUsingGetParams = {
  fileName: string;
};

export type SystemConfigOssUploadLinkUsingGetResponse = {
  code: number;
  data: {
    url: string;
    fields: unknown;
    cdnUrl: string;
  };
};

export type SystemConfigOssUploadLinkUsingGetResponses = {
  200: SystemConfigOssUploadLinkUsingGetResponse;
};

export type TicketConfigUsingGetResponse = {
  code: number;
  message: string;
  data: {
    activityStartNotificationTemplateId: string;
    homeShareTitle: string;
    homeShareDesc: string;
    homeShareImage: string;
  };
};

export type TicketConfigUsingGetResponses = {
  200: TicketConfigUsingGetResponse;
};

export type TicketEmployBindUsingPostBody = {
  /** 绑定令牌 */
  token: string;
};

export type TicketEmployBindUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
};

export type TicketEmployBindUsingPostResponses = {
  200: TicketEmployBindUsingPostResponse;
};

export type TicketEmployCheckUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 是否为核销员 */
    isEmployee: boolean;
    /** 用户名 */
    userName: string;
  };
};

export type TicketEmployCheckUsingGetResponses = {
  200: TicketEmployCheckUsingGetResponse;
};

export type TicketEmployOrderItemsUsingGetParams = {
  /** 订单ID */
  orderId: string;
};

export type TicketEmployOrderItemsUsingGetResponses = {
  200: {
    /** 订单项ID */
    id: string;
    /** 订单项状态 */
    status: string;
  }[];
};

export type TicketEmployOrderItemsV2UsingGetParams = {
  /** 订单ID */
  orderId: string;
};

export type TicketEmployOrderItemsV2UsingGetResponse = {
  orderItemIds: {
    /** 订单项ID */
    id: string;
    /** 订单项状态 */
    status: string;
  }[];
  /** 场次开始时间 */
  eventStartTime: string;
  /** 场次结束时间 */
  eventEndTime: string;
  /** 场次名称 */
  eventName: string;
  /** 场次ID */
  eventId: string;
  contractName: string | null;
  contractPhone: string | null;
};

export type TicketEmployOrderItemsV2UsingGetResponses = {
  200: TicketEmployOrderItemsV2UsingGetResponse;
};

export type TicketEmployVerifyRecordsUsingGetParams = {
  /** 开始时间(YYYY-MM-DD HH:mm) */
  startTime?: string;
  /** 结束时间(YYYY-MM-DD HH:mm) */
  endTime?: string;
};

export type TicketEmployVerifyRecordsUsingGetResponses = {
  200: {
    /** 核销记录ID */
    id: string;
    /** 核销时间 */
    createdAt: Date | string | string | number;
    order: {
      /** 订单ID */
      id: string;
      customerName: string | null;
      customerPhone: string | null;
      showTime: {
        /** 场次开始时间 */
        startTime: Date | string | string | number;
        /** 场次结束时间 */
        endTime: Date | string | string | number;
        event: {
          /** 场次名称 */
          title: string;
        };
      };
    };
    orderItems: {
      /** 订单项ID */
      id: string;
      areaName: string | null;
    }[];
  }[];
};

export type TicketEmployVerifyUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 要核销的订单项ID列表 */
  orderItemIds: string[];
};

export type TicketEmployVerifyUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 核销是否成功 */
    success: boolean;
    /** 已核销的订单项数量 */
    verifiedCount: number;
    /** 订单是否全部完成 */
    allCompleted: boolean;
  };
};

export type TicketEmployVerifyUsingPostResponses = {
  200: TicketEmployVerifyUsingPostResponse;
};

export type TicketEventDetailIdUsingGetParams = {
  /** 演出ID */
  id: string;
};

export type TicketEventDetailIdUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 演出ID */
    id: string;
    /** 演出标题 */
    title: string;
    /** 演出封面/主图 */
    cover: string;
    /** 视频链接 */
    videoUrl: string;
    /** 演出图片列表 */
    images: string[];
    /** 演出标签 */
    tags: string[];
    area: {
      /** 省份 */
      province: string;
      /** 城市 */
      city: string;
      /** 区县 */
      district: string;
    };
    /** 详细地址 */
    address: string;
    /** 完整地址 */
    fullAddress: string;
    location: {
      /** 纬度 */
      lat: number;
      /** 经度 */
      lng: number;
    };
    /** 联系方式 */
    contact: string;
    /** 演出描述 */
    description: string;
    /** 报名须知 */
    registrationNotice: string;
    refundRules: {
      /** 规则名称 */
      name: string;
      /** 规则描述 */
      description?: string;
      rules: {
        /** 提前天数 */
        daysBeforeStart: number;
        /** 罚款百分比 */
        penaltyPercentage: number;
      }[];
      /** 默认罚款百分比 */
      defaultPenaltyPercentage: number;
      /** 创建时间 */
      createdAt: string;
      /** 更新时间 */
      updatedAt: string;
    };
    showTimes: {
      /** 场次ID */
      id: string;
      dateRange: {
        /** 开始时间 */
        startTime: string;
        /** 结束时间 */
        endTime: string;
      };
      /** 预定截止时间 */
      reserveEndTime: string;
      /** 座位行数 */
      seatRowCount: number;
      /** 座位列数 */
      seatColCount: number;
      disabledSeats: {
        /** 行索引 */
        rowIndex: number;
        /** 列索引 */
        colIndex: number;
      }[];
      /** 座位类型 */
      seatType: string | string;
      areas: {
        /** 区域ID */
        id: string;
        /** 区域名称 */
        name: string;
        seats: {
          /** 行索引 */
          rowIndex: number;
          /** 列索引 */
          colIndex: number;
        }[];
        /** 区域颜色 */
        color: string;
        /** 区域价格 */
        price: number;
      }[];
      seats: {
        /** 行索引 */
        rowIndex: number;
        /** 列索引 */
        colIndex: number;
        /** 座位状态 */
        status: string | string;
      }[];
      prices: {
        /** 规格ID */
        id: string;
        /** 规格名称 */
        ticketType: string;
        /** 规格票价 */
        price: number;
        /** 规格票数 */
        seatCount: number;
        /** 规格库存 */
        seatTotalStock: number;
      }[];
    }[];
  };
};

export type TicketEventDetailIdUsingGetResponses = {
  200: TicketEventDetailIdUsingGetResponse;
};

export type TicketEventFavoriteIdUsingPostParams = {
  /** 演出ID */
  id: string;
};

export type TicketEventFavoriteIdUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
};

export type TicketEventFavoriteIdUsingPostResponses = {
  200: TicketEventFavoriteIdUsingPostResponse;
};

export type TicketEventFavoriteStatusIdUsingGetParams = {
  /** 演出ID */
  id: string;
};

export type TicketEventFavoriteStatusIdUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 是否已收藏 */
    isFavorited: boolean;
  };
};

export type TicketEventFavoriteStatusIdUsingGetResponses = {
  200: TicketEventFavoriteStatusIdUsingGetResponse;
};

export type TicketEventFavoritesUsingGetParams = {
  /** 排序字段 */
  sortBy?: string | string | string;
  /** 排序方向 */
  sortOrder?: string | string;
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 演出类型 */
  type?: string | string | string;
  /** 搜索关键词 */
  keyword?: string;
};

export type TicketEventFavoritesUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    data: {
      /** 演出ID */
      id: string;
      /** 演出图片 */
      image: string;
      /** 演出标题 */
      title: string;
      /** 演出标签 */
      tags: string[];
      location: {
        /** 省份 */
        province: string;
        /** 城市 */
        city: string;
        /** 区县 */
        district: string;
        /** 详细地址 */
        address: string;
      };
      dateRange: {
        /** 开始日期 */
        startDate: string;
        /** 结束日期 */
        endDate: string;
      };
      price: {
        /** 最低价格 */
        min: number;
        /** 最高价格 */
        max: number;
        /** 货币单位 */
        currency: string;
      };
    }[];
    /** 总数 */
    total: number;
    /** 当前页 */
    page: number;
    /** 每页数量 */
    pageSize: number;
  };
};

export type TicketEventFavoritesUsingGetResponses = {
  200: TicketEventFavoritesUsingGetResponse;
};

export type TicketEventListUsingGetParams = {
  /** 排序字段 */
  sortBy?: string | string | string;
  /** 排序方向 */
  sortOrder?: string | string;
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 演出类型 */
  type?: string | string | string;
  /** 搜索关键词 */
  keyword?: string;
  /** 开始日期 */
  startDate?: string;
  /** 结束日期 */
  endDate?: string;
};

export type TicketEventListUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    data: {
      /** 演出ID */
      id: string;
      /** 演出图片 */
      image: string;
      /** 演出标题 */
      title: string;
      /** 演出标签 */
      tags: string[];
      location: {
        /** 省份 */
        province: string;
        /** 城市 */
        city: string;
        /** 区县 */
        district: string;
        /** 详细地址 */
        address: string;
      };
      dateRange: {
        /** 开始日期 */
        startDate: string;
        /** 结束日期 */
        endDate: string;
      };
      price: {
        /** 最低价格 */
        min: number;
        /** 最高价格 */
        max: number;
        /** 货币单位 */
        currency: string;
      };
    }[];
    /** 总数 */
    total: number;
    /** 当前页 */
    page: number;
    /** 每页数量 */
    pageSize: number;
  };
};

export type TicketEventListUsingGetResponses = {
  200: TicketEventListUsingGetResponse;
};

export type TicketEventTypeTypeUsingGetParams = {
  /** 演出类型 */
  type: string | string | string;
  /** 排序字段 */
  sortBy?: string | string | string;
  /** 排序方向 */
  sortOrder?: string | string;
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 搜索关键词 */
  keyword?: string;
};

export type TicketEventTypeTypeUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    data: {
      /** 演出ID */
      id: string;
      /** 演出图片 */
      image: string;
      /** 演出标题 */
      title: string;
      /** 演出标签 */
      tags: string[];
      location: {
        /** 省份 */
        province: string;
        /** 城市 */
        city: string;
        /** 区县 */
        district: string;
        /** 详细地址 */
        address: string;
      };
      dateRange: {
        /** 开始日期 */
        startDate: string;
        /** 结束日期 */
        endDate: string;
      };
      price: {
        /** 最低价格 */
        min: number;
        /** 最高价格 */
        max: number;
        /** 货币单位 */
        currency: string;
      };
    }[];
    /** 总数 */
    total: number;
    /** 当前页 */
    page: number;
    /** 每页数量 */
    pageSize: number;
  };
};

export type TicketEventTypeTypeUsingGetResponses = {
  200: TicketEventTypeTypeUsingGetResponse;
};

export type TicketOrderCancelIdUsingPostBody = {
  /** 操作人ID */
  operatorId?: string;
};

export type TicketOrderCancelIdUsingPostParams = {
  /** 订单ID */
  id: string;
};

export type TicketOrderCancelIdUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 订单ID */
    id: string;
    /** 订单号 */
    orderNo: string;
    /** 订单状态 */
    status: string;
    /** 取消时间 */
    cancelledAt: string;
  };
};

export type TicketOrderCancelIdUsingPostResponses = {
  200: TicketOrderCancelIdUsingPostResponse;
};

export type TicketOrderCreateUsingPostBody = {
  /** 场次ID */
  showTimeId: string;
  seats?: {
    /** 行索引 */
    rowIndex: number;
    /** 列索引 */
    colIndex: number;
  }[];
  /** 座位数量 */
  seatCount: number;
  /** 客户姓名 */
  customerName: string;
  /** 客户电话 */
  customerPhone: string;
  /** 选择的票价ID */
  priceId: string;
  /** 用户优惠券ID */
  userCouponId?: string;
  /** 折扣金额 */
  discountAmount?: number;
  /** 备注 */
  remarks?: string;
};

export type TicketOrderCreateUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 订单ID */
    id: string;
    /** 订单号 */
    orderNo: string;
    /** 客户ID */
    customerId: string;
    /** 客户姓名 */
    customerName: string;
    /** 客户电话 */
    customerPhone: string;
    /** 场次ID */
    showTimeId: string;
    /** 演出ID */
    eventId: string;
    /** 总金额 */
    totalAmount: number;
    /** 实际支付金额 */
    paymentAmount: number;
    /** 折扣金额 */
    discountAmount: number;
    /** 订单状态 */
    status: string;
    /** 支付状态 */
    paymentStatus: string;
    /** 客户备注 */
    customerNote: string;
    /** 创建时间 */
    createdAt: string;
    items: {
      /** 订单项ID */
      id: string;
      /** 座位信息 */
      seat?: unknown;
      /** 区域名称 */
      areaName?: string;
      /** 票种类型 */
      ticketType: string;
      /** 票价 */
      price: number;
      /** 实际价格 */
      actualPrice: number;
      /** 订单项状态 */
      status: string;
    }[];
  };
};

export type TicketOrderCreateUsingPostResponses = {
  200: TicketOrderCreateUsingPostResponse;
};

export type TicketOrderDetailIdUsingGetParams = {
  /** 订单ID */
  id: string;
};

export type TicketOrderDetailIdUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 订单ID */
    id: string;
    /** 订单号 */
    orderNo: string;
    /** 客户ID */
    customerId: string;
    /** 客户姓名 */
    customerName: string;
    /** 客户电话 */
    customerPhone: string;
    /** 场次ID */
    showTimeId: string;
    /** 演出ID */
    eventId: string;
    /** 总金额 */
    totalAmount: number;
    /** 实际支付金额 */
    paymentAmount: number;
    /** 折扣金额 */
    discountAmount: number;
    /** 已支付金额 */
    paidAmount: number;
    /** 已退款金额 */
    refundedAmount: number;
    /** 订单状态 */
    status: string;
    /** 支付状态 */
    paymentStatus: string;
    /** 客户备注 */
    customerNote: string;
    /** 支付订单ID */
    paymentOrderId: string;
    /** 创建时间 */
    createdAt: string;
    /** 支付时间 */
    paidAt: string;
    /** 取消时间 */
    cancelledAt: string;
    /** 版本号 */
    version: number;
    showTime: {
      /** 场次ID */
      id: string;
      /** 开始时间 */
      startTime: string;
      /** 结束时间 */
      endTime: string;
      /** 预约开始时间 */
      reserveStartTime: string;
      /** 预约结束时间 */
      reserveEndTime: string;
      /** 座位行数 */
      seatRowCount: number;
      /** 座位列数 */
      seatColCount: number;
      /** 座位类型 */
      seatType: string;
    };
    event: {
      /** 演出ID */
      id: string;
      /** 演出标题 */
      title: string;
      /** 演出图片 */
      image: string;
      /** 演出描述 */
      description?: string;
      location: {
        /** 纬度 */
        lat: number;
        /** 经度 */
        lng: number;
      };
      /** 演出地址 */
      address?: string;
      area: {
        /** 省份 */
        province: string;
        /** 城市 */
        city: string;
        /** 区县 */
        district: string;
      };
      /** 演出地址全称 */
      fullAddress?: string;
      /** 演出联系人 */
      contact?: string;
    } | null;
    items: {
      /** 订单项ID */
      id: string;
      seat: {
        /** 行 */
        rowIndex: number;
        /** 列 */
        colIndex: number;
      };
      /** 区域ID */
      areaId?: string;
      /** 区域名称 */
      areaName?: string;
      /** 票种类型 */
      ticketType: string;
      /** 票价 */
      price: number;
      /** 实际价格 */
      actualPrice: number;
      /** 已退款金额 */
      refundedAmount: number;
      /** 订单项状态 */
      status: string;
      showTimePrice: {
        /** 场次价格ID */
        id: string;
        /** 票种类型 */
        ticketType?: string;
        /** 价格 */
        price: number;
        /** 座位总库存 */
        seatTotalStock: number;
        /** 座位锁定库存 */
        seatLockedStock: number;
      };
      area: {
        /** 区域ID */
        id: string;
        /** 区域名称 */
        name: string;
        /** 区域颜色 */
        color?: string;
      };
    }[];
    refunds: {
      /** 退款申请ID */
      id: string;
      /** 申请退款金额 */
      requestAmount: number;
      /** 实际退款金额 */
      actualAmount?: number;
      /** 退款状态 */
      status: string;
      /** 退款类型 */
      refundType?: string;
      /** 退款原因类型 */
      reasonType: string;
      /** 退款原因详情 */
      reasonDetail?: string;
      /** 拒绝原因 */
      rejectReason?: string;
      /** 创建时间 */
      createdAt: string;
      /** 处理时间 */
      processedAt?: string;
      /** 完成时间 */
      completedAt?: string;
      /** 退款交易号 */
      refundTradeNo?: string;
      items: {
        /** 退款项ID */
        id: string;
        /** 订单项ID */
        orderItemId: string;
        /** 退款金额 */
        amount?: number;
      }[];
    }[];
    refundPolicy: {
      /** 退款规则ID */
      id: string;
      /** 退款规则名称 */
      name: string;
      rules: {
        /** 提前天数 */
        daysBeforeStart: number;
        /** 违约金百分比 */
        penaltyPercentage: number;
      }[];
      /** 默认违约金百分比 */
      defaultPenaltyPercentage: number;
    };
  };
};

export type TicketOrderDetailIdUsingGetResponses = {
  200: TicketOrderDetailIdUsingGetResponse;
};

export type TicketOrderListUsingGetParams = {
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 订单状态数组 */
  status?: (
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
  )[];
  /** 支付状态 */
  paymentStatus?: string | string | string;
  /** 搜索关键词（订单号、客户姓名、客户电话） */
  keyword?: string;
  /** 客户ID */
  customerId?: string;
  /** 开始日期 */
  startDate?: Date | string | string | number;
  /** 结束日期 */
  endDate?: Date | string | string | number;
  /** 排序字段 */
  sortBy?: string | string | string;
  /** 排序方向 */
  sortOrder?: string | string;
};

export type TicketOrderListUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    data: {
      /** 订单ID */
      id: string;
      /** 订单号 */
      orderNo: string;
      /** 客户ID */
      customerId: string;
      /** 客户姓名 */
      customerName: string;
      /** 客户电话 */
      customerPhone: string;
      /** 场次ID */
      showTimeId: string;
      /** 演出ID */
      eventId: string;
      /** 演出标题 */
      eventTitle: string;
      /** 演出图片 */
      eventImage: string;
      /** 演出封面 */
      eventCover: string;
      /** 总金额 */
      totalAmount: number;
      /** 实际支付金额 */
      paymentAmount: number;
      /** 折扣金额 */
      discountAmount: number;
      /** 已支付金额 */
      paidAmount: number;
      /** 已退款金额 */
      refundedAmount: number;
      /** 订单状态 */
      status: string;
      /** 支付状态 */
      paymentStatus: string;
      /** 订单项数量 */
      itemCount: number;
      /** 创建时间 */
      createdAt: string;
      showTime: {
        /** 场次开始时间 */
        startTime: string;
        /** 场次结束时间 */
        endTime: string;
      };
      items: {
        /** 订单项ID */
        id: string;
        /** 票种类型 */
        ticketType: string;
        /** 订单项状态 */
        status: string;
        showTimePrice: {
          /** 票价ID */
          id: string;
          /** 票种类型 */
          ticketType: string;
          /** 票价 */
          price: number;
          /** 座位总库存 */
          seatTotalStock: number;
          /** 座位锁定库存 */
          seatLockedStock: number;
        };
      }[];
    }[];
    /** 总数 */
    total: number;
    /** 当前页 */
    page: number;
    /** 每页数量 */
    pageSize: number;
    /** 总页数 */
    totalPages: number;
  };
};

export type TicketOrderListUsingGetResponses = {
  200: TicketOrderListUsingGetResponse;
};

export type TicketOrderPaymentSignUsingPostBody = {
  /** 订单ID */
  orderId: string;
};

export type TicketOrderPaymentSignUsingPostResponse = {
  code: number;
  data?: {
    /** 创建时间 */
    createdAt?: string;
    extra: {
      /** 交易号 */
      tradeNo: string;
      /** 原始数据 */
      raw: unknown;
    };
    payParams: {
      /** 小程序appId */
      appId: string;
      /** 时间戳 */
      timeStamp: string;
      /** 随机字符串 */
      nonceStr: string;
      /** 订单详情扩展字符串 */
      package: string;
      /** 签名方式 */
      signType: string;
      /** 签名 */
      paySign: string;
    };
  };
  /** 错误信息 */
  error?: string;
};

export type TicketOrderPaymentSignUsingPostResponses = {
  200: TicketOrderPaymentSignUsingPostResponse;
};

export type TicketOrderPaymentSuccessUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 支付金额 */
  amount: number;
  /** 支付订单ID */
  paymentOrderId: string;
};

export type TicketOrderPaymentSuccessUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 订单ID */
    id: string;
    /** 订单号 */
    orderNo: string;
    /** 订单状态 */
    status: string;
    /** 支付状态 */
    paymentStatus: string;
    /** 已支付金额 */
    paidAmount: number;
    /** 支付时间 */
    paidAt: string;
  };
};

export type TicketOrderPaymentSuccessUsingPostResponses = {
  200: TicketOrderPaymentSuccessUsingPostResponse;
};

export type TicketOrderRefundApplyUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 订单项ID列表 */
  orderItemIds: string[];
  /** 退款原因类型 */
  reasonType: string | string | string | string;
  /** 退款原因详情 */
  reasonDetail?: string;
  /** 申请退款金额（可选，不填则按订单项总金额申请） */
  requestAmount?: number;
};

export type TicketOrderRefundApplyUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 退款申请ID */
    id: string;
    /** 订单ID */
    orderId: string;
    /** 客户ID */
    customerId: string;
    /** 申请退款金额 */
    requestAmount: number;
    /** 退款原因类型 */
    reasonType: string;
    /** 退款原因详情 */
    reasonDetail: string;
    /** 退款状态 */
    status: string;
    /** 创建时间 */
    createdAt: string;
  };
};

export type TicketOrderRefundApplyUsingPostResponses = {
  200: TicketOrderRefundApplyUsingPostResponse;
};

export type TicketOrderRefundAutoUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 订单项ID列表 */
  orderItemIds: string[];
  /** 退款原因类型 */
  reasonType: string | string | string | string;
  /** 退款原因详情 */
  reasonDetail?: string;
  /** 退款金额 */
  refundAmount: number;
  /** 退款时间 */
  refundTime?: Date | string | string | number;
};

export type TicketOrderRefundAutoUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 退款申请ID */
    id: string;
    /** 订单ID */
    orderId: string;
    /** 申请退款金额 */
    requestAmount: number;
    /** 实际退款金额 */
    actualAmount: number;
    /** 退款状态 */
    status: string;
    /** 退款类型 */
    refundType: string;
  };
};

export type TicketOrderRefundAutoUsingPostResponses = {
  200: TicketOrderRefundAutoUsingPostResponse;
};

export type TicketOrderRefundDetailIdUsingGetParams = {
  /** 退款申请ID */
  id: string;
};

export type TicketOrderRefundDetailIdUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 退款申请ID */
    id: string;
    /** 订单ID */
    orderId: string;
    /** 客户ID */
    customerId: string;
    /** 申请退款金额 */
    requestAmount: number;
    /** 实际退款金额 */
    actualAmount: number;
    /** 退款类型 */
    refundType: string;
    /** 退款状态 */
    status: string;
    /** 退款原因类型 */
    reasonType: string;
    /** 退款原因详情 */
    reasonDetail: string;
    /** 拒绝原因 */
    rejectReason: string;
    /** 申请时间 */
    requestedAt: string;
    /** 处理时间 */
    processedAt: string;
    /** 处理人ID */
    processedBy: string;
    /** 完成时间 */
    completedAt: string;
    /** 退款方式 */
    refundMethod: string;
    /** 退款交易号 */
    refundTradeNo: string;
    /** 创建时间 */
    createdAt: string;
    /** 更新时间 */
    updatedAt: string;
    order: {
      /** 订单ID */
      id: string;
      /** 订单号 */
      orderNo: string;
      /** 客户ID */
      customerId: string;
      /** 客户姓名 */
      customerName: string;
      /** 客户电话 */
      customerPhone: string;
      /** 场次ID */
      showTimeId: string;
      /** 演出ID */
      eventId: string;
      /** 总金额 */
      totalAmount: number;
      /** 实际支付金额 */
      paymentAmount: number;
      /** 折扣金额 */
      discountAmount: number;
      /** 已支付金额 */
      paidAmount: number;
      /** 订单状态 */
      status: string;
      /** 支付状态 */
      paymentStatus: string;
      /** 客户备注 */
      customerNote?: string;
      /** 支付订单ID */
      paymentOrderId?: string;
      /** 创建时间 */
      createdAt: string;
      /** 支付时间 */
      paidAt?: string;
      showTime: {
        /** 场次ID */
        id: string;
        /** 开始时间 */
        startTime: string;
        /** 结束时间 */
        endTime: string;
        /** 预约开始时间 */
        reserveStartTime: string;
        /** 预约结束时间 */
        reserveEndTime: string;
        /** 座位行数 */
        seatRowCount: number;
        /** 座位列数 */
        seatColCount: number;
        /** 座位类型 */
        seatType: string;
      };
      event: {
        /** 演出ID */
        id: string;
        /** 演出标题 */
        title: string;
        /** 演出图片 */
        image: string;
        /** 演出描述 */
        description?: string;
        location: {
          /** 纬度 */
          lat: number;
          /** 经度 */
          lng: number;
        };
        /** 演出地址 */
        address?: string;
        area: {
          /** 省份 */
          province: string;
          /** 城市 */
          city: string;
          /** 区县 */
          district: string;
        };
        /** 演出地址全称 */
        fullAddress?: string;
        /** 演出联系人 */
        contact?: string;
        /** 演出封面 */
        cover?: string;
      };
    };
    items: {
      /** 退款项ID */
      id: string;
      /** 订单项ID */
      orderItemId: string;
      /** 票据ID */
      ticketId?: string;
      /** 退款金额 */
      amount?: number;
      /** 创建时间 */
      createdAt: string;
      orderItem: {
        /** 订单项ID */
        id: string;
        seat: {
          /** 行 */
          rowIndex: number;
          /** 列 */
          colIndex: number;
        };
        /** 区域ID */
        areaId?: string;
        /** 区域名称 */
        areaName?: string;
        /** 票种类型 */
        ticketType: string;
        /** 票价 */
        price: number;
        /** 实际价格 */
        actualPrice: number;
        /** 已退款金额 */
        refundedAmount: number;
        /** 订单项状态 */
        status: string;
        showTimePrice: {
          /** 场次价格ID */
          id: string;
          /** 票种类型 */
          ticketType?: string;
          /** 价格 */
          price: number;
          /** 座位总库存 */
          seatTotalStock: number;
          /** 座位锁定库存 */
          seatLockedStock: number;
        };
        area: {
          /** 区域ID */
          id: string;
          /** 区域名称 */
          name: string;
          /** 区域颜色 */
          color?: string;
        };
      };
    }[];
  };
};

export type TicketOrderRefundDetailIdUsingGetResponses = {
  200: TicketOrderRefundDetailIdUsingGetResponse;
};

export type TicketOrderRefundListUsingGetParams = {
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 退款状态数组 */
  status?: (string | string | string | string | string)[];
  /** 退款类型 */
  refundType?: string | string;
  /** 退款原因类型 */
  reasonType?: string | string | string | string;
  /** 订单ID */
  orderId?: string;
  /** 订单号 */
  orderNo?: string;
  /** 开始日期 */
  startDate?: Date | string | string | number;
  /** 结束日期 */
  endDate?: Date | string | string | number;
  /** 排序字段 */
  sortBy?: string | string | string | string;
  /** 排序方向 */
  sortOrder?: string | string;
};

export type TicketOrderRefundListUsingGetResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    data: {
      /** 退款申请ID */
      id: string;
      /** 订单ID */
      orderId: string;
      /** 客户ID */
      customerId: string;
      /** 申请退款金额 */
      requestAmount: number;
      /** 实际退款金额 */
      actualAmount?: number;
      /** 退款类型 */
      refundType?: string;
      /** 退款状态 */
      status: string;
      /** 退款原因类型 */
      reasonType: string;
      /** 退款原因详情 */
      reasonDetail?: string;
      /** 拒绝原因 */
      rejectReason?: string;
      /** 创建时间 */
      createdAt: string;
      /** 处理时间 */
      processedAt?: string;
      /** 完成时间 */
      completedAt?: string;
      /** 退款方式 */
      refundMethod?: string;
      /** 退款交易号 */
      refundTradeNo?: string;
      order: {
        /** 订单ID */
        id: string;
        /** 订单号 */
        orderNo: string;
        /** 客户姓名 */
        customerName: string;
        /** 客户电话 */
        customerPhone: string;
        /** 总金额 */
        totalAmount: number;
        /** 支付金额 */
        paymentAmount: number;
        showTime: {
          /** 场次ID */
          id: string;
          /** 开始时间 */
          startTime: string;
          /** 结束时间 */
          endTime: string;
          event: {
            /** 演出ID */
            id: string;
            /** 演出标题 */
            title: string;
            /** 演出图片 */
            image: string;
            /** 演出封面 */
            cover?: string;
          };
        };
      };
      /** 退款项数量 */
      itemCount: number;
      items: {
        /** 退款项ID */
        id: string;
        /** 订单项ID */
        orderItemId: string;
        /** 退款金额 */
        amount?: number;
        orderItem: {
          /** 订单项ID */
          id: string;
          /** 票种类型 */
          ticketType: string;
          /** 票价 */
          price: number;
          /** 实际价格 */
          actualPrice: number;
          /** 座位信息 */
          seat?: unknown;
          /** 区域名称 */
          areaName?: string;
        };
      }[];
    }[];
    /** 总数 */
    total: number;
    /** 当前页 */
    page: number;
    /** 每页数量 */
    pageSize: number;
    /** 总页数 */
    totalPages: number;
  };
};

export type TicketOrderRefundListUsingGetResponses = {
  200: TicketOrderRefundListUsingGetResponse;
};

export type TicketOrderRefundProcessUsingPostBody = {
  /** 退款申请ID */
  refundId: string;
  /** 是否批准 */
  approved: boolean;
  /** 操作人ID */
  operatorId: string;
  /** 实际退款金额 */
  actualAmount?: number;
  /** 拒绝原因 */
  rejectReason?: string;
};

export type TicketOrderRefundProcessUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data?: {
    /** 退款申请ID */
    id?: string;
    /** 退款状态 */
    status?: string;
    /** 实际退款金额 */
    actualAmount?: number;
    /** 处理时间 */
    processedAt?: string;
    /** 处理人ID */
    processedBy?: string;
    /** 拒绝原因 */
    rejectReason?: string;
  };
};

export type TicketOrderRefundProcessUsingPostResponses = {
  200: TicketOrderRefundProcessUsingPostResponse;
};

export type TicketOrderVerifyUsingPostBody = {
  /** 订单ID */
  orderId: string;
  /** 要核销的订单项ID列表 */
  orderItemIds: string[];
};

export type TicketOrderVerifyUsingPostResponse = {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  data: {
    /** 核销是否成功 */
    success: boolean;
    /** 已核销的订单项数量 */
    verifiedCount: number;
    /** 订单是否全部完成 */
    allCompleted: boolean;
  };
};

export type TicketOrderVerifyUsingPostResponses = {
  200: TicketOrderVerifyUsingPostResponse;
};
