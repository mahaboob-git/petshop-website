import {Routes,Route } from 'react-router-dom';
import { Product } from './components/product/Product';
import { Home } from './components/Home/Home';
import {Footer} from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { About } from './components/about/About';
import { Faq } from './components/faq/Faq';




function App() {
  return (
    <>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
      </Routes>
      <Footer/> 
  
    </>
  );
}

export default App;
