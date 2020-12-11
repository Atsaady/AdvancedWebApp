import './homepage.scss';
import video from '../Videos/Background.mp4'
import Searchbar from '../Components/Searchbar/searchbar.js'

function Homepage() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop >
                    <source src={video} type="video/mp4"/>
                </video>  
        </div>
        <div className="searchbox">
          <Searchbar/>
        </div>
      </header>
    </div>
  );
}

export default Homepage;
