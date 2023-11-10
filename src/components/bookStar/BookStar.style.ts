import styled from 'styled-components';
import starMask from '../../assets/img/catalog_rating_star_mask.svg';

type StyledProps = {
  ratelevel: number;
};

const StyledBookStar = styled.div<StyledProps>`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  .catalog-book-item__white-background {
    background-color: white;
    width: 30px;
    height: 30px;
    transform: scale(150%);
    mask-image: url(${starMask});
    -webkit-mask-image: url(${starMask});
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-position: center;
  }
  .catalog-book-item__green-fill {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.theme.colorGreen};
    top: 0;
    left: ${(props) => props.ratelevel}%;
  }
  .catalog-book-item__star-outline {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 0;
    left: 0;
    z-index: 100;
  }
`;

export default StyledBookStar;
