export type ClothesType = {
    id: string;
    article: string;
    price: number;
    size: number;
    ofert: boolean;
};

export type ProtoClothes = {
    article: string;
    price: number;
    size: number;
    ofert: boolean;
};
export class ClothesModel {
    ofert: boolean;
    constructor(article: string, price: number, size: number) {
        this.ofert = false;
    }
}
