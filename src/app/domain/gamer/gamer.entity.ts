import { SkinEntity } from '../skin';

export type GamerEntity = {
  id: number;
  userName: string;
  deposit: string;
  percentage: string;
  lvl: number;
  skins: SkinEntity[];
  winner?: boolean;
};
