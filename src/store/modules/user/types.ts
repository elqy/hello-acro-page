// 定义角色类型
export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  name?: string; // 用户名
  avatar?: string; // 头像
  job?: string; // 工作
  organization?: string; // 组织
  location?: string; // 定位
  email?: string; // email
  introduction?: string; // 介绍
  personalWebsite?: string; // 个人网站
  jobName?: string; // 职位名称
  organizationName?: string; // 公司名称
  locationName?: string; // 定位名称
  phone?: string; // 手机号
  registrationDate?: string; // 注册事件
  accountId?: string; // 账号ID
  certification?: number; // 认证
  role: RoleType; // 角色类型
}
