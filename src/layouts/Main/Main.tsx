import {ReactNode, ReactElement} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface MainProps{
    children: ReactNode;
}
export default function Main({ children }: MainProps): ReactElement {
    return (
        <div className='container m-auto font-serif h-[100%]'>
            <Header />
            <main className="mx-auto">
                {children}
            </main>
            <Footer />
        </div>
    )
}