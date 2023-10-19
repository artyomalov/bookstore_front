import styled from 'styled-components';

type StyledDropDownSelectorType = {
  displaylist: string;
};

const StyledDropDownSelector = styled.div<StyledDropDownSelectorType>`
  position: relative;

  .genres__genres-list {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    list-style: none;
    width: 305px;
    height: ${(props) => props.displaylist};
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colorLight};
    padding-left: 15px;
    position: absolute;
    top: 64px;
    overflow: hidden;
    transition: ${(props) => props.theme.transitionStyle};
  }
`;

export default StyledDropDownSelector;
