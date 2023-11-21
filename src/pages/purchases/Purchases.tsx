import React from 'react';
import StyledPurchases from './Purchases.style';
import UserStaffEmpty from '../../components/userStaffEmpty/UserStaffEmpty';

const Purchases: React.FC = () => {
  return (
    <StyledPurchases>
      <UserStaffEmpty
        staff="purchases list"
        text1="All your purchases will be shown here."
        text2="Also you can go to the catalogue."
      />
    </StyledPurchases>
  );
};

export default Purchases;
