import React from 'react';
import headerSearch from '../../assets/img/header_search.svg';
import StyledSearch from './HeaderSearchField.style';
import { useNavigate } from 'react-router';

const HeaderSearchField: React.FC = () => {
  const [searchInputData, setSearchInputData] = React.useState('');
  const navigate = useNavigate();
  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputData(e.target.value);
  };

  const onEnterKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (e.code !== 'Enter' && e.code !== 'NumpadEnter') ||
      searchInputData === ''
    )
      return;
    navigate('/search', { state: searchInputData });
    setSearchInputData('');
  };

  return (
    <StyledSearch>
      <img src={headerSearch} />
      <input
        className="header__input"
        onChange={onInputHandler}
        placeholder="search"
        value={searchInputData}
        onKeyDown={onEnterKeyDownHandler}
      />
    </StyledSearch>
  );
};

export default HeaderSearchField;
