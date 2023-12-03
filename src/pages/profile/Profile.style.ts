import { styled } from 'styled-components';

const StyledProfileDataContainer = styled.form`
  display: flex;
  width: ${(props) => props.theme.widthFor1440};
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
    width: 100%;
    height: auto;

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
    width: 522px;
    height: fit-content;
  }

  .user-page__header-container {
    /* margin-top: 40px; */
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
    &:first-of-type {
      margin-top: 0;
      margin-bottom: 30px;
    }
  }

  .user-page__add-photo-input {
    display: none;
  }

  .user-page__header {
    font-size: ${(props) => props.theme.fontSize20};
    font-weight: ${(props) => props.theme.fontWeightMedium};
  }

  .user-page__change-data-button {
    background: none;
    text-decoration: underline;
    border: none;
    color: #8d9f4f;
    font-size: ${(props) => props.theme.fontSize16};
    font-weight: ${(props) => props.theme.fontWeightMedium};
    cursor: pointer;
  }

  .user-page__confirm {
    width: 30.5%;
    height: 44px;
    margin-top: 50px;
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
