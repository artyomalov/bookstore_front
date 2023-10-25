import styled from 'styled-components';

const StyledFilterPriceSlider = styled.div`
  width: 413px;
  height: 151px;
  padding-left: 23px;
  padding-right: 23px;
  background-color: ${(props) => props.theme.colorLight};
  border-radius: ${(props) => props.theme.borderRadius};

  .slider__slider-body {
    position: relative;
    top: 50px;
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
    margin-top: 65px;
    color: ${(props) => props.theme.colorDarkBlue};
  }
`;

export default StyledFilterPriceSlider;
