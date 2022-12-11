import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import {useTheme} from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const {themeName} = useTheme();
  const image = dayImage;

  return (
    <section>
      <img  className='greenhouse-img'
            src={themeName === "night" ? nightImage : dayImage}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;