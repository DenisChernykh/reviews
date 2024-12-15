import Table from '../../ui/Table';
import { formatDate } from '../../utils/helpers';

function ReviewRow({ review }) {
  const { platform, rating, date, text } = review;
  const rawData = date;

  return (
    <Table.Row>

      <div>{platform}</div>
      <div>{rating}</div>
      <div>{formatDate(rawData)}</div>
      <div>{text}</div>
    </Table.Row>
  );
}

export default ReviewRow;
