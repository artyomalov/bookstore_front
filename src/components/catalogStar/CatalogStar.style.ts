import styled from 'styled-components';
import starMask from '../../assets/img/catalog_rating_star_mask.svg';

type StyledProps = {
  ratelevel: number;
};

const StyledStar = styled.div<StyledProps>`
  position: relative;
  width: 23.83px;
  height: 23.83px;
  overflow: hidden;
  .catalog-book-item__white-background {
    background-color: white;
    width: 23.83px;
    height: 23.83px;
    mask-image: url(${starMask});
    -webkit-mask-image: url(${starMask});
    /* mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat; */
    /* mask-position: center;
    -webkit-mask-position: center; */
  }
  .catalog-book-item__green-fill {
    position: absolute;
    width: 23.83px;
    height: 23.83px;
    background-color: ${(props) => props.theme.colorGreen};
    top: 0;
    left: ${(props) => props.ratelevel}%;
  }
`;

export default StyledStar;
