import { Button } from "antd";
import "./homePage.scss";

const HomePage = () => {
  return (
    <main>
      <div className='homeWrapper'>
        <h1 className='homeTitle'>Discover Freedom on the Open Road</h1>
        <Button id='seeCatalogBtn' type='link' href='/catalog' size='large'>
          See Catalog
        </Button>
      </div>
    </main>
  );
};

export default HomePage;
