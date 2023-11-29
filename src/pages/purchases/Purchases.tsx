import React from 'react';
import StyledPurchases from './Purchases.style';
import PurchasesList from '../../components/purchasesList/PurchasesList';
const Purchases: React.FC = () => {
  return (
    <StyledPurchases>
      <PurchasesList />
    </StyledPurchases>
  );
};

export default Purchases;
