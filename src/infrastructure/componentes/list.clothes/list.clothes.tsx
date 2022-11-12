import { useClothes } from '../../../hook/useClothes';

export function Sample() {
    const { clothes } = useClothes();

    return (
        <>
            {clothes.map((item) => (
                <p key={item.id}>{item.article}</p>
            ))}
        </>
    );
}
