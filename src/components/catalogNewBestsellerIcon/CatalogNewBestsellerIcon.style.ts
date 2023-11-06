import styled from 'styled-components';

type StyledProps = {
  text: string;
};

const StyledCatalogNewBestsellerIcon = styled.div<StyledProps>`
  width: ${(props) => (props.text === 'New' ? '132px' : '175px')};
  height: 30px;
  padding-top: 2.4px;
  background-color: ${(props) =>
    props.text === 'New' ? props.theme.colorGreen : props.theme.colorDarkBlue};
  color: ${(props) =>
    props.text === 'New' ? props.theme.colorDark : props.theme.colorLight};
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: center;
  font-size: ${(props) => props.theme.fontSizeSmall};
  font-style: italic;
  font-weight: ${(props) => props.theme.fontWeightNormal};
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

export default StyledCatalogNewBestsellerIcon;
