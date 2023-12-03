import styled from 'styled-components';

const StyledFilterCatalogHeader = styled.div`
  width: 100%;
  height: 72px;
  margin-top: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .catalog-header__header {
    font-size: ${(props) => props.theme.fontSize40};
    font-weight: ${(props) => props.theme.fontWeightBold};
  }
  .catalog-header__filters {
    display: flex;
    width: 629px;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
  }
  @media (max-width: ${(props) => props.theme.mediaMaxWidth834}) {
    width: ${(props) => props.theme.widthFor834};
    display: block;
    height: 144px;
    .catalog-header__header {
      font-size: ${(props) => props.theme.fontSize32};
      font-weight: ${(props) => props.theme.fontWeightBold};
    }
    .catalog-header__filters {
      display: flex;
      width: 100%;
      margin-top: 20.05px;
      justify-content: space-between;
      align-items: center;
      z-index: 999;
    }
  }
`;

export default StyledFilterCatalogHeader;
