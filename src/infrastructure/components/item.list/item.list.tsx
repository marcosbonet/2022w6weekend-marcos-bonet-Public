import { ClothesType } from '../../../types/types';

export const ItemList = ({ item }: { item: ClothesType }) => {
    return (
        <>
            <li>
                <div>
                    <div>
                        <p>{item.article}</p>
                    </div>
                </div>
            </li>
        </>
    );
};
