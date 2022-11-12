import { useClothes } from '../../../hook/useClothes';

export function ClothesList() {
    const { clothes } = useClothes();

    return (
        <>
            <h2>Clothes</h2>
            <div>
                {clothes.map((item) => (
                    <p key={item.id}>{item.article}</p>
                ))}
            </div>
        </>
    );
}
