import React from 'react';
import StyledPurchases from './Purchases.style';
import PurchasesList from '../../components/userStaffPurchasesList/UserStaffPurchasesList';
const Purchases: React.FC = () => {
  return (
    <StyledPurchases>
      <PurchasesList />
    </StyledPurchases>
  );
};

export default Purchases;
