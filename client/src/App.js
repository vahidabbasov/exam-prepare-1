import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Index'
import Home from './Pages/Home/Index'
import AddPage from './Pages/AddPage/Index'
import Details from './Pages/Details/Index'



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addPage' element={<AddPage/>}/>
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
