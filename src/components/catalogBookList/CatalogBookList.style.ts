import styled from 'styled-components';

const StyledCatalogBookList = styled.div`
  margin-top: 38px;
  .catalog-book-list__books-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .catalog-book-list__book-item-container {
    margin-bottom: 60px;
  }
  .catalog-book-list__empty-container{
    margin-top: 100px;
  }
`;

export default StyledCatalogBookList;
