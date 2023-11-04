import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import { GenreType } from '../../types/bookTypes';
import { setSelectedGenres } from '../../store/genresSlice';
import FilterShowHideFilterButton from '../filterShowHideFilterButton/FilterShowHideFilterButton';
import StyledFilterGenre from './FilterGenre.style';
import FilterGenreItem from '../filterGenreItem/FilterGenreItem';
import FilterArrow from '../filterArrow/FilterArrow';
type Props = {
  filterId: string;
  isOpen: boolean;
  openFilterButtonClickHandler: (id: string) => void;
};

const FilterGenre: React.FC<Props> = (props) => {
  const [genresIdsArray, setGenresIdsArray] = React.useState<number[]>([]);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setSelectedGenres(genresIdsArray));
  }, [genresIdsArray, dispatch]);

  const genresList: GenreType[] = useAppSelector(
    (state) => state.genres.genres
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
    <StyledFilterGenre displaylist={props.isOpen ? '700px' : '0'}>
      <FilterShowHideFilterButton
        buttonText="Genre"
        clickButtonHandler={props.openFilterButtonClickHandler}
        filterId={props.filterId}
        isOpen={props.isOpen}
        buttonBackgroundColor="green"
      />
      <div className="genres__genres-list-container">
        <FilterArrow />
        <ul className="genres__genres-list">
          {genresList.map((genre) => {
            return (
              <FilterGenreItem
                key={genre.id}
                genreId={genre.id}
                genreName={genre.genreName}
                setGenresStateHandler={setGenresStateHandler}
              />
            );
          })}
        </ul>
      </div>
    </StyledFilterGenre>
  );
};

export default FilterGenre;
