import { memo } from 'react';
import Navbar from './components/navbar/navbar';
import About_us from './components/intro/about_us';

const App = () => {
  return (
    <div>
      <Navbar />
      <About_us />
    </div>
  );
};

export default memo(App);