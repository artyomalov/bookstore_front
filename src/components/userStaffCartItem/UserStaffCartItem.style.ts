import styled from 'styled-components';

const StyledCartItem = styled.div`
  width: 100%;
  height: 289px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 80px;
  &:last-of-type {
    margin-bottom: 0px;
  }
  .cart-item__book-cover {
    width: 197px;
    height: 100%;
  }
  .cart-item__data-container {
    height: 100%;
    margin-left: 20px;
  }
  .cart-item__book-title {
    font-size: ${(props) => props.theme.fontSize40};
    font-weight: ${(props) => props.theme.fontWeightBold};
  }
  .cart-item__actions-container {
    width: 196px;
    height: 32px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cart-item__quantity-actions-container {
    width: 118px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cart-item__quantity-control {
    position: relative;
    width: 32px;
    height: 32px;
    background-color: ${(props) => props.theme.colorLight};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: ${(props) => props.theme.transitionStyle};
    &:hover {
      transform: scale(110%);
    }
  }
  .cart-item__quantity-minus,
  .cart-item__quantity-plus {
    display: block;
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background-color: ${(props) => props.theme.colorDark};
  }
  .cart-item__quantity-plus:last-child {
    position: absolute;
    top: 15px;
    transform: rotate(90deg);
  }
  .cart-item__price {
    margin-top: 50px;
    font-size: ${(props) => props.theme.fontSize36};
    font-weight: ${(props) => props.theme.fontWeightMedium};
    color: ${(props) => props.theme.colorDark};
  }
  .cart-item__delete-button {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export default StyledCartItem;
