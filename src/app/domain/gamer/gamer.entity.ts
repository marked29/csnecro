import { SkinEntity } from '../skin';

export type GamerEntity = {
  userName: string;
  deposit: string;
  percentage: string;
  lvl: number;
  skins: SkinEntity[];
  winner?: boolean;
};
