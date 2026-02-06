
import AnalyticsOverview from "./components/AnalyticsOverview";


const Stat = ({ title, value }) => (
  <div className="rounded-xl border bg-white p-4">
    <p className="text-xs text-gray-500">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="rounded-2xl border bg-white p-6 shadow-sm">
    <h2 className="mb-4 text-lg font-semibold">{title}</h2>
    {children}
  </div>
);

const Metric = ({ label, value, status }) => {
  const colors = {
    green: "text-green-600",
    yellow: "text-yellow-600",
    red: "text-red-600",
  };
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`text-xl font-semibold ${colors[status] || ""}`}>
        {value}
      </p>
    </div>
  );
};

const ModuleRow = ({ name, schools, usage }) => (
  <tr className="border-b">
    <td className="py-3">{name}</td>
    <td className="py-3">{schools}</td>
    <td className="py-3">{usage}</td>
    <td className="py-3">
      <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
        Enabled
      </span>
    </td>
  </tr>
);





const SuperAdminDashboard = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
          System Healthy
        </span>
      </div>

      {/* Global KPIs */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-6">
        <Stat title="Organizations" value="124" />
        <Stat title="Schools" value="862" />
        <Stat title="Students" value="1,248,930" />
        <Stat title="Teachers" value="78,421" />
        <Stat title="Admins" value="4,682" />
        <Stat title="Active Users (Today)" value="312,883" />
      </div>

      {/* Platform Usage */}
      <Section title="Platform Usage & Performance">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <Metric label="Daily Active Users" value="312,883" />
          <Metric label="Monthly Active Users" value="1.1M" />
          <Metric label="Peak Concurrent Users" value="24,832" />
          <Metric label="Avg Session Time" value="21m 10s" />
        </div>
      </Section>

      {/* Organization & School Management */}
      <Section title="Organization & School Overview">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <Metric label="Active Organizations" value="117" status="green" />
          <Metric label="Suspended Organizations" value="7" status="red" />
          <Metric label="New Schools (30d)" value="42" />
          <Metric label="Pending Approvals" value="9" status="yellow" />
        </div>
      </Section>

      {/* Module Usage */}
      <Section title="System Modules Usage">
        <table className="w-full text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="py-3 text-left">Module</th>
              <th className="py-3 text-left">Enabled Schools</th>
              <th className="py-3 text-left">Usage</th>
              <th className="py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <ModuleRow name="Academics" schools="842" usage="High" />
            <ModuleRow name="Attendance" schools="801" usage="High" />
            <ModuleRow name="Exams & Grades" schools="784" usage="Medium" />
            <ModuleRow name="Fees & Billing" schools="612" usage="High" />
            <ModuleRow name="HR & Payroll" schools="489" usage="Medium" />
            <ModuleRow name="Communication" schools="862" usage="High" />
            <ModuleRow name="Reports & Analytics" schools="756" usage="Medium" />
          </tbody>
        </table>
      </Section>

      {/* Roles & Permissions */}
      <Section title="Roles & Access Control">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <Metric label="Total Roles" value="20+" />
          <Metric label="Permission Sets" value="64" />
          <Metric label="Critical Access Roles" value="12" status="red" />
          <Metric label="2FA Enabled Users" value="68%" status="green" />
        </div>
      </Section>

      {/* Subscription & Billing */}
      <Section title="Subscriptions & Billing">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <Metric label="Paid Organizations" value="98" />
          <Metric label="Trial Accounts" value="14" />
          <Metric label="Monthly Revenue" value="$482,300" />
          <Metric label="Renewals This Month" value="36" />
        </div>
      </Section>

      {/* Security & Compliance */}
      <Section title="Security & Compliance">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <Metric label="Login Attempts (24h)" value="1.8M" />
          <Metric label="Failed Logins" value="3,421" status="yellow" />
          <Metric label="Locked Accounts" value="42" status="red" />
          <Metric label="Audit Logs Today" value="28,934" />
        </div>
      </Section>

      {/* System Health */}
      <Section title="System Health & Infrastructure">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <Metric label="API Uptime" value="99.98%" status="green" />
          <Metric label="Avg API Response" value="142ms" />
          <Metric label="Storage Used" value="18.6 TB" />
          <Metric label="Backup Status" value="Healthy" status="green" />
        </div>
      </Section>



      <AnalyticsOverview />
    </div>
  );
};

export default SuperAdminDashboard;
