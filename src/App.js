import {Route, Routes} from 'react-router-dom';
import AllMeetupsPage from './pages/HomePage';
import NewFavouritesPage from './pages/BookStored';
import NewMeetupsPage from './pages/ListOfBooks';
// import MainNavigation from './components/layout/MainNavigation'
import Layout from './components/layout/Layout';

function App() {
  return (

    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='book-list' element = {<NewMeetupsPage />} />
        <Route path='books-stored' element={<NewFavouritesPage />} />
      </Routes>
    </Layout>
    
    
    
  );
}

export default App;
