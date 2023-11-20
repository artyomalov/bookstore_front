import styled from 'styled-components';

const StyledCart = styled.main`
  width: ${(props) => props.theme.mainWidth};
  min-height: 50vh;
  margin: 0 auto;
  padding-top: 118px;

  .cart__buttons-container {
    width: 462px;
    height: 44px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart__continue-shopping {
    display: block;
    background: none;
    width: 268px;
    height: 100%;
    color: ${(props) => props.theme.colorDark};
    border: 2px solid ${(props) => props.theme.colorDark};
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: ${(props) => props.theme.fontSize16};
    font-weight: ${(props) => props.theme.fontWeightSemiBold};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: ${(props) => props.theme.transitionStyle};

    &:visited,
    :focus {
      text-decoration: none;
      color: ${(props) => props.theme.colorDark};
    }
    &:hover {
      color: ${(props) => props.theme.colorLight};
      background-color: ${(props) => props.theme.colorDarkBlue};
      border-color: ${(props) => props.theme.colorDarkBlue};
      text-decoration: none;
    }
  }

  .cart__checkout {
    background-color: ${(props) => props.theme.colorDarkBlue};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 174px;
    height: 100%;
    color: ${(props) => props.theme.colorLight};
    background-color: ${(props) => props.theme.colorDarkBlue};
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: ${(props) => props.theme.fontSize16};
    font-weight: ${(props) => props.theme.fontWeightSemiBold};
    transition: ${(props) => props.theme.transitionStyle};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colorDarkBlue};
      background-color: ${(props) => props.theme.colorLight};
    }
  }
`;

export default StyledCart;
