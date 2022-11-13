import { ClothesType } from '../../../types/types';
import { ItemList } from '../../item.list/item.list';

export function ClothesList({ clothes }: { clothes: ClothesType[] }) {
    return (
        <>
            <h2>Clothes</h2>
            <ul>
                {clothes.map((item: ClothesType) => (
                    <ItemList key={item.id} item={item}></ItemList>
                ))}
            </ul>
        </>
    );
}
