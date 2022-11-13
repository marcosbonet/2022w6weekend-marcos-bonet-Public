import { ClothesList } from '../../infrastructure/components/list.clothes/list.clothes';
import { useClothes } from '../../redux/hook/useClothes';

export function CategoryOne() {
    const { clothes } = useClothes();
    return (
        <main>
            <h2>Category One</h2>
            <ClothesList clothes={clothes}></ClothesList>
        </main>
    );
}
