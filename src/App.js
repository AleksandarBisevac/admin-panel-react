import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Protected from './pages/protected/Protected';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Layout from './layout/Layout';
import { PRODUCT_INPUT, USER_INPUTS } from './components/config';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Protected>
                <Layout />
              </Protected>
            }
          >
            <Route index element={<Home />} />
            {/* USERS ROUTES */}
            <Route path='/users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={USER_INPUTS} />} />
            </Route>
            {/* PRODUCTS ROUTES */}
            <Route path='/products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={PRODUCT_INPUT} />} />
            </Route>
          </Route>
          <Route path='/login' element={<Login />} />

          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
