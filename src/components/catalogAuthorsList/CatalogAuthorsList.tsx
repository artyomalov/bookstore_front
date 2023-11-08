import React from 'react';
import { AuthorType } from '../../types/bookTypes';
import StyledAuthorsList from './CatalogAuthorsList.style';
type Props = {
  authors: AuthorType[];
  width: string;
  height: string;
  fontSize: string;
  fontWeight: number;
  color: string;
};

const CatalogAuthorsList: React.FC<Props> = (props) => {
  return (
    <StyledAuthorsList
      width={props.width}
      height={props.height}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      color={props.color}
    >
      {props.authors.map((author, index, array) => (
        <span key={author.id} className='authors-list__author'>
          {author.name}
          {array.length - 1 === index ? '' : ', '}
        </span>
      ))}
    </StyledAuthorsList>
  );
};

export default CatalogAuthorsList;
