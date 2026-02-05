import { useState } from "react";

const EditSubOrganization = () => {
  const [form, setForm] = useState({
    name: "Green Valley High School",
    code: "GVHS-001",
    board: "State Board",
    medium: "English",
    email: "info@gvhs.edu",
    phone: "+1 234 567 890",
    address: "123 Education Lane, New York, USA",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-2xl font-bold">Edit School Details</h1>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {Object.entries(form).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm text-gray-500 capitalize">
                {key.replace("_", " ")}
              </label>
              <input
                name={key}
                value={value}
                onChange={handleChange}
                className="rounded-xl border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button className="rounded-xl border px-4 py-2 text-sm">
            Cancel
          </button>
          <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm text-white">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSubOrganization;
