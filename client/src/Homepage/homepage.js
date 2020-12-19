import './homepage.scss';
import video from '../Videos/Background.mp4'
import SearchPage from '../Components/Searchbar/searchbar.js'
import Stockbar from '../Components/Searchbar/Stockbar';

function Homepage() {
  return (
    <body>
    <div className="Homepage">
      <header className="Homepage-header">
        <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop >
                    <source src={video} type="video/mp4"/>
                </video>  
        </div>
        <Stockbar/>
        <div className="searchbox">
        <h2 className="searchbox__header">Investock</h2>
          <SearchPage/>
        </div>
      </header>
    </div>
    </body>
  );
}

export default Homepage;
