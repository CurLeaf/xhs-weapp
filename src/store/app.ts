import { defineStore } from 'pinia'
import { ref } from 'vue'

// 配送方式枚举
export enum ShipMode {
  SELFPICKUP = 'SELFPICKUP', // 自提
  DELIVER = 'DELIVER', // 快递
}

// 地址信息接口（与后端地址数据结构一致）
export interface Address {
  /** 地址ID */
  id: string
  /** 联系人姓名 */
  contactName: string
  /** 联系人电话 */
  contactPhone: string
  /** 省份 */
  province: string
  /** 城市 */
  city: string
  /** 区县 */
  district: string
  /** 详细地址 */
  street: string
  /** 邮编 */
  zipCode?: string
  /** 是否默认地址 */
  isDefault?: boolean
}

export const useAppStore = defineStore(
  'app',
  () => {
    // 用户选择的地址ID
    const userSelectAddressId = ref('')

    // 用户选择的自提点ID
    const selectSelfPickUpSiteId = ref('')

    // 配送方式
    const shipMode = ref<ShipMode>(ShipMode.DELIVER)

    // 用户地址信息
    const address = ref<Address | null>(null)

    // 设置选择的地址ID
    const setUserSelectAddressId = (id: string) => {
      userSelectAddressId.value = id
    }

    // 设置选择的自提点ID
    const setSelectSelfPickUpSiteId = (id: string) => {
      selectSelfPickUpSiteId.value = id
    }

    // 设置配送方式
    const setShipMode = (mode: ShipMode) => {
      shipMode.value = mode
    }

    // 设置地址信息
    const setAddress = (addressInfo: Address | null) => {
      address.value = addressInfo
    }

    // 清除地址信息
    const clearAddress = () => {
      address.value = null
    }

    return {
      userSelectAddressId,
      selectSelfPickUpSiteId,
      shipMode,
      address,
      setUserSelectAddressId,
      setSelectSelfPickUpSiteId,
      setShipMode,
      setAddress,
      clearAddress,
    }
  },
  {
    persist: true,
  },
)
