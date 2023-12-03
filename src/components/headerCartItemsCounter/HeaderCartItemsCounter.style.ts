import styled from 'styled-components';

type StyledProps = {
  display: string;
};

const StyledHeaderCartItemsCounter = styled.div<StyledProps>`
  height: inherit;
  width: inherit;
  padding-top: 2.5px;
  background-color: ${(props) => props.theme.colorGreen};
  color: ${(props) => props.theme.colorDarkBlue};
  display: ${(props) => props.display};
  border-radius: 50%;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize12};
  font-weight: ${(props) => props.theme.fontWeightBold};
`;

export default StyledHeaderCartItemsCounter;
