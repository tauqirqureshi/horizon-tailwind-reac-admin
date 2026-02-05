import { FiFilter, FiUser, FiClock } from "react-icons/fi";

const logs = [
  {
    id: 1,
    user: "John Doe",
    role: "Admin",
    action: "Updated role permissions",
    module: "Roles & Permissions",
    severity: "High",
    time: "2025-01-30 10:45 AM",
    ip: "192.168.1.20",
  },
  {
    id: 2,
    user: "Emily Johnson",
    role: "Teacher",
    action: "Updated student grades",
    module: "Academics",
    severity: "Medium",
    time: "2025-01-30 09:20 AM",
    ip: "192.168.1.44",
  },
  {
    id: 3,
    user: "System",
    role: "System",
    action: "Automatic backup completed",
    module: "System",
    severity: "Low",
    time: "2025-01-30 02:10 AM",
    ip: "—",
  },
];

const severityStyles = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

const AuditActivityLogs = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl border bg-white  p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Audit & Activity Logs
          </h1>
          <p className="text-sm text-gray-500">
            Track all system and user-level actions
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-4 rounded-xl border bg-gray p-4 md:grid-cols-4">
        <div>
          <label className="text-xs font-medium text-gray-500">User Role</label>
          <select className="mt-1 w-full rounded-lg border px-3 py-2 text-sm">
            <option>All</option>
            <option>Admin</option>
            <option>Teacher</option>
            <option>Student</option>
            <option>System</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-gray-500">Module</label>
          <select className="mt-1 w-full rounded-lg border px-3 py-2 text-sm">
            <option>All</option>
            <option>Roles & Permissions</option>
            <option>Academics</option>
            <option>Finance</option>
            <option>Settings</option>
            <option>System</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-gray-500">Date</label>
          <input
            type="date"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
          />
        </div>

        <div className="flex items-end">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm text-white">
            <FiFilter />
            Apply Filters
          </button>
        </div>
      </div>

      {/* Logs Table */}
      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="w-full text-sm">
          <thead className="border-b bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left">User</th>
              <th className="px-4 py-3 text-left">Role</th>
              <th className="px-4 py-3 text-left">Action</th>
              <th className="px-4 py-3 text-left">Module</th>
              <th className="px-4 py-3 text-left">Severity</th>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">IP Address</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium flex items-center gap-2">
                  <FiUser className="text-gray-400" />
                  {log.user}
                </td>
                <td className="px-4 py-3">{log.role}</td>
                <td className="px-4 py-3">{log.action}</td>
                <td className="px-4 py-3">{log.module}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${severityStyles[log.severity]}`}
                  >
                    {log.severity}
                  </span>
                </td>
                <td className="px-4 py-3 flex items-center gap-2 text-gray-500">
                  <FiClock />
                  {log.time}
                </td>
                <td className="px-4 py-3 text-gray-500">{log.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="rounded-xl border bg-gray-50 p-4 text-xs text-gray-600">
        ⚠️ Audit logs are system-generated and cannot be edited or deleted.
        All actions are recorded for security and compliance purposes.
      </div>
    </div>
  );
};

export default AuditActivityLogs;
