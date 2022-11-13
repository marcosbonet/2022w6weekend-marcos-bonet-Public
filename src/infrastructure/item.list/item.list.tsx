import { Link } from 'react-router-dom';
import { ClothesType } from '../../types/types';

export function ItemList({ item }: { item: ClothesType }) {
    return (
        <li>
            <Link
                to={`/Details/${item.id}`}
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <p>{`product ${item.article}`}</p>
            </Link>
        </li>
    );
}
