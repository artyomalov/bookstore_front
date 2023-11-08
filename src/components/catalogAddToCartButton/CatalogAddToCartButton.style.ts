import styled from 'styled-components';

type StyledProps = {
  isavalible: string;
  width: string;
  height: string;
};

const StyledCatalogAddToCartButton = styled.button<StyledProps>`
  display: block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) =>
    props.isavalible === 'avalible'
      ? props.theme.colorDarkBlue
      : props.theme.colorDarkGray};
  color: ${(props) => props.theme.colorLight};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  font-weight: ${(props) => props.theme.fontWeightThin};
  font-size: ${(props) => props.theme.fontSizeNormal};
  &:hover {
    background-color: ${(props) => props.theme.colorDarkGray};
  }
  transition: ${(props) => props.theme.transitionStyle};
`;

export default StyledCatalogAddToCartButton;
