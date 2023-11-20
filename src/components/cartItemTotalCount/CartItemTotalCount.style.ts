import styled from 'styled-components';

const StyledCartItemTotalCount = styled.h3`
  margin-top: 50px;
  font-size: ${(props) => props.theme.fontSize36};
  font-weight: ${(props) => props.theme.fontWeightNormal};
  .cart__total-amount {
    font-weight: ${(props) => props.theme.fontWeightBold};
  }
`;

export default StyledCartItemTotalCount;
