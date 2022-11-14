import { ClothesType } from '../../../types/types';
import { ItemList } from '../item.list/item.list';

export function ClothesList({ clothes }: { clothes: ClothesType[] }) {
    return (
        <>
            <h2>Clothes</h2>
            <ul>
                {Object.values(clothes).map((item: ClothesType, index) => (
                    <ItemList key={index} item={item}></ItemList>
                ))}
            </ul>
        </>
    );
}
