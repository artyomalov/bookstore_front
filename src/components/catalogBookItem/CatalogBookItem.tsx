import React from 'react';
import StyledCatalogBookItem from './CatalogBookItem.style';
import { AuthorType } from '../../types/bookTypes';

type Props = {
  slug: string;
  title: string;
  paperbackPrice: number;
  coverImage: string;
  salesCount: 2;
  authors: AuthorType[];
};

const CatalogBookItem: React.FC<Props> = (props) => {
  return (
    <StyledCatalogBookItem>
      <img
        className="catalog-book-item__image"
        src={`http://localhost:8000/${props.coverImage}`}
        alt={props.title}
      />
      <h4 className="catalog-book-item__book-title">{props.title}</h4>
      {props.authors.map((author) => (
        <p key={author.id} className="catalog-book-item__author">
          {author.name}
        </p>
      ))}
      <div className="catalog-book-item__rating">
        ??????????????????????????
      </div>
      <button className="catalog-book-item__button">
        {props.paperbackPrice}
      </button>
    </StyledCatalogBookItem>
  );
};

export default CatalogBookItem;
