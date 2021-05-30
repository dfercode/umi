import { StringNullableChain } from "lodash";

export type BasicGood = {
  id: string;
  name?: string;
  barcode?: string;
  price?: string;
  num?: string | number;
  amount?: string | number;
};

export type BasicProgress = {
  key: string;
  time: string;
  rate: string;
  status: string;
  operator: string;
  cost: string;
};

export type BasicProfileDataType = {
  basicGoods: BasicGood[];
  basicProgress: BasicProgress[];
};

export type ProjectDetail = {
  projectTitle: string;
  epicLink: string;
  kickoffDate: Date;
  projectDescrition: string;
  talentDescription: string;
  point: number;
  numberOfRecuritment: number;
  status: string;
  projectLeader: string;
  team: string;
  recruiting: boolean;
  requiredTime: [];
  Lablels: string [];

}
