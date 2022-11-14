export type ClothesType = {
    id: string;
    article: string;
    price: number;
    size: number;
    offers: boolean;
};

export type ProtoClothes = {
    article: string;
    price: number;
    size: number;
    offers: boolean;
};
export class ClothesModel {
    offers: boolean;
    constructor(article: string, price: number, size: number) {
        this.offers = false;
    }
}
