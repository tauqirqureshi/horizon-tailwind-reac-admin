import React, { useState, useMemo } from "react";
import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import {
  MdCancel,
  MdCheckCircle,
  MdOutlineError,
  MdArrowDropUp,
  MdArrowDropDown,
} from "react-icons/md";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { format } from "date-fns";

const columnHelper = createColumnHelper();

export default function ComplexTable({ tableData }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = useMemo(() => [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex items-center space-x-3">
            <img
              src={row.profilePic}
              alt={row.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {row.name}
            </p>
          </div>
        );
      },
      filterFn: "includesString",
      meta: {
        filterType: "text"
      }
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
      filterFn: "includesString",
      meta: {
        filterType: "text"
      }
    }),
    columnHelper.accessor("contactnumber", {
      header: "Contact Number",
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
      filterFn: "includesString",
      meta: {
        filterType: "text"
      }
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const value = info.getValue();
        const icons = {
          1: <MdCheckCircle className="text-green-500 me-1" />,
          2: <MdCancel className="text-red-500 me-1" />,
          3: <MdOutlineError className="text-amber-500 me-1" />,
        };
        return (
          <div className="flex items-center">
            {icons[value] || null}
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {value}
            </p>
          </div>
        );
      },
      filterFn: "equals",
      meta: {
        filterType: "select",
        options: [
          { value: 1, label: "Active" },
          { value: 2, label: "Inactive" },
          { value: 3, label: "Error" },
        ]
      }
    }),
    columnHelper.accessor("created_at", {
      header: "Created Date",
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()
            ? format(new Date(info.getValue()), "dd MMM yyyy")
            : "N/A"}
        </p>
      ),
      filterFn: "includesString",
      meta: {
        filterType: "text"
      }
    }),
    columnHelper.accessor("locked_until", {
      header: "Locked Until",
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()
            ? format(new Date(info.getValue()), "dd MMM yyyy")
            : "N/A"}
        </p>
      ),
      filterFn: "includesString",
      meta: {
        filterType: "text"
      }
    }),
  ], []);

  const data = useMemo(() => [...tableData], [tableData]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: false,
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const paginatedRows = table.getRowModel().rows.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(table.getRowModel().rows.length / rowsPerPage);

  const renderColumnFilter = (column) => {
    const filterType = column.columnDef.meta?.filterType;

    if (filterType === "text") {
      return (
        <input
          type="text"
          value={column.getFilterValue() ?? ""}
          onChange={(e) => column.setFilterValue(e.target.value)}
          placeholder="Search..."
          className="w-full px-2 py-1 border rounded text-sm mt-1"
        />
      );
    }

    if (filterType === "select") {
      const options = column.columnDef.meta?.options || [];
      return (
        <select
          value={column.getFilterValue() ?? ""}
          onChange={(e) => column.setFilterValue(e.target.value)}
          className="w-full px-2 py-1 border rounded text-sm mt-1"
        >
          <option value="">All</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      );
    }

    return null;
  };

  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          User Table
        </div>
        <CardMenu />
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-2 text-start align-top">
                    <div className="flex flex-col">
                      <div
                        onClick={header.column.getToggleSortingHandler()}
                        className="flex items-center cursor-pointer text-xs font-bold text-gray-600 dark:text-white"
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getIsSorted() === "asc" && (
                          <MdArrowDropUp className="ml-1" />
                        )}
                        {header.column.getIsSorted() === "desc" && (
                          <MdArrowDropDown className="ml-1" />
                        )}
                      </div>
                      {header.column.getCanFilter() && renderColumnFilter(header.column)}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {paginatedRows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
        <div className="text-sm text-gray-700 dark:text-white">
          Page {currentPage} of {totalPages}
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="go-to-page" className="text-sm text-gray-700 dark:text-white">
            Go to page:
          </label>
          <input
      type="number"
      min={1}
      max={totalPages}
      value={currentPage}
      onChange={(e) => {
        const page = e.target.value ? Number(e.target.value) : 1;
        setCurrentPage(Math.min(Math.max(page, 1), totalPages));
      }}
      className="w-16 px-2 py-1 border rounded-md text-sm"
    />
  </div>

  {/* Rows per page selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="page-size" className="text-sm text-gray-700 dark:text-white">
            Show
          </label>
          <select
            id="page-size"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page when changing page size
            }}
            className="px-2 py-1 border rounded-md text-sm"
          >
            {[5, 10, 20, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>      

        {/* Prev/Next Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </Card>
  );
}
