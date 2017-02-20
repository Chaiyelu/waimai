export interface SellerModel {
  name: string;
  description: string;
  deliveryTime: number;
  score: number;
  serviceScore: number;
  foodScore: number;
  rankRate: number;
  minPrice: number;
  deliveryPrice: number;
  ratingCount: number;
  sellCount: number;
  bulletin: string;
  supports:any[];
  avatar: string;
  pics: any[];
  infos: any[]
}
