import axios from 'axios';
import qs from 'query-string';

export interface ToolsRecord {
  id: number;
  href: string;
  target: '_blank';
  title: string;
  type: 'Web' | 'Java' | 'Python' | 'DataV' | string;
}

export interface ToolsParams extends Partial<ToolsRecord> {
  current: number;
  pageSize: number;
}
export interface ToolsListRes {
  list: ToolsRecord[];
  total: number;
}

export function queryToolsList(params: ToolsParams) {
  return axios.get<ToolsListRes>('/api/list/tools', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}
