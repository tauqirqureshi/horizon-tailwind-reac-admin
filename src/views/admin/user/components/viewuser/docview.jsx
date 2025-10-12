const Docview = () => {
  const documents = [
    {
      id: 1,
      name: "User_Profile_Details.pdf",
      type: "PDF",
      size: "1.2 MB",
      url: "#",
    },
    {
      id: 2,
      name: "Contract_Agreement.docx",
      type: "Word",
      size: "856 KB",
      url: "#",
    },
    {
      id: 3,
      name: "Invoice_2025_01.xlsx",
      type: "Excel",
      size: "500 KB",
      url: "#",
    },
  ];

  return (
    <section className="w-full space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Uploaded Documents</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900 truncate">{doc.name}</h3>
                <p className="text-sm text-gray-500">
                  Type: {doc.type} • Size: {doc.size}
                </p>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-100">
                View
              </button>
              <button className="rounded-lg bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Docview;
