import './App.css';
import Header from './Header';
import List from './list/List';
import Main from './main/Main';
import Stats from './stats/Stats';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/list' element={<List />} />
          <Route path='/stats' element={<Stats />} />
        </Routes>
    </div>
  );
}

export default App;
