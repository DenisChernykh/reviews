import FilterByPlatfrom from './FilterByPlatfrom';
import FilterByRating from './FilterByRating';

function Filter({ options }) {
  return (
    <div className=" flex gap-4	">
      <FilterByPlatfrom options={options} />
      <FilterByRating />
    </div>
  );
}

export default Filter;
