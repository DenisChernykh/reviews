import { put, select, takeEvery } from 'redux-saga/effects';
import {
  setFilter,
  setSort,
  setFilteredReviews,
  setMinRating,
  setMaxRating,
} from './features/reviews/reviewsSlice';

// Сага для фильтрации отзывов
function* filterAndSortReviewsSaga() {
  const reviews = yield select((state) => state.reviews.reviews);
  const filter = yield select((state) => state.reviews.filter);
  const minRating = yield select((state) => state.reviews.minRating);
  const maxRating = yield select((state) => state.reviews.maxRating);
  const sortOrder = yield select((state) => state.reviews.sortOrder);

  let filteredReviews = reviews;
  if (filter !== 'all') {
    filteredReviews = reviews.filter((review) => review.platform === filter);
  }
  filteredReviews = filteredReviews.filter(
    (review) => review.rating >= minRating && review.rating <= maxRating
  );
  const [field, direction] = sortOrder.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  filteredReviews.sort((a, b) => {
    if (field === 'date') {
      return (new Date(a.date) - new Date(b.date)) * modifier;
    }

    return (a[field] - b[field]) * modifier;
  });

  yield put(setFilteredReviews(filteredReviews));
}

function* watchSetFilterAndSort() {
  yield takeEvery(
    [setFilter.type, setMinRating.type, setMaxRating.type, setSort.type],
    filterAndSortReviewsSaga
  );
}

export default watchSetFilterAndSort;
