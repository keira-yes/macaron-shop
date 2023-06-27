import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
    return (
        <>
            <Header />
            <main id="main">
                <h1>Hello world</h1>
                <a href="/">Just link</a>
            </main>
            <Footer />
        </>
    );
}

export default App;
