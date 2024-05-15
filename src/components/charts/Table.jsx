import React from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

import { useTable, useSortBy, usePagination } from 'react-table';

function TableHOC({
  columns,
  data=[],
  containerClassname,
  heading,
  showPagination = false,
}) {
  const options = React.useMemo(() => ({ columns, data,
    initialState: {
      pageSize: 6,
    },
  }), [columns, data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    pageCount,
    state: { pageIndex },
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(options, useSortBy, usePagination);

  return (
    <div className={containerClassname}>
      <h2 className="heading font-bold text-2xl">{heading}</h2>

      <table className="table" {...getTableProps()}>
        <thead>
        {headerGroups?.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers?.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                {column.isSorted && (
                  <span>
                    {" "}
                    {column.isSortedDesc ? (
                      <AiOutlineSortDescending />
                    ) : (
                      <AiOutlineSortAscending />
                    )}
                  </span>
                )}
              </th>
            ))}
          </tr>
        ))}
        
        </thead>
        <tbody {...getTableBodyProps()}>
        {page.map((row, rowIndex) => {
          prepareRow(row);
      
          return (
            <tr key={rowIndex} {...row.getRowProps()}>
              {row.cells.map((cell, cellIndex) => (
                <td key={cellIndex} {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
      
      </table>

      {showPagination && (
        <div className="table-pagination">
          <button disabled={!canPreviousPage} onClick={previousPage}>
            Prev
          </button>
          <span>{`${pageIndex + 1} of ${pageCount}`}</span>
          <button disabled={!canNextPage} onClick={nextPage}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};


export default TableHOC;
