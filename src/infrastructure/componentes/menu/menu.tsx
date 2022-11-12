import { Link } from 'react-router-dom';
import './menu.css';

export function Menu() {
    const menuOptions = [
        { id: '1', path: 'CategoryOne', label: 'CategoryOne' },
        { id: '2', path: 'CategoryTwo', label: 'CategoryTwo' },
        { id: '3', path: 'Details', label: 'Details' },
        { id: '4', path: 'Sales', label: 'Sales' },
    ];
    return (
        <nav>
            <ul>
                {menuOptions.map((item) => (
                    <li key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
