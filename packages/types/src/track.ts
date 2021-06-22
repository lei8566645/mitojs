export enum EActionType {
  // 页面曝光
  PAGE = 'PAGE',
  // 事件埋点
  EVENT = 'EVENT',
  // 区域曝光
  VIEW = 'VIEW',
  // 时长埋点
  DURATION = 'DURATION',
  // 区域曝光的时长埋点
  DURATION_VIEW = 'DURATION_VIEW',
  // 其他埋点类型
  OTHER = 'OTHER'
}

export interface DeviceInfo {
  //网络类型: 4g,3g,5g,wifi
  netType: string
  clientWidth: number
  clientHeight: number
  // 像素密度倍率(计算屏幕实际宽高 可使用此参数： 例 height = clientHeight * radio)
  ratio: number
  // 设备品牌
  brand: string
  // 设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配
  model: string
  // 微信版本号
  version: string
  // 操作系统及版本
  system: string
  // 客户端平台
  platform: string
  // 客户端基础库版本
  SDKVersion: string
}

export interface ITrackBaseParam {
  trackId?: string
  custom?: string | { [prop: string]: string | number | boolean }
  [key: string]: any
}
