import React from 'react';
import StyledBook from './Book.style';
import { useParams, useNavigate } from 'react-router-dom';
import CatalogBookList from '../../components/catalogBookList/CatalogBookList';
import CatalogBannerSecondary from '../../components/catalogBannerSecondary/CatalogBannerSecondary';
import { useAppSelector } from '../../store/typedHooks';
import CatalogAddToCartButton from '../../components/catalogAddToCartButton/CatalogAddToCartButton';
import CatalogAuthorsList from '../../components/catalogAuthorsList/CatalogAuthorsList';
import mediaBaseUrl from '../../const/mediaBaseUrl';
import { Navigate } from 'react-router-dom';
import BookCommentsList from '../../components/bookCommentsList/BookCommentsList';
const Book: React.FC = () => {
  const params = useParams();
  const book = useAppSelector((state) => {
    const book = state.book.books.find((book) => book.slug === params.slug);
    return book;
  });
  const user = useAppSelector((state) => state.user.user);
  const books = useAppSelector((state) => state.book.books);
  const isAuthorized = user.email === 'not set' ? false : true;
  const hardcoverPrice =
    book && book.hardcoverQuantity > 0 ? book.hardcoverPrice : null;
  const paperbackPrice =
    book && book.paperbackQuantity > 0 ? book.paperbackPrice : null;
  
  return book ? (
    <StyledBook>
      <div className="book__container">
        <img
          src={`${mediaBaseUrl}${book.coverImage}`}
          alt={book.title}
          className="book__cover-image"
        />
        <div className="book__data">
          <h2 className="book__title">{book.title}</h2>
          <CatalogAuthorsList
            authors={book.authors}
            width="180px"
            height="36px"
            fontSize="24px"
            fontWeight={500}
            color="0D1821"
          />
          <div className="book__rating">***************************</div>
          <h4 className="book__description">{book.annotation}</h4>
          <div className="book__add-to-cart-container">
            <div className="book__button-container">
              <h4 className="book__button-title">Paperback</h4>
              <CatalogAddToCartButton
                price={paperbackPrice}
                width="240px"
                height="50px"
              />
            </div>
            <div className="book__button-container">
              <h4 className="book__button-title">Hardcover</h4>
              <CatalogAddToCartButton
                price={hardcoverPrice}
                width="240px"
                height="50px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="book__comments">
        <h2>Comments</h2>
        <BookCommentsList comments={book.comments} />
      </div>
      <CatalogBookList books={books} />
      {isAuthorized ? null : <CatalogBannerSecondary />}
    </StyledBook>
  ) : (
    <Navigate
      to="/error_404"
      state={{
        errorText:
          "404 | Sorry, we don't have this book, but you can choose another one.",
      }}
    />
  );
};

export default Book;
