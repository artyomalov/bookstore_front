import styled from 'styled-components';

type StyledFilterGenreType = {
  displaylist: string;
};

const StyledFilterGenre = styled.div<StyledFilterGenreType>`
  position: relative;

  .genres__genres-list-container {
    width: 305px;
    height: ${(props) => props.displaylist};
    position: absolute;
    top: 44px;
    overflow: hidden;
    transition: ${(props) => props.theme.transitionStyle};
  }
  .genres__genres-list {
    display: flex;
    height: 666px;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    list-style: none;

    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colorLight};
    padding-left: 15px;
  }
`;

export default StyledFilterGenre;
