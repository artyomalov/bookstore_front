import React from 'react';
import StyledBook from './Book.style';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import CatalogBookList from '../../components/catalogBookList/CatalogBookList';
import CatalogBannerSecondary from '../../components/catalogBannerSecondary/CatalogBannerSecondary';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import CatalogAddToCartButton from '../../components/catalogAddToCartButton/CatalogAddToCartButton';
import CatalogAuthorsList from '../../components/catalogAuthorsList/CatalogAuthorsList';
import mediaBaseUrl from '../../const/mediaBaseUrl';
import BookCommentsList from '../../components/bookCommentsList/BookCommentsList';
import BookRating from '../../components/bookRating/BookRating';
import { updateUserCart } from '../../store/userStaffSlice';
import {
  selectBooksList,
  selectBooks,
  selectIfUserExists,
} from '../../store/selectors';
import CatalogAddToFavoriteCheckBox from '../../components/catalogAddToFavoriteCheckBox/CatalogAddToFavoriteCheckBox';
////////////////////////////////////////////////////////////////////////////////////////////////////
//НАПИСАТЬ ЗАПРОС К КНИГЕ НА СЕРВЕР. кНИГУ НЕЛЬЗЯ ПОЛУЧАТЬ ЧЕРЕЗ USE LOCATION ТАК КАК ЗАПРОС
const Book: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const booksList = useAppSelector(selectBooksList);
  const book = booksList.find((book) => book.slug === params.slug);

  const uerExists = useAppSelector(selectIfUserExists);
  //Заменить на запрос к похожему
  const books = useAppSelector((state) => state.book.books);
  const hardcoverPrice =
    book && book.hardcoverQuantity > 0 ? book.hardcoverPrice : -1;
  const paperbackPrice =
    book && book.paperbackQuantity > 0 ? book.paperbackPrice : -1;

  const addToCartButtonClickHandler = async (
    coverType: string,
    price: number
  ) => {
    if (!uerExists) {
      navigate('/auth/login', { state: { location: location } });
      return;
    }
    await dispatch(
      updateUserCart({
        bookSlug: book?.slug,
        coverType: coverType,
        price: price,
      })
    );
  };

  return book ? (
    <StyledBook>
      <div className="book__container">
        <div className="book__img-container">
          <img
            src={`${mediaBaseUrl}${book.coverImage}`}
            alt={book.title}
            className="book__cover-image"
          />
          <div className="book__liked-container">
            <CatalogAddToFavoriteCheckBox slug={book.slug} />
          </div>
        </div>
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
          <BookRating rating={book.rating.toFixed(1)} />
          <h4 className="book__description">{book.annotation}</h4>
          <div className="book__add-to-cart-container">
            <div className="book__button-container">
              <h4 className="book__button-title">Paperback</h4>
              <CatalogAddToCartButton
                price={paperbackPrice}
                width="240px"
                height="50px"
                onClickHandler={addToCartButtonClickHandler}
                coverType="paperback"
              />
            </div>
            <div className="book__button-container">
              <h4 className="book__button-title">Hardcover</h4>
              <CatalogAddToCartButton
                price={hardcoverPrice}
                width="240px"
                height="50px"
                onClickHandler={addToCartButtonClickHandler}
                coverType="hardcover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="book__comments">
        <h2 className="book__comments-title">Comments</h2>
        <BookCommentsList comments={book.comments} />
      </div>
      <CatalogBookList books={books} />
      {uerExists ? null : <CatalogBannerSecondary />}
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

// parceFloat convert decimal to number type
