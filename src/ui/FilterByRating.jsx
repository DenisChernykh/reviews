import { useDispatch, useSelector } from 'react-redux';
import {

  setMaxRating,
  setMinRating,
} from '../features/reviews/reviewsSlice';


function FilterByRating() {
  const dispatch = useDispatch();

  const minRating = useSelector((state) => state.reviews.minRating);
  const maxRating = useSelector((state) => state.reviews.maxRating);
  function handleMinChange(e) {
    dispatch(setMinRating(+e.target.value));
  }
  function handleMaxChange(e) {
    dispatch(setMaxRating(+e.target.value));
  }


  return (
    <div>
      <div>
        <label>
          Минимальная оценка:
          <select value={minRating} onChange={handleMinChange}>
            {[...Array(5).keys()].map((i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Максимальная оценка:
          <select value={maxRating} onChange={handleMaxChange}>
            {[...Array(10).keys()].map((i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}

export default FilterByRating;
