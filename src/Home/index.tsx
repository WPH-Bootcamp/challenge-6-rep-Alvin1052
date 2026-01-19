import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

import Hero from './components/Hero';
import NewRelease from './components/new-release';
import TrendingNow from './components/trending-now';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <TrendingNow />
      <NewRelease />
      <Footer />
    </>
  );
};

export default Home;
