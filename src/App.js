import logo from './logo.svg';
import './App.css';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
     <Header/>
     <Home/> 
     <Footer/>
    </div>
  );
}

export default App;
