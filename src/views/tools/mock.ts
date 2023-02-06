import Mock from 'mockjs';
import qs from 'query-string';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
import { GetParams } from '@/types/global';

const toolsDataList = [
  {
    id: 1,
    href: 'https://htmlcheatsheet.com/js',
    target: '_blank',
    title: 'HTML、CSS和JavaScript速查表',
  },
  {
    id: 2,
    href: 'https://quickref.me/javascript',
    target: '_blank',
    title: 'JavaScript速查表',
  },
  {
    id: 3,
    href: 'https://devhints.io/react/',
    target: '_blank',
    title: 'React.js速查表',
  },
  {
    id: 4,
    href: 'https://cheatography.com/',
    target: '_blank',
    title: 'Cheatography',
  },
  {
    id: 5,
    href: 'https://introcs.cs.princeton.edu/java/11cheatsheet/',
    target: '_blank',
    title: 'Java速查表',
  },
  {
    id: 6,
    href: 'https://overapi.com/',
    target: '_blank',
    title: 'Over API',
  },
  {
    id: 7,
    href: 'https://devhints.io/',
    target: '_blank',
    title: '开发提示',
  },
  {
    id: 8,
    href: 'https://gitsheet.wtf/',
    target: '_blank',
    title: 'gitsheet',
  },
  {
    id: 9,
    href: 'http://simon.html5.org/dump/html5-canvas-cheat-sheet.html',
    target: '_blank',
    title: 'HTML5 Canvas备忘单',
  },
  {
    id: 10,
    href: 'http://easings.net/en#',
    target: '_blank',
    title: '缓动函数',
  },
  {
    id: 11,
    href: 'http://moz.com/learn/seo',
    target: '_blank',
    title: 'SEO备忘录',
  },
];

setupMock({
  setup() {
    // Mock.XHR.prototype.withCredentials = true;
    // 用户的工具箱
    Mock.mock(new RegExp('/api/list/tools'), (params: GetParams) => {
      const { current = 1, pageSize = 10 } = qs.parseUrl(params.url).query;
      const p = current as number;
      const ps = pageSize as number;
      return successResponseWrap({
        list: toolsDataList.slice((p - 1) * ps, p * ps),
        total: toolsDataList.length,
      });
    });
  },
});
