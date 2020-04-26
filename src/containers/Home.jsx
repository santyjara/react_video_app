import React, { useState } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousell from '../components/Carousell';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const Home = () => {

  const [_videos, setVideos] = useState(
    {
      mylist: [],
      trends: [],
      originals: [],
    },
  );

  const videos = useInitialState(API, _videos, setVideos);

  return (
    <div className='App'>
      <Header />
      <Search />

      {videos.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousell>
            <CarouselItem />
          </Carousell>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousell>
          {videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousell>
      </Categories>

      <Categories title='Original'>
        <Carousell>
          {videos.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousell>
      </Categories>

      <Footer />
    </div>
  );
};

export default Home;
