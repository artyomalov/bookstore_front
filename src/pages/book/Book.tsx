import React from 'react';
import StyledBook from './Book.style';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import CatalogBookList from '../../components/catalogBookList/CatalogBookList';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import CatalogAddToCartButton from '../../components/catalogAddToCartButton/CatalogAddToCartButton';
import CatalogAuthorsList from '../../components/catalogAuthorsList/CatalogAuthorsList';
import mediaBaseUrl from '../../const/mediaBaseUrl';
import BookComments from '../../components/bookComments/BookComments';
import BookRating from '../../components/bookRating/BookRating';
import { updateUserCart } from '../../store/userStaffSlice';
import { selectBooksList, selectIfUserExists } from '../../store/selectors';
import CatalogAddToFavoriteCheckBox from '../../components/catalogAddToFavoriteCheckBox/CatalogAddToFavoriteCheckBox';
import bookRequersts from '../../api/bookAPI/bookRequests';

const Book: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const booksList = useAppSelector(selectBooksList);
  const book = location.state;

  const userExists = useAppSelector(selectIfUserExists);

  const serverRequestCallback = React.useCallback(async () => {
    try {
      const response = await bookRequersts.getSimularBooks(book.slug);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }, [book.slug]);

  const books = useAppSelector((state) => state.book.books);
  const hardcoverPrice =
    book && book.hardcoverQuantity > 0 ? book.hardcoverPrice : -1;
  const paperbackPrice =
    book && book.paperbackQuantity > 0 ? book.paperbackPrice : -1;

  const addToCartButtonClickHandler = async (
    coverType: string,
    price: number
  ) => {
    if (!userExists) {
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
              <div className="book__add-to-cart-button-container-paperback">
                <CatalogAddToCartButton
                  price={paperbackPrice}
                  onClickHandler={addToCartButtonClickHandler}
                  coverType="paperback"
                />
              </div>
            </div>
            <div className="book__button-container">
              <h4 className="book__button-title">Hardcover</h4>
              <div className="book__add-to-cart-button-container-hardcover">
                <CatalogAddToCartButton
                  price={hardcoverPrice}
                  onClickHandler={addToCartButtonClickHandler}
                  coverType="hardcover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="book__comments">
        <BookComments slug={book.slug} bookId={book.id} />
      </div>
      <h2 className="book__recommendations-title">Recommendations</h2>
      <CatalogBookList serverRequestCallback={serverRequestCallback} />
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
