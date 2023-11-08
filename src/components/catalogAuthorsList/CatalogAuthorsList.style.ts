import styled from 'styled-components';

type StyledProps = {
  width: string;
  height: string;
  fontSize: string;
  fontWeight: number;
  color: string;
};

const StyledAuthorsList = styled.div<StyledProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
  .authors-list__author {
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.color};
  }
`;

export default StyledAuthorsList;
