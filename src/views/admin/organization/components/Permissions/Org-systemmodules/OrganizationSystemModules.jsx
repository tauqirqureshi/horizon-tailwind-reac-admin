const modules = [
  { name: "Academic System", enabled: true },
  { name: "Finance & Billing", enabled: true },
  { name: "HR & Payroll", enabled: true },
  { name: "Transport System", enabled: false },
  { name: "Library System", enabled: true },
  { name: "Examination System", enabled: true },
  { name: "Attendance System", enabled: true },
  { name: "Learning Management (LMS)", enabled: false },
];

const OrganizationSystemModules = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">System Modules</h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => (
          <div
            key={module.name}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="font-medium">{module.name}</p>
              <input type="checkbox" defaultChecked={module.enabled} />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Organization-level module access
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationSystemModules;
