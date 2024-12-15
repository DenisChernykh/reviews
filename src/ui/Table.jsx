// import TableBody from './TableBody';
// import TableHeader from './TableHeader';

// function Table() {
//   return (
//     <table className=" w-full ">
//       <TableHeader />
//       <TableBody />
//     </table>
//   );
// }

// export default Table;

function Table({ children }) {
  return (
    <div className="border border-grey-200 text-lg bg-grey-0 rounded-lg overflow-hidden w-1/2">
      {children}
    </div>
  );
}

function Header({ children }) {
  return (
    <div
      role="row"
      className="grid grid-cols-[1fr,1fr,1fr,3fr] gap-x-12 p-4 bg-grey-50 border-b border-grey-100 uppercase tracking-wider font-semibold text-grey-600"
    >
      {children}
    </div>
  );
}

function Row({ children }) {
  return (
    <div
      role="row"
      className="grid grid-cols-[1fr_1fr_1fr_3fr] gap-x-12 p-3 border-b border-grey-100"
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length)
    return (
      <p className="text-xl font-medium text-center my-6">No data to show</p>
    );
  return <section className="my-1">{data.map(render)}</section>;
}

function Footer({ children }) {
  return (
    <footer className="bg-grey-50 flex justify-center py-3">
      {children || null}
    </footer>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
