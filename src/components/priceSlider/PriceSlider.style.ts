import styled from 'styled-components';

type StyledSliderType = {
  height: string;
};

const StyledSlider = styled.div<StyledSliderType>`
  width: 413px;
  padding-left: 40px;
  padding-right: 40px;
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.colorLight};
  border-radius: ${(props) => props.theme.borderRadius};
  position: absolute;
  top: 64px;
  overflow: hidden;
  transition: ${(props) => props.theme.transitionStyle};

  .slider__slider-body {
    position: relative;
    margin-top: 40px;
    width: 100%;
    height: 12px;
    background-color: ${(props) => props.theme.colorGray};
    border-radius: ${(props) => props.theme.borderRadius};
  }
  .slider__selected-range {
    position: absolute;
    height: 12px;
    background-color: ${(props) => props.theme.colorGreen};
  }

  .slider__slider-body input {
    position: absolute;
    width: 100%;
    background: none;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    appearance: none;
  }

  input[type='range']::-webkit-slider-thumb {
    width: 32px;
    height: 32px;
    border-radius: ${(props) => props.theme.borderRadius};
    border: 2px solid ${(props) => props.theme.colorGreen};
    background: ${(props) => props.theme.colorWhite};
    pointer-events: auto;
    appearance: none;
    cursor: pointer;
    /* box-shadow: 0 2px 2px; */
  }

  input[type='range']::-moz-range-thumb {
    width: 32px;
    height: 32px;
    border-radius: ${(props) => props.theme.borderRadius};
    border: 2px solid ${(props) => props.theme.colorGreen};
    background: ${(props) => props.theme.colorWhite};
    pointer-events: auto;
    appearance: none;
    cursor: pointer;
    /* box-shadow: 0 2px 2px; */
  }

  .slider__values-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 34px;
    margin-top: 15px;
    color: ${(props) => props.theme.colorDarkBlue};
  }
`;

export default StyledSlider;
