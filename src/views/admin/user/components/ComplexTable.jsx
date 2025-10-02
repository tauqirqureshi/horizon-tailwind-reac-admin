import React, { useState, useMemo } from "react";
import CardMenu from "components/card/CardMenu";
import { MdEdit, MdDelete,MdRemoveRedEye } from "react-icons/md";
import { MdOfflinePin } from "react-icons/md";
import { LuUser } from 'react-icons/lu';
// import { LuUserRound } from 'react-icons/lu';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import Modal from "react-modal";


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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    contactnumber: "",
    status: 1,
    created_at: new Date(),
    locked_until: null,
    profilePic: ""
  });


  const handleAddUser = () => {
    // setTableData((prev) => [...prev, newUser]);
    setIsModalOpen(false);
    setNewUser({
      name: "",
      email: "",
      contactnumber: "",
      status: 1,
      created_at: new Date(),
      locked_until: null,
      profilePic: ""
    });
  };


  const columns = useMemo(() => [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex items-center space-x-3">
            {row.profilePic ? (
              <img
              src={row.profilePic}
              alt={row.name}
              className="w-8 h-8 rounded-full object-cover"
            />
              
            ) : (<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <LuUser className="text-gray-400 text-lg" />
              </div>)}
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
          1: <MdOfflinePin className="text-green-500 me-1" />,
          2: <MdCancel className="text-red-500 me-1" />,
          3: <MdOutlineError className="text-amber-500 me-1" />,
        };
        return (
          <div className="flex items-center">
            {icons[value] || null}
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              { value === 1 ? "Active" : value === 2 ? "Inactive" : value === 3 ? "Error" : "Unknown" }
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
     columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: (info) => {
      const row = info.row.original;

      return (
        <div className="flex gap-3">
          <button onClick={() => handleEdit(row)} title="view">
            <MdRemoveRedEye className="text-blue-500 hover:text-blue-700 text-lg" />
          </button>
          <button onClick={() => handleEdit(row)} title="Edit">
            <MdEdit className="text-blue-500 hover:text-blue-700 text-lg" />
          </button>

          <button onClick={() => handleDelete(row)} title="Delete">
            <MdDelete className="text-red-500 hover:text-red-700 text-lg" />
          </button>

        </div>
      );
    }
  })
  ], []);

  const handleEdit = (row) => {
  console.log("Edit clicked:", row);
  // You can trigger a modal or navigate to an edit route here
  };

  const handleDelete = (row) => {
  if (window.confirm(`Are you sure you want to delete ${row.name}?`)) {
    console.log("Delete confirmed:", row);
    // You can integrate API call or update state here
  }
};
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
        {/* <CardMenu /> */}
         <button
        onClick={() => setIsModalOpen(true)}
        className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white"
      >
        Add User
      </button>
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
      {/* Pagination Controls */}
<div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
  {/* Page info */}
  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
    Page {currentPage} of {totalPages}
  </div>

  {/* Go to page */}
  <div className="flex items-center gap-2">
    <label htmlFor="go-to-page" className="text-sm text-gray-700 dark:text-gray-300">
      Go to:
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
      className="w-16 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-navy-700 dark:bg-navy-800 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 outline-none"
    />
  </div>

  {/* Rows per page */}
  <div className="flex items-center gap-2">
    <label htmlFor="page-size" className="text-sm text-gray-700 dark:text-gray-300">
      Show
    </label>
    <select
      id="page-size"
      value={rowsPerPage}
      onChange={(e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1);
      }}
      className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-navy-700 dark:bg-navy-800 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 outline-none"
    >
      {[5, 10, 20, 50, 100].map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          {pageSize}
        </option>
      ))}
    </select>
  </div>

  {/* Prev/Next Buttons */}
  <div className="flex items-center gap-3">
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="px-4 py-2 rounded-lg bg-brand-900 text-white hover:bg-brand-800 shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <MdChevronLeft className="h-5 w-5" />
    </button>

    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-4 py-2 rounded-lg bg-brand-900 text-white hover:bg-brand-800 shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <MdChevronRight className="h-5 w-5" />
    </button>
  </div>
</div>


       {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="bg-white dark:bg-navy-900 p-6 rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn">
      <h2 className="text-xl font-semibold text-navy-700 dark:text-white mb-4 border-b pb-2">
        Add New User
      </h2>
      
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-navy-700 dark:bg-navy-800 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-navy-700 dark:bg-navy-800 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={newUser.contactnumber}
          onChange={(e) => setNewUser({ ...newUser, contactnumber: e.target.value })}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-navy-700 dark:bg-navy-800 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
        />
        <select
          value={newUser.status}
          onChange={(e) => setNewUser({ ...newUser, status: Number(e.target.value) })}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-navy-700 dark:bg-navy-800 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none"
        >
          <option value={1}>Active</option>
          <option value={2}>Inactive</option>
          <option value={3}>Error</option>
        </select>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={() => setIsModalOpen(false)}
          className="px-4 py-2 rounded-xl border border-gray-400 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-navy-700 transition"
        >
          Cancel
        </button>
        <button
          onClick={handleAddUser}
          className="px-4 py-2 rounded-xl bg-brand-900 text-white hover:bg-brand-800 shadow-md transition"
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}
    </Card>
  );
}
