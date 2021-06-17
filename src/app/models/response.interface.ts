import { MetaInterface } from './meta.interface';
export interface ResponseInterface {
  code: number;
  meta: MetaInterface;
  data: any[];
}
