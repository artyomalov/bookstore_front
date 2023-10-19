import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import { GenreType } from '../../types/filtersTypes';
import StyledDropDownSelector from './SortByGenreDropdownMenu.style';
import SingleGenre from '../singleGenre/SingleGenre';
import { setSelectedGenres } from '../../store/filtersSlice';
import ShowFilterButton from '../showFilterButton/ShowFilterButton';

type Props = {
  filterId: string;
  isOpen: boolean;
  openFilterButtonClickHandler: (id: string) => void;
};

const SortByGenreDropdownMenu: React.FC<Props> = (props) => {
  const [genresIdsArray, setGenresIdsArray] = React.useState<number[]>([]);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setSelectedGenres(genresIdsArray));
  }, [genresIdsArray, dispatch]);

  const genresList: GenreType[] = useAppSelector(
    (state) => state.filters.genres
  );

  const setGenresStateHandler = (genreId: number) => {
    const alreadyInArrayFlag = genresIdsArray.find((el) => el === genreId);
    if (alreadyInArrayFlag === undefined) {
      const updatedGenressArray = [...genresIdsArray, genreId];
      setGenresIdsArray(updatedGenressArray);
    }
    if (alreadyInArrayFlag !== undefined) {
      const stateCopy = [...genresIdsArray];
      const removedElementInder = stateCopy.findIndex((id) => id === genreId);
      stateCopy.splice(removedElementInder, 1);
      setGenresIdsArray(stateCopy);
    }
  };

  return (
    <StyledDropDownSelector displaylist={props.isOpen ? '666px' : '0'}>
      <ShowFilterButton
        buttonText="Genre"
        clickButtonHandler={props.openFilterButtonClickHandler}
        filterId={props.filterId}
      />
      <ul className="genres__genres-list">
        {genresList.map((genre) => {
          return (
            <SingleGenre
              key={genre.id}
              genreId={genre.id}
              genreName={genre.genreName}
              setGenresStateHandler={setGenresStateHandler}
            />
          );
        })}
      </ul>
    </StyledDropDownSelector>
  );
};

export default SortByGenreDropdownMenu;
