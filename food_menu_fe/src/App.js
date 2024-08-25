import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderCategory from './Pages/FoodCategory/OrderCategory'
import OderMenu from './Pages/FoodOrder/OderMenu'
import { Route, Routes, BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<OrderCategory/>}></Route>
    <Route path='/order_menu/:category' element={<OderMenu/>}></Route>
    </Routes>
    <div>
    
    
    </div>
    </BrowserRouter>
  );
}

export default App;
