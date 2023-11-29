import React from 'react';
import StyledPurchasesList from './PurchasesList.style';
import { useAppSelector } from '../../store/typedHooks';
import {
  selectLikedList,
  selectUserPurchisesList,
} from '../../store/selectors';
import PurchaseItem from '../purchaseItem/PurchaseItem';
import { PurchaseItemType } from '../../types/userStaffTypes';
import userStaffRequests from '../../api/userStaffAPI/userStaffRequests';
import UserStaffEmpty from '../userStaffEmpty/UserStaffEmpty';

const PurchasesList: React.FC = () => {
  const [purchasesList, setPurchasesList] = React.useState<PurchaseItemType[]>(
    []
  );
  const purchasesListId = useAppSelector(selectUserPurchisesList);
  React.useEffect(() => {
    (async () => {
      try {
        const response = await userStaffRequests.getUserPurchases(
          purchasesListId
        );
        if (response.data) setPurchasesList(response.data.purchases);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return purchasesList.length > 0 ? (
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
  );
};

export default PurchasesList;
