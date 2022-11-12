import { Navigate, Route, Routes } from 'react-router-dom';

import { CategoryOne } from '../../../features/category.one/category.one';
import { CategoryTwo } from '../../../features/category.two/category.two';
import { Details } from '../../../features/details/details';
import { Sales } from '../../../features/sales/sales';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="CategoryOne" element={<CategoryOne></CategoryOne>}>
                {' '}
                <div>Clothes</div>
            </Route>

            <Route
                path="CategoryTwo"
                element={<CategoryTwo></CategoryTwo>}
            ></Route>

            <Route path="Details" element={<Details></Details>}></Route>
            <Route path="Sales" element={<Sales></Sales>}></Route>
            <Route path="" element={<CategoryOne></CategoryOne>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
