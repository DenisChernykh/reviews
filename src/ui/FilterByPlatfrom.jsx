import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/reviews/reviewsSlice';

function FilterByPlatfrom({ options }) {
  const [active, setActive] = useState('all');
  const dispatch = useDispatch();
  function handleClick(value) {
    setActive(value);
    dispatch(setFilter(value));
  }


  return (
    <div>
      <div className=" flex gap-4 p-2 rounded-md border shadow-sm">
        {options.map((option) => {
          return (
            <button
              className={`p-1 rounded-md transition-all duration-500 hover:bg-blue-500 hover:text-white ${
                active === option.value ? ' bg-blue-500 text text-white  ' : ''
              }`}
              key={option.value}
              onClick={() => handleClick(option.value)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterByPlatfrom;
