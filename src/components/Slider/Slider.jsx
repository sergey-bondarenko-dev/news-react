import React, { useRef } from 'react';
import styles from './Slider.module.css';

const Slider = (props) => {
  const {
    children,
    step = 150
  } = props;

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  }

  const scrollRight = () => {
    sliderRef.current.scrollLeft += step;
  }

  return (
    <div className={styles.slider}>
      <button 
        type='button'
        aria-label='Next slide'
        className={styles.arrow}
        onClick={scrollLeft}
      >
        {'<'}
      </button>

      {React.cloneElement(children, { ref: sliderRef })}

      <button 
        type='button'
        aria-label='Previous slide'
        className={styles.arrow}
        onClick={scrollRight}
      >
        {'>'}
      </button>
    </div>
  );
}

export default Slider;
