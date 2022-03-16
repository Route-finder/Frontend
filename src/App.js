/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/**
 * React and NPM Components
 */
import {Route, Routes} from 'react-router-dom';
import 'normalize.css';

/**
 * Local application resources
 */
import HomePage from './pages/HomePage';
import ListOfBooksPage from './pages/ListOfBooks';
// import MainNavigation from './components/layout/MainNavigation'
import Layout from './components/layout/Layout';
import AddBooksPage from './pages/AddBooks';

function App() {
  return (

    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='book-list' element = {<ListOfBooksPage />} />
        <Route path='add' element={<AddBooksPage />} />
      </Routes>
    </Layout>
    
    
    
  );
}

export default App;
