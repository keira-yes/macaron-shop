import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog/Catalog';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
    return (
        <>
            <Header />
            <main id="main">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Catalog />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
