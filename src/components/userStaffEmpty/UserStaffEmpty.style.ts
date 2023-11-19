import styled from 'styled-components';

const StyledEmpty = styled.div`
  width: 100%;
  height: 261px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .empty__image {
    width: 433px;
    height: 261px;
    border-radius: ${(props) => props.theme.borderRadius};
  }
  .empty__text-container {
    margin-left: 100px;
  }
  .empty__title {
    font-size: ${(props) => props.theme.fontSize44};
    font-weight: ${(props) => props.theme.fontWeightBold};
  }
  .empty__text {
    font-size: ${(props) => props.theme.fontSize22};
    font-weight: ${(props) => props.theme.fontWeightNormal};
    margin-top: 20px;
    &:last-of-type {
      margin-top: 0;
    }
  }
  .empty__link {
    display: block;
    width: 219px;
    height: 44px;
    margin-top: 60px;
    padding-top: 9.5px;
    background-color: ${(props) => props.theme.colorDarkBlue};
    color: ${(props) => props.theme.colorLight};
    text-decoration: none;
    font-size: ${(props) => props.theme.fontSize16};
    font-weight: ${(props) => props.theme.fontWeightNormal};
    border-radius: ${(props) => props.theme.borderRadius};
    text-align: center;
  }
`;

export default StyledEmpty;
