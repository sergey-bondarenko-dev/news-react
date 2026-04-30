import React, { ReactElement, Ref, useRef } from 'react';
import styles from './Slider.module.css';

interface SliderChildProps {
  ref?: Ref<HTMLElement>;
}

interface Props {
  children: ReactElement<SliderChildProps>,
  step?: number;
}

const Slider = (props: Props) => {
  const {
    children,
    step = 150
  } = props;

  const sliderRef = useRef<HTMLElement|null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= step;
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += step;
    }
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
