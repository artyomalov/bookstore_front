import styled from 'styled-components';

const StyledPurchaseItem = styled.div`
  width: 100%;
  height: 289px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 80px;
  &:last-of-type {
    margin-bottom: 0px;
  }
  .purchase-item__book-cover {
    width: 197px;
    height: 100%;
  }
  .purchase-item__data-container {
    height: 100%;
    margin-left: 20px;
  }
  .purchase-item__book-title {
    font-size: ${(props) => props.theme.fontSize44};
    font-weight: ${(props) => props.theme.fontWeightBold};
  }
  .purchase-item__price,
  .purchase-item__quantity {
    margin-top: 60px;
    font-weight: ${(props) => props.theme.fontWeightNormal};
    color: ${(props) => props.theme.colorDark};
  }
  .purchase-item__quantity {
    font-size: ${(props) => props.theme.fontSize22};
  }
  .purchase-item__price {
    font-size: ${(props) => props.theme.fontSize36};
  }
`;

export default StyledPurchaseItem;
