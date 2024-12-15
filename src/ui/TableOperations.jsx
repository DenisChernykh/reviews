import Filter from './Filter';
import SortBy from './SortBy';

function TableOperations() {
  return (
    <div className=" flex gap-7 mb-4">
      <Filter
        options={[
          { value: 'all', label: 'Все' },
          { value: 'Google', label: 'Google' },
          { value: 'Яндекс', label: 'Яндекс' },
          { value: '2ГИС', label: '2ГИС' },
        ]}
      />
      <SortBy
        options={[
          {
            value: 'date-asc',
            label: 'Сортировать по времени (сначала старые)',
          },
          {
            value: 'date-desc',
            label: 'Сортировать по времени (сначала новые)',
          },
          {
            value: 'rating-asc',
            label: 'Сортировать по рейтингу (с низкой оценкой)',
          },
          {
            value: 'rating-desc',
            label: 'Сортировать по рейтингу (с высоко оценкой)',
          },
        ]}
      />
    </div>
  );
}

export default TableOperations;
