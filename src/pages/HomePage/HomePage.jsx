// import style from './HomePage.module.css';

import { Helmet } from 'react-helmet-async';
import Home from '../../components/Home/Home';
import WaterModal from '../../components/WaterModal/WaterModal';

const HomePage = () => {

  return (
    <>
      <h2>HomePage</h2>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Home />
      <WaterModal/>

    </>
  );
};

export default HomePage;
