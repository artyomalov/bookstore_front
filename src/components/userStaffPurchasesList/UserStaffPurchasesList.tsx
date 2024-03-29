import React from 'react';
import StyledPurchasesList from './UserStaffPurchasesList.style';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import {
  selectLikedList,
  selectUserPurchisesList,
} from '../../store/selectors';
import PurchaseItem from '../userStaffPurchaseItem/UserStaffPurchaseItem';
import { PurchaseItemType } from '../../types/userStaffTypes';
import userStaffRequests from '../../api/userStaffAPI/userStaffRequests';
import UserStaffEmpty from '../userStaffEmpty/UserStaffEmpty';
import { showNotification } from '../../store/notificationSlice';
import GridLoader from 'react-spinners/GridLoader';
import { createRange } from '../../services/usePagination';
import { notificationType } from '../../types/notificationTypes';

const PurchasesList: React.FC = () => {
  const [purchasesList, setPurchasesList] = React.useState<
    PurchaseItemType[] | null
  >(null);
  const dispatch = useAppDispatch();
  const purchasesListId = useAppSelector(selectUserPurchisesList);
  React.useEffect(() => {
    (async () => {
      try {
        const response = await userStaffRequests.getUserPurchases(
          purchasesListId
        );
        if (response.data) setPurchasesList(response.data.purchases);
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
  }, []);
  return purchasesList !== null ? (
    purchasesList.length > 0 ? (
      <StyledPurchasesList>
        {purchasesList.map((purchaseItem) => (
          <PurchaseItem key={purchaseItem.id} {...purchaseItem} />
        ))}
      </StyledPurchasesList>
    ) : (
      <UserStaffEmpty
        title="You purchases list is empty"
        text1="All your purchases will be shown here."
        text2="You can go to the catalog select something."
      />
    )
  ) : (
    <>
      {createRange(1, 4).map((item) => (
        <GridLoader
          key={item}
          color="#344966"
          loading={true}
          cssOverride={{
            display: 'block',
            margin: '38px 50px 132px 50px',
            borderColor: '#344966',
          }}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          speedMultiplier={0.4}
        />
      ))}
    </>
  );
};

export default PurchasesList;
