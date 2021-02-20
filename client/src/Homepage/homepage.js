import "./homepage.scss";
import video from "../Videos/Background.mp4";
import SearchPage from "../Components/Searchbar/searchbar";
import Stockbar from "../Components/Stockbar/Stockbar";
import img from "../Videos/logoinvestock.png";
import stockslist from "../stocksForSearch";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Homepage() {
  return (
    <>
      <body>
        <div className="logo-box">
          <img src={img} alt="Logo" class="logo" />
        </div>
        <div className="Homepage">
          <header className="Homepage-header">
            <div className="bg-video">
              <video className="bg-video__content" autoPlay muted loop>
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="stockbarbox">
              <Stockbar />
            </div>
            <div className="searchbox">
              <h2 className="searchbox__header">
                Inve<span>S</span>tock
              </h2>
              <SearchPage items={stockslist} />
            </div>
          </header>
        </div>
      </body>
      x
    </>
  );
}

export default Homepage;
