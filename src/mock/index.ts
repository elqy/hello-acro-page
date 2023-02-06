import Mock from 'mockjs';
// 加载用户和消息的mock数据
import './user';
import './message-box';

/**
 * 加载各个模块的mock数据
 */
import '@/views/dashboard/workplace/mock';

import '@/views/dashboard/monitor/mock';

import '@/views/list/card/mock';
import '@/views/list/search-table/mock';

import '@/views/form/step/mock';

import '@/views/profile/basic/mock';

import '@/views/visualization/data-analysis/mock';
import '@/views/visualization/multi-dimension-data-analysis/mock';

import '@/views/user/info/mock';
import '@/views/user/setting/mock';

import '@/views/tools/mock';

Mock.setup({
  timeout: '600-1000',
});
