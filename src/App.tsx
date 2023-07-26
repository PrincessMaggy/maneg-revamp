import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import Home from './pages/Home/Home';
import About from './pages/AboutPage/About';
import Event from './pages/EventPage/Event';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import News from './pages/News';
import NewsDetails from './components/news/NewsDetails';
import ScrollToTop from './utils/ScrollToTop';
import EventDetail from './components/EventCard/EventDetail';
import Products from './pages/Products/products';
import BecomeMember from './pages/BecomeMember/BecomeMember';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/event' element={<Event />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/becomeMember' element={<BecomeMember />} />
                    <Route path='/news/:newsID' element={<NewsDetails />} />
                    <Route path='/event/:eventId' element={<EventDetail />} />
                    <Route path='/products' element={<Products />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
