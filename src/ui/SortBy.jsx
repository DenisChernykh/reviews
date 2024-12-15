import { useDispatch } from 'react-redux';
import {

  setSort,
} from '../features/reviews/reviewsSlice';


function SortBy({ options }) {
  const dispatch = useDispatch();


  function handleChange(e) {
    dispatch(setSort(e.target.value));
  }



  return (
    <select onChange={handleChange}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}

export default SortBy;
