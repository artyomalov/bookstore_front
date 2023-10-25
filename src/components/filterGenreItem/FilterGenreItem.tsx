import React from 'react';
import StyledFilterGenreItem from './FilterGenreItem.style';

type Props = {
  genreId: number;
  genreName: string;
  setGenresStateHandler: (id: number) => void;
};

const FilterGenreItem: React.FC<Props> = (props) => {
  const [checked, setChecked] = React.useState(false);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    props.setGenresStateHandler(props.genreId);
  };

  return (
    <StyledFilterGenreItem checked={checked ? '1' : '0'}>
      <label className="genres__genre-label">
        <input
          className="genres__checkboks"
          type="checkbox"
          onChange={handleCheck}
          checked={checked}
        />
        <p className="genres__checkbox-circle">
          <span className="genres__checkbox-tick"></span>
        </p>
        <p className="genres__genre-name">{props.genreName}</p>
      </label>
    </StyledFilterGenreItem>
  );
};

export default FilterGenreItem;
