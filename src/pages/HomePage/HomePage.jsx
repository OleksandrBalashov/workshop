import { NavLink } from 'react-router-dom';
import './homePage.scss';

const HomePage = () => {
  return (
    <main>
      <div className="homeWrapper">
        <h1 className="homeTitle">Discover Freedom on the Open Road</h1>
        <NavLink id="seeCatalogBtn" to="/catalog">
          See Catalog
        </NavLink>
      </div>
    </main>
  );
};

export default HomePage;
