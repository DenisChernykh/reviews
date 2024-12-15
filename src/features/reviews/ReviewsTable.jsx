import { useDispatch, useSelector } from 'react-redux';
import Table from '../../ui/Table';
import ReviewRow from './ReviewRow';
import { getFilteredReviews, setInitialReviews } from './reviewsSlice';
import { useEffect } from 'react';

function ReviewsTable() {
  const dispatch = useDispatch();
  const reviews = useSelector(getFilteredReviews);

  useEffect(() => {
    dispatch(setInitialReviews());
  }, [dispatch]);

  return (
    <Table>
      <Table.Header>
        <div>Платформа</div>
        <div>Рейтинг</div>
        <div>Дата</div>
        <div>Отзыв</div>
      </Table.Header>
      <Table.Body
        data={reviews}
        render={(review) => <ReviewRow review={review} key={review.id} />}
      />
    </Table>
  );
}

export default ReviewsTable;
