import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            {children}
            <div>Clothes</div>
            <Footer></Footer>
        </>
    );
}
