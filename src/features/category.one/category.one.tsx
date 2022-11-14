import { ClothesList } from '../../infrastructure/components/list.clothes/list.clothes';
import { useClothes } from '../../redux/hook/useClothes';

export function CategoryOne() {
    const { clothes } = useClothes();
    return (
        <>
            <div>
                <h1>Category one</h1>
                <ClothesList clothes={clothes}></ClothesList>
            </div>
        </>
    );
}
