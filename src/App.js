import {Route, Routes} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewFavouritesPage from './pages/Favourites';
import NewMeetupsPage from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation'

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='book-list' element = {<NewMeetupsPage />} />
        <Route path='books-stored' element={<NewFavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
