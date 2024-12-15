import ReviewsTable from './features/reviews/ReviewsTable';
import TableOperations from './ui/TableOperations';

function App() {
  return (
    <div className=" my-0 mx-auto flex justify-center items-center flex-col py-8	">
      <TableOperations />
      <ReviewsTable />
    </div>
  );
}

export default App;
