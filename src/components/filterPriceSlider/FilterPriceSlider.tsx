import React from 'react';
import { useAppDispatch } from '../../store/typedHooks';
import { setSelectedPriceRange } from '../../store/filtersSlice';
import StyledFilterPriceSlider from './FilterPriceSlider.style';

//Calculating left position of slider price range
const calculateSliderRangeLeft = (sliderMinValue: number, maxValue: number) => {
  return `${(sliderMinValue / maxValue) * 100}%`;
};
//Calculating right position of slider price range
const calculateSliderRangeRight = (
  sliderMaxValue: number,
  maxValue: number
) => {
  return `${100 - (sliderMaxValue / maxValue) * 100}%`;
};

const FilterPriceSlider: React.FC = () => {
  const maxValue = 1000;
  const [sliderMinValue, setSliderMinValue] = React.useState<number>(6);
  const [sliderMaxValue, setSliderMaxValue] = React.useState<number>(200);
  const sliderRangeRef = React.useRef<HTMLSpanElement | null>(null);
  const dispatch = useAppDispatch();
  // get initial price range width
  if (sliderRangeRef.current) {
    sliderRangeRef.current.style.left = calculateSliderRangeLeft(
      sliderMinValue,
      maxValue
    );
    sliderRangeRef.current.style.right = calculateSliderRangeRight(
      sliderMaxValue,
      maxValue
    );
  }
  // change price range width according to sliders positions
  const changeMinValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) >= sliderMaxValue) {
      setSliderMinValue(sliderMaxValue - 1);
    } else setSliderMinValue(parseInt(e.target.value));
    if (sliderRangeRef.current) {
      sliderRangeRef.current.style.left = calculateSliderRangeLeft(
        sliderMinValue,
        maxValue
      );
    }
  };
  const changeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) <= sliderMinValue) {
      setSliderMaxValue(sliderMinValue + 1);
    } else setSliderMaxValue(parseInt(e.target.value));
    if (sliderRangeRef.current) {
      sliderRangeRef.current.style.right = calculateSliderRangeRight(
        sliderMaxValue,
        maxValue
      );
    }
  };

  const onDropSliderHandler = () => {
    dispatch(
      setSelectedPriceRange({
        minValue: sliderMinValue,
        maxValue: sliderMaxValue,
      })
    );
  };

  return (
    <StyledFilterPriceSlider>
      <div className="slider__slider-body">
        <span className="slider__selected-range" ref={sliderRangeRef}></span>
        <input
          type="range"
          className="slider__miv-value"
          min="0"
          max="1000"
          value={sliderMinValue.toString()}
          onChange={changeMinValueHandler}
          onClick={onDropSliderHandler}
        />
        <input
          type="range"
          className="slider__max-value"
          min="0"
          max="1000"
          value={sliderMaxValue.toString()}
          onChange={changeMaxValueHandler}
          onClick={onDropSliderHandler}
        />
      </div>
      <div className="slider__values-container">
        <span className="slider__min-value">$ {sliderMinValue}</span>
        <span className="slider__max-value">$ {sliderMaxValue}</span>
      </div>
    </StyledFilterPriceSlider>
  );
};

export default FilterPriceSlider;
