
import './App.css';
import Navbar from './components/navbar';
import Header from './components/headder';
import Main from './components/main';
import Fotter from './components/fotter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main/>
      <Fotter/>
    </div>
  );
}

export default App;
