import { styled } from 'styled-components';

type StyledProfileDataContainerType = {
  passwordflag: number;
};

const StyledProfileDataContainer = styled.form<StyledProfileDataContainerType>`
  display: flex;
  width: ${(props) => props.theme.mainWidth};
  margin: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 70px;


  .user-page__container {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .user-page__avatar {
    width: 18%;
    width: 305px;
    height: 305px;
    border-radius: ${(props) => props.theme.borderRadius};
    overflow: hidden;
    position: relative;
  }

  .user-page__avatar-image {
  }

  .user-page__add-photo-icon-container {
    position: absolute;
    width: 48px;
    height: 48px;
    top: 75%;
    left: 75%;

    cursor: pointer;
    &:hover {
      transform: scale(105%);
    }
  }
  .user-page__add-photo-input {
  }

  .user-page__text-form {
    margin-left: 15%;
    width: 40%;
  }

  .user-page__header-container {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .user-page__add-photo-input {
    display: none;
  }

  .user-page__header {
    font-size: ${(props) => props.theme.fontSizeNormal};
    font-weight: ${(props) => props.theme.fontSizeNormal};
  }

  .user-page__change-data-button {
    background: none;
    text-decoration: underline;
    border: none;
    color: #8d9f4f;
    cursor: pointer;
  }

  .user-page__password-update-fields {
    display: ${(props) => (props.passwordflag === 1 ? 'block' : 'none')};
  }

  .user-page__confirm {
    width: 30.5%;
    height: 44px;
    margin-top: 30px;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colorDarkBlue};
    border: none;
    color: ${(props) => props.theme.colorLight};

    &:hover {
      cursor: pointer;
    }
  }
`;

export default StyledProfileDataContainer;
