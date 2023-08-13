import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog/Catalog';
import { Header, Footer } from './components';
import './App.scss';

const Cart = lazy(() => import(/* webpackChunkName: "cart" */ './pages/Cart/Cart'));
const NotFound = lazy(() => import(/* webpackChunkName: "notFound" */ './pages/NotFound/NotFound'));

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main id="main">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Catalog />} />
                        <Route
                            path="/cart"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Cart />
                                </Suspense>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <NotFound />
                                </Suspense>
                            }
                        />
                    </Routes>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default App;
