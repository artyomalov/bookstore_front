import styled from 'styled-components';

const StyledHeaderUserStaffLinks = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__cart-link-container {
    height: 48px;
    width: 48px;
    position: relative;
  }

  .header__user-link {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    vertical-align: center;
  }
  .header__cart-items-counter-container {
    width: 23px;
    height: 23px;
    position: absolute;
    left: 33px;
    bottom: 31px;
  }
`;

export default StyledHeaderUserStaffLinks;
