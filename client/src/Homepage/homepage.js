import './homepage.scss';
import video from '../Videos/Background.mp4'
import SearchPage from '../Components/searchbar.js'
import Stockbar from '../Components/Stockbar';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import img from '../Videos/logoinvestock.png';
import stockslist from "../Components/stocksForSearch";

function Homepage() {
  return (
    <>
    <body>
      <div className="logo-box">
               <img src={img} alt="Logo" class="logo"/>
           </div>
    <div className="Homepage">
      <header className="Homepage-header">
        <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop >
                    <source src={video} type="video/mp4"/>
                </video>  
        </div>
        <Navbar/>
        <div className="stockbarbox">
        <Stockbar/>
        </div>
        <div className="searchbox">
        <h2 className="searchbox__header">Inve<span>S</span>tock</h2>
          <SearchPage items={stockslist} />
        </div>
      </header>
    </div>
    </body>
    <footer className="footer">
    <Footer/>
    </footer>
 
    
    
   
   x
    </>

  );
}

export default Homepage;
