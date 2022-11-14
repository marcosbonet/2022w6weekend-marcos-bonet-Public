import { useClothes } from '../../../redux/hook/useClothes';
import { ClothesType } from '../../../types/types';

export const ItemList = ({ item }: { item: ClothesType }) => {
    const { handleAdd } = useClothes();

    const handleClick = (item: ClothesType) => {
        handleAdd(item);
    };

    return (
        <>
            <li>
                <div>
                    <div>
                        <p>{item.article}</p>
                    </div>

                    <button
                        onClick={() => {
                            handleClick(item);
                        }}
                    >
                        Add
                    </button>
                </div>
            </li>
        </>
    );
};
