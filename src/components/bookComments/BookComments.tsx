import React from 'react';
import StyledBookComments from './bookComments.style';
import { CommentType } from '../../types/bookTypes';
import bookRequersts from '../../api/bookAPI/bookRequests';
import BookAddCommentInput from '../bookAddCommentInput/BookAddCommentInput';
import ConditionalRenderServiceComponent from '../../serviceComponents/ConditionalRenderServiceComponent';
import { selectIfUserExists, selectUserData } from '../../store/selectors';
import CatalogBannerSecondary from '../catalogBannerSecondary/CatalogBannerSecondary';
import BookCommentsList from '../bookCommentsList/BookCommentsList';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import { showNotification } from '../../store/notificationSlice';
import { notificationType } from '../../types/notificationTypes';
type Props = {
  slug: string;
  bookId: number;
};

const BookComments: React.FC<Props> = (props) => {
  const [commentsList, setCommentList] = React.useState<CommentType[] | null>(
    null
  );
  const userData = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    (async () => {
      try {
        const response = await bookRequersts.getComments(props.slug);
        if (response.statusText !== 'OK') throw new Error();
        setCommentList(response.data);
      } catch (error) {
        dispatch(
          showNotification({
            isVisible: true,
            text: 'Internal server error. Please reload the page.',
            type: notificationType.Error,
          })
        );
        console.log(error);
      }
    })();
  }, [props.slug]);

  const onClickPostCommentButtonHandler = async (commntText: string) => {
    const response = await bookRequersts.addComment(
      commntText,
      userData.id,
      props.bookId
    );
    const notNullCommenstList: CommentType[] =
      commentsList !== null ? [...commentsList] : [];
    notNullCommenstList.push(response.data);
    setCommentList(notNullCommenstList);
  };

  return (
    <StyledBookComments>
      <>
        <h2 className="comment-list-title">Comments</h2>
        {commentsList === null ? (
          <h1>loading...</h1>
        ) : (
          <BookCommentsList commentsList={commentsList} />
        )}
        <ConditionalRenderServiceComponent
          getStateCallback={selectIfUserExists}
        >
          <div className="comment-list__comment-input-container">
            <BookAddCommentInput
              onClickPostButtonHandler={onClickPostCommentButtonHandler}
            />
          </div>
          <CatalogBannerSecondary />
        </ConditionalRenderServiceComponent>
      </>
    </StyledBookComments>
  );
};

export default BookComments;
