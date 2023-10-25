import styled from 'styled-components';

type StyledFilterGenreItemType = {
  checked: string;
};

const StyledFilterGenreItem = styled.li<StyledFilterGenreItemType>`
  .genres__genre-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .genres__checkboks {
    display: none;
  }
  .genres__checkbox-circle {
    width: 24px;
    height: 24px;
    position: relative;
    background-color: ${(props) =>
      props.checked === '1'
        ? props.theme.colorDarkBlue
        : props.theme.colorLight};
    border: 1px solid ${(props) => props.theme.colorDarkBlue};
    border-radius: 50%;
    padding-top: 6.5px;
  }
  .genres__checkbox-tick {
    display: ${(props) => (props.checked === '0' ? 'none' : 'block')};
    margin: 0 auto;
    width: 10px;
    height: 6px;
    border-left: 2px solid ${(props) => props.theme.colorLight};
    border-bottom: 2px solid ${(props) => props.theme.colorLight};
    transform: rotate(-45deg);
  }
  .genres__genre-name {
    margin-left: 10px;
    font-size: ${(props)=>props.theme.fontSizeSmall};
  }
`;
export default StyledFilterGenreItem;
