import { useState } from "react";

/* ------------------ Roles List ------------------ */
const roles = [
  "Principal",
  "Vice Principal",
  "Superintendent",
  "Academic Coordinator",
  "Academic Adviser",
  "Teacher",
  "Special Education Teacher",
  "Teaching Assistant",
  "Guidance Counselor",
  "Registrar",
  "Athletic Director",
  "Sports Coach",
  "School Nurse",
  "Custodian",
  "Maintenance Technician",
  "Groundskeeper",
  "Food Service Worker",
  "School Bus Driver",
  "Crossing Guard",
  "Webmaster",
];

/* ------------------ Modal Component ------------------ */
const Modal = ({ open, title, onClose, children, variant = "default" }) => {
  if (!open) return null;

  const variantStyles = {
    default: "bg-white",
    system: "bg-gray-900 text-white border border-gray-700",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={`w-full max-w-xl rounded-xl p-6 shadow-xl ${variantStyles[variant]}`}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};


/* ------------------ Role Form ------------------ */
const RoleForm = ({ roleName, onClose }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Basic Info */}
      <div className="rounded-lg border p-4">
        <h3 className="mb-3 font-semibold text-sm">Role Details</h3>

        <div className="mb-3">
          <label className="text-sm font-medium">Role Name</label>
          <input
            defaultValue={roleName || ""}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            placeholder="Enter role name"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Category</label>
          <select className="mt-1 w-full rounded-lg border px-3 py-2 text-sm">
            <option>Academic</option>
            <option>Administrative</option>
            <option>Support Staff</option>
            <option>System</option>
          </select>
        </div>
      </div>

      {/* System Modules */}
      <div className="rounded-lg border bg-gray-50 p-4">
        <h3 className="mb-3 font-semibold text-sm">System Modules</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {[
            "Academics",
            "Finance",
            "HR",
            "Attendance",
            "Exams",
            "Transport",
            "Library",
            "Settings",
          ].map((module) => (
            <label key={module} className="flex items-center gap-2">
              <input type="checkbox" />
              {module}
            </label>
          ))}
        </div>
      </div>

      {/* Permissions */}
      <div className="rounded-lg border bg-gray-50 p-4">
        <h3 className="mb-3 font-semibold text-sm">Permissions</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {["View", "Create", "Edit", "Delete", "Approve"].map((perm) => (
            <label key={perm} className="flex items-center gap-2">
              <input type="checkbox" />
              {perm}
            </label>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="rounded-lg border px-4 py-2 text-sm"
        >
          Cancel
        </button>
        <button className="rounded-lg bg-brand-500 px-4 py-2 text-sm text-white">
          Save Role
        </button>
      </div>
    </div>
  );
};


/* ------------------ Main Component ------------------ */
const OrganizationRoles = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Organization Roles</h1>
        <button
          onClick={() => setAddOpen(true)}
          className="rounded-lg bg-brand-500 px-4 py-2 text-white"
        >
          Add New Role
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="w-full text-sm">
          <thead className="border-b bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left">Role Name</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Users</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {roles.map((role) => (
              <tr key={role} className="border-b">
                <td className="px-4 py-3 font-medium">{role}</td>
                <td className="px-4 py-3">Staff</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                    Active
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => {
                      setSelectedRole(role);
                      setEditOpen(true);
                    }}
                    className="mr-3 text-brand-500"
                  >
                    Edit
                  </button>
                  <button className="text-red-500">Disable</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Role Modal */}
      <Modal
        open={addOpen}
        title="Add Role"
        onClose={() => setAddOpen(false)}
      >
        <RoleForm onClose={() => setAddOpen(false)} />
      </Modal>

      {/* Edit Role Modal */}
      <Modal
        open={editOpen}
        title="Edit Role"
        onClose={() => setEditOpen(false)}
      >
        <RoleForm
          roleName={selectedRole}
          onClose={() => setEditOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default OrganizationRoles;
