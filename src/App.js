import './App.css';
import Body from './components/Body/Body';

import Header from './components/Header/Header';
import ElvesPage from './pages/elves/ElvesPage';
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <ElvesPage />
    </div>
  );
}

export default App;
