import logo from './logo.svg';
import './App.css';
import ActorsPage from './pages/ActorsPage/ActorsPage';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  return (
    <div>
      <SearchBox/>
      <ActorsPage/>
    </div>
  );
}

export default App;
