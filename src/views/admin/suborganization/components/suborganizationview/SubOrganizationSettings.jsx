const SubOrganizationSettings = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-2xl font-bold">School Settings</h1>

      {/* System */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">System Settings</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Setting label="Timezone" value="UTC -5" />
          <Setting label="Academic Year" value="2024 / 2025" />
          <Setting label="Status" value="Active" />
        </div>
      </div>

      {/* Academic */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Academic Controls</h2>
        <Toggle label="Enable Exams Module" />
        <Toggle label="Allow Online Assignments" />
        <Toggle label="Enable Parent Portal" />
      </div>

      {/* Security */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Security & Access</h2>
        <Toggle label="Role-Based Access Control" />
        <Toggle label="Two-Factor Authentication" />
      </div>
    </div>
  );
};

const Setting = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-sm text-gray-500">{label}</span>
    <input
      defaultValue={value}
      className="rounded-xl border px-4 py-2 text-sm"
    />
  </div>
);

const Toggle = ({ label }) => (
  <div className="flex items-center justify-between py-2">
    <span className="text-sm">{label}</span>
    <input type="checkbox" className="h-5 w-5" />
  </div>
);

export default SubOrganizationSettings;
