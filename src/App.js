import './App.css';
// import CarouselContainer from './components/Home/CarouselContainer';
import Footer from './components/Home/Footer';
import Routes from './Routes';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">


        <Routes />
        {/* <CarouselContainer /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
