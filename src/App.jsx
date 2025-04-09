import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages';
import { Header,Footer } from './components/common';
import './App.css';

const Layout = () => {
  return(
    <div id='wrapper'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

const App=()=>{

  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
