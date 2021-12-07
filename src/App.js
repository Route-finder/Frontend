import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BooksStoredPage from './pages/BookStored';
import ListOfBooksPage from './pages/ListOfBooks';
// import MainNavigation from './components/layout/MainNavigation'
import Layout from './components/layout/Layout';

function App() {
  return (

    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='book-list' element = {<ListOfBooksPage />} />
        <Route path='books-stored' element={<BooksStoredPage />} />
      </Routes>
    </Layout>
    
    
    
  );
}

export default App;
