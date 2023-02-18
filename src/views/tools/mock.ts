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
    type: 'Web',
  },
  {
    id: 2,
    href: 'https://quickref.me/javascript',
    target: '_blank',
    title: 'JavaScript速查表',
    type: 'Web',
  },
  {
    id: 3,
    href: 'https://devhints.io/react/',
    target: '_blank',
    title: 'React.js速查表',
    type: 'Web',
  },
  {
    id: 4,
    href: 'https://cheatography.com/',
    target: '_blank',
    title: 'Cheatography',
    type: 'Web',
  },
  {
    id: 5,
    href: 'https://introcs.cs.princeton.edu/java/11cheatsheet/',
    target: '_blank',
    title: 'Java速查表',
    type: 'Web',
  },
  {
    id: 6,
    href: 'https://overapi.com/',
    target: '_blank',
    title: 'Over API',
    type: 'Web',
  },
  {
    id: 7,
    href: 'https://devhints.io/',
    target: '_blank',
    title: '开发提示',
    type: 'Web',
  },
  {
    id: 8,
    href: 'https://gitsheet.wtf/',
    target: '_blank',
    title: 'gitsheet',
    type: 'Web',
  },
  {
    id: 9,
    href: 'http://simon.html5.org/dump/html5-canvas-cheat-sheet.html',
    target: '_blank',
    title: 'HTML5 Canvas备忘单',
    type: 'Web',
  },
  {
    id: 10,
    href: 'http://easings.net/en#',
    target: '_blank',
    title: '缓动函数',
    type: 'Web',
  },
  {
    id: 11,
    href: 'http://moz.com/learn/seo',
    target: '_blank',
    title: 'SEO备忘录',
    type: 'Web',
  },
  {
    id: 12,
    href: 'http://datav.aliyun.com/portal/graphics-engine',
    target: '_blank',
    title: '阿里DataV',
    type: 'DataV',
  },
  {
    id: 13,
    href: 'https://asset.raykite.com/resource/all',
    target: '_blank',
    title: '光启元',
    type: 'DataV',
  },
  {
    id: 14,
    href: 'https://store.thingjs.com/projects',
    target: '_blank',
    title: '优诺科技',
    type: 'DataV',
  },
  {
    id: 15,
    href: 'http://www.hightopo.cn/demos/index.html',
    target: '_blank',
    title: '图扑软件',
    type: 'DataV',
  },
  {
    id: 16,
    href: 'http://www.digihail.com/case/casesummary.html',
    target: '_blank',
    title: '数字冰雹',
    type: 'DataV',
  },
  {
    id: 17,
    href: 'https://javaguide.cn/',
    target: '_blank',
    title: 'JavaGuide(Java面试+学习指南)',
    type: 'Java',
  },
  {
    id: 18,
    href: 'https://www.bmrs.top/',
    target: '_blank',
    title: '编码人生—CodingLife',
    type: 'Java',
  },
  {
    id: 19,
    href: 'https://icyfenix.cn/',
    target: '_blank',
    title: '凤凰架构-构建可靠的大型分布式系统',
    type: 'Java',
  },
  {
    id: 20,
    href: 'https://xiaolincoding.com/',
    target: '_blank',
    title: '小林 x 图解计算机基础',
    type: 'Java',
  },
  {
    id: 21,
    href: 'https://bugstack.cn/',
    target: '_blank',
    title: 'bugstack 虫洞栈',
    type: 'Java',
  },
  {
    id: 22,
    href: 'https://www.wdbyte.com/',
    target: '_blank',
    title: '未读代码',
    type: 'Java',
  },
  {
    id: 23,
    href: 'https://pdai.tech/',
    target: '_blank',
    title: 'Java 全栈知识体系',
    type: 'Java',
  },
  {
    id: 24,
    href: 'https://tool.lu/',
    target: '_blank',
    title: 'Java 全栈知识体系',
    type: 'Java',
  },
  {
    id: 24,
    href: 'https://hippo4j.cn/',
    target: '_blank',
    title: 'hippo4j-动态可观测线程池框架，为业务系统提高线上运行保障能力',
    type: 'Java',
  },
  {
    id: 25,
    href: 'https://hippo4j.cn/',
    target: '_blank',
    title: 'hippo4j-动态可观测线程池框架，为业务系统提高线上运行保障能力',
    type: 'Java',
  },
  {
    id: 25,
    href: 'https://arthas.aliyun.com/',
    target: '_blank',
    title: 'Arthas-Java 应用诊断利器',
    type: 'Java',
  },
  {
    id: 26,
    href: 'https://www.ssssssss.org/',
    target: '_blank',
    title: 'magic-api接口快速开发框架',
    type: 'Java',
  },
  {
    id: 27,
    href: 'https://gitee.com/zhengqingya/java-workspace',
    target: '_blank',
    title: 'Java学习笔记',
    type: 'Java',
  },
  {
    id: 27,
    href: 'https://gitee.com/open-resource/BigData-Notes',
    target: '_blank',
    title: '大数据学习笔记',
    type: 'Java',
  },
  {
    id: 28,
    href: 'https://gitee.com/log4j/pig',
    target: '_blank',
    title: 'pig-权限框架系统',
    type: 'Java',
  },
  {
    id: 29,
    href: 'https://www.freecodecamp.org/learn/',
    target: '_blank',
    title: 'freecodecamp',
    type: 'Java',
  },
  {
    id: 30,
    href: 'https://iconpark.oceanengine.com/home',
    target: '_blank',
    title: 'iconpark',
    type: 'Web',
  },
  {
    id: 31,
    href: 'https://goframe.org/#all-updates',
    target: '_blank',
    title: 'GoFrame Web框架',
    type: 'Go',
  },
  {
    id: 32,
    href: 'https://go-zero.dev/cn/',
    target: '_blank',
    title: 'go-zero',
    type: 'Go',
  },
  {
    id: 33,
    href: 'https://gogocode.io/zh',
    target: '_blank',
    title: 'gogocode-代码转换从未如此简单',
    type: 'Go',
  },
  {
    id: 34,
    href: 'http://www.ruoyi.vip/',
    target: '_blank',
    title: '若依',
    type: 'Java',
  },
  {
    id: 35,
    href: 'http://www.jeecg.com/',
    target: '_blank',
    title: 'jeecgBoot',
    type: 'Java',
  },
  {
    id: 36,
    href: 'http://www.pearadmin.com/',
    target: '_blank',
    title: 'Pear Admin',
    type: 'Java',
  },
  {
    id: 37,
    href: 'https://www.likeadmin.cn/',
    target: '_blank',
    title: 'likeAdmin',
    type: 'Java',
  },
  {
    id: 38,
    href: 'https://doc.vvbin.cn/',
    target: '_blank',
    title: 'Vben Admin-一个开箱即用的前端框架',
    type: 'Web',
  },
  {
    id: 39,
    href: 'https://doc.ryansu.pro/zh/',
    target: '_blank',
    title: 'Simple Admin',
    type: 'Go',
  },
  {
    id: 40,
    href: 'https://docs.dongtai.io/',
    target: '_blank',
    title: 'DongTai-漏洞扫描工具',
    type: 'Other',
  },
  {
    id: 41,
    href: 'https://docs.dongtai.io/',
    target: '_blank',
    title: 'QingScan',
    type: 'Other',
  },

  // sourcetree
  // nginxconfig.io
  // vant
  // layui mini
  // naive ui
  // Erupt
  // Amis
  // semi Design
  // arcoDesign
  // dataV
  // Hutool
  // Chiner
  // ApiFox
  //
  //
  // Open IM
  // AntV
  // tauri
  // Mitosis
  // mini sandbox
  // DataEase
  // Kratos
  // LiteFlow
  // Sa-Token-Quick-Login
  // Rancher
  // 建木
  // Wx-java
  // jeepay
  //
];

setupMock({
  setup() {
    // Mock.XHR.prototype.withCredentials = true;
    // 用户的工具箱
    Mock.mock(new RegExp('/api/list/tools'), (params: GetParams) => {
      const {
        current = 1,
        pageSize = 10,
        type = '',
      } = qs.parseUrl(params.url).query;
      const p = current as number;
      const ps = pageSize as number;
      const t = type as string;
      const result = toolsDataList
        .filter((item) => item.type === t)
        .slice((p - 1) * ps, p * ps);
      return successResponseWrap({
        list: result,
        total: result.length,
      });
    });
  },
});
