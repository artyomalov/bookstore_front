import styled from 'styled-components';

const StyledCatalogPagination = styled.div`
  width: 450px;
  height: 24px;
  margin: 80px auto 32px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .catalog-paginaton__arrow {
    display: block;
    width: 12px;
    height: 12px;
    border-left: 2px solid ${(props) => props.theme.colorDark};
    border-bottom: 2px solid ${(props) => props.theme.colorDark};
    transform: scale(1, 0.9);
    transition: ${(props) => props.theme.transitionStyle};
    cursor: pointer;
    &:first-of-type {
      transform: rotate(45deg);
    }
    &:last-of-type {
      transform: rotate(-135deg);
    }
  }

  .catalog-paginaton__circles-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
  }
`;

export default StyledCatalogPagination;
