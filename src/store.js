import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from './features/reviews/reviewsSlice';
import createSagaMiddleware from 'redux-saga';
import watchSetFilter from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchSetFilter);
