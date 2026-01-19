import { Route, Routes } from 'react-router-dom';

import Details from './details';
import Favorite from './favorite';
import Search from './search';
import Home from './Home';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<Details />} />
      <Route path='/favorite' element={<Favorite />} />
      <Route path='/search/:keyword' element={<Search />} />
    </Routes>
  );
}

export default App;
