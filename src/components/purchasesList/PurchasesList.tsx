import React from 'react';
import StyledPurchasesList from './PurchasesList.style';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import {
  selectLikedList,
  selectUserPurchisesList,
} from '../../store/selectors';
import PurchaseItem from '../purchaseItem/PurchaseItem';
import { PurchaseItemType } from '../../types/userStaffTypes';
import userStaffRequests from '../../api/userStaffAPI/userStaffRequests';
import UserStaffEmpty from '../userStaffEmpty/UserStaffEmpty';
import { showStandartErrorNotification } from '../../store/notificationSlice';
import GridLoader from 'react-spinners/GridLoader';
import { createRange } from '../../services/usePagination';

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
        dispatch(showStandartErrorNotification);
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
        staff="purchases list"
        text1="All your purchases will be shown here."
        text2="Also you can go to the catalogue."
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
