import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [
    {
      id: 1,
      platform: 'Google',
      rating: 4,
      date: '2023-11-15T10:00:00Z',
      text: 'Отличный сервис!',
    },
    {
      id: 2,
      platform: 'Яндекс',
      rating: 3,
      date: '2023-11-14T09:00:00Z',
      text: 'Хорошо, но есть недочеты.',
    },
    {
      id: 3,
      platform: '2ГИС',
      rating: 5,
      date: '2023-11-13T08:00:00Z',
      text: 'Прекрасно!',
    },
    {
      id: 4,
      platform: 'Google',
      rating: 4.5,
      date: '2024-12-01T14:32:00Z',
      text: 'Отличный сервис, рекомендую!',
    },
    {
      id: 5,
      platform: 'Google',
      rating: 3.0,
      date: '2024-12-05T09:15:00Z',
      text: 'Неплохо, но есть минусы.',
    },
    {
      id: 6,
      platform: 'Яндекс',
      rating: 5.0,
      date: '2024-12-03T16:00:00Z',
      text: 'Очень хороший сервис! Приятно удивлен.',
    },
    {
      id: 7,
      platform: 'Яндекс',
      rating: 4.0,
      date: '2024-12-02T12:45:00Z',
      text: 'Хорошо, но можно улучшить поддержку.',
    },
    {
      id: 8,
      platform: '2ГИС',
      rating: 3.5,
      date: '2024-12-04T18:00:00Z',
      text: 'Удобное приложение, но с некоторыми ошибками.',
    },
    {
      id: 9,
      platform: '2ГИС',
      rating: 4.0,
      date: '2024-12-06T11:30:00Z',
      text: 'Хорошо, но есть некоторые недочеты.',
    },
  ],
  filteredReviews: [],
  filter: 'all',
  minRating: 1,
  maxRating: 5,
  sortOrder: 'date-asc',
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setFilteredReviews(state, action) {
      state.filteredReviews = action.payload;
    },
    setMinRating(state, action) {
      state.minRating = action.payload;
    },
    setMaxRating(state, action) {
      state.maxRating = action.payload;
    },
    setSort(state, action) {
      state.sortOrder = action.payload;
    },
    setInitialReviews(state) {
      state.filteredReviews = state.reviews;
    },
  },
});

export const getReviews = (state) => state.reviews.reviews;
export const getFilteredReviews = (state) => state.reviews.filteredReviews;
export const getFilter = (state) => state.reviews.filter;
export const getSortOrder = (state) => state.reviews.sortOrder;

export const {
  setFilter,
  setFilteredReviews,
  setMaxRating,
  setMinRating,
  setSort,
  setInitialReviews,
} = reviewsSlice.actions;
export default reviewsSlice.reducer;
