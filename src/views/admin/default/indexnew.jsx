import {
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineShieldCheck,
} from "react-icons/hi";

import { HiOutlineChip } from "react-icons/hi";


const StatCard = ({ icon: Icon, label, value, sub }) => (
  <div className="flex items-center gap-4 rounded-2xl border bg-white p-6 shadow-sm">
    <div className="rounded-xl bg-gray-100 p-3 text-gray-700">
      <Icon size={24} />
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      {sub && <p className="text-xs text-gray-400">{sub}</p>}
    </div>
  </div>
);

const SuperAdminDashboard = () => {
  
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Header */}
      {/* <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Super Admin Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          System-wide overview & control center
        </p>
      </div> */}

      {/* System Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={HiOutlineOfficeBuilding}
          label="Organizations"
          value="42"
          sub="Active institutions"
        />
        <StatCard
          icon={HiOutlineUsers}
          label="Total Users"
          value="12,480"
          sub="Across all organizations"
        />
        <StatCard
          icon={HiOutlineShieldCheck}
          label="Roles & Permissions"
          value="20 Roles"
          sub="RBAC enabled"
        />
        <StatCard
          icon={HiOutlineChip}
          label="System Events"
          value="1,248"
          sub="Last 24 hours"
        />
      </div>

      {/* Global System Metrics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-6">
        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs text-gray-500">Total Organizations</p>
          <p className="text-2xl font-bold">124</p>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs text-gray-500">Active Organizations</p>
          <p className="text-2xl font-bold text-green-600">117</p>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs text-gray-500">Total Users</p>
          <p className="text-2xl font-bold">18,462</p>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs text-gray-500">Admins</p>
          <p className="text-2xl font-bold">642</p>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs text-gray-500">Teachers</p>
          <p className="text-2xl font-bold">6,983</p>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs text-gray-500">Students</p>
          <p className="text-2xl font-bold">10,837</p>
        </div>
      </div>


      {/* System Health */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">System Health</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">API Service</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
              Operational
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Auth Service</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
              Healthy
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Database</span>
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
              Moderate Load
            </span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Recent System Activity</h2>
        <ul className="space-y-3 text-sm">
          <li className="flex justify-between">
            <span>New organization created: Bright Future School</span>
            <span className="text-gray-400">10 mins ago</span>
          </li>
          <li className="flex justify-between">
            <span>Role permissions updated: Teacher</span>
            <span className="text-gray-400">1 hour ago</span>
          </li>
          <li className="flex justify-between">
            <span>New Super Admin added</span>
            <span className="text-gray-400">Yesterday</span>
          </li>
        </ul>
      </div>

      {/* Audit & Security Logs */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Audit & Security Logs</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-gray-500">
              <tr>
                <th className="py-3 text-left">Event</th>
                <th className="py-3 text-left">Actor</th>
                <th className="py-3 text-left">Severity</th>
                <th className="py-3 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">Permission Changed</td>
                <td className="py-3">Super Admin</td>
                <td className="py-3">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs text-red-700">
                    High
                  </span>
                </td>
                <td className="py-3 text-gray-500">2 hours ago</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">User Disabled</td>
                <td className="py-3">Org Admin</td>
                <td className="py-3">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
                    Medium
                  </span>
                </td>
                <td className="py-3 text-gray-500">Yesterday</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      
      {/* System Modules */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">System Modules</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            "User Management",
            "Organization Management",
            "Roles & Permissions",
            "Audit Logs",
            "Billing & Finance",
            "Academics",
            "Attendance",
            "Reports & Analytics",
          ].map((module) => (
            <div
              key={module}
              className="flex items-center justify-between rounded-xl border p-4"
            >
              <span className="text-sm font-medium">{module}</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                Enabled
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Admin Actions Summary */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Admin Actions (Last 7 Days)</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div>
            <p className="text-sm text-gray-500">Users Created</p>
            <p className="text-xl font-semibold">128</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Users Disabled</p>
            <p className="text-xl font-semibold">14</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Role Updates</p>
            <p className="text-xl font-semibold">32</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Critical Events</p>
            <p className="text-xl font-semibold text-red-600">4</p>
          </div>
        </div>
      </div>

    {/* Roles & Permission Summary */}
<div className="rounded-2xl border bg-white p-6 shadow-sm">
  <h2 className="mb-4 text-lg font-semibold">Roles & Permission Control</h2>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
    <div>
      <p className="text-sm text-gray-500">Total Roles</p>
      <p className="text-xl font-semibold">20</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Custom Roles</p>
      <p className="text-xl font-semibold">8</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Permission Rules</p>
      <p className="text-xl font-semibold">146</p>
    </div>
  </div>

  <p className="mt-4 text-xs text-gray-400">
    RBAC enforced across organizations, users, and modules
  </p>
</div>



{/* System Usage */}
<div className="rounded-2xl border bg-white p-6 shadow-sm">
  <h2 className="mb-4 text-lg font-semibold">System Usage Statistics</h2>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
    <div>
      <p className="text-sm text-gray-500">Daily Active Users</p>
      <p className="text-xl font-semibold">9,324</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Monthly Active Users</p>
      <p className="text-xl font-semibold">15,880</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Peak Concurrent Users</p>
      <p className="text-xl font-semibold">1,204</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Avg Session Time</p>
      <p className="text-xl font-semibold">18m 42s</p>
    </div>
  </div>
</div>
   

{/* Security Overview */}
<div className="rounded-2xl border bg-white p-6 shadow-sm">
  <h2 className="mb-4 text-lg font-semibold">Security & Authentication</h2>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
    <div>
      <p className="text-sm text-gray-500">Login Attempts (24h)</p>
      <p className="text-xl font-semibold">12,483</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Failed Logins</p>
      <p className="text-xl font-semibold text-yellow-600">312</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Locked Accounts</p>
      <p className="text-xl font-semibold text-red-600">18</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">2FA Enabled</p>
      <p className="text-xl font-semibold">63%</p>
    </div>
  </div>
</div>




{/* Role Impact */}
<div className="rounded-2xl border bg-white p-6 shadow-sm">
  <h2 className="mb-4 text-lg font-semibold">Role Impact Analysis</h2>

  <table className="w-full text-sm">
    <thead className="border-b text-gray-500">
      <tr>
        <th className="py-3 text-left">Role</th>
        <th className="py-3 text-left">Users</th>
        <th className="py-3 text-left">Permissions</th>
        <th className="py-3 text-left">Critical Access</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="py-3">Principal</td>
        <td className="py-3">124</td>
        <td className="py-3">48</td>
        <td className="py-3 text-green-600">Yes</td>
      </tr>
      <tr className="border-b">
        <td className="py-3">Teacher</td>
        <td className="py-3">6,983</td>
        <td className="py-3">22</td>
        <td className="py-3 text-yellow-600">Limited</td>
      </tr>
      <tr className="border-b">
        <td className="py-3">Super Admin</td>
        <td className="py-3">12</td>
        <td className="py-3">ALL</td>
        <td className="py-3 text-red-600">Full</td>
      </tr>
    </tbody>
  </table>
</div>


{/* Audit Severity */}
<div className="rounded-2xl border bg-white p-6 shadow-sm">
  <h2 className="mb-4 text-lg font-semibold">Audit Event Severity</h2>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
    <div>
      <p className="text-sm text-gray-500">Info</p>
      <p className="text-xl font-semibold">8,421</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Warning</p>
      <p className="text-xl font-semibold text-yellow-600">1,294</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Critical</p>
      <p className="text-xl font-semibold text-red-600">42</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Resolved</p>
      <p className="text-xl font-semibold text-green-600">98%</p>
    </div>
  </div>
</div>



{/* Data Growth */}
<div className="rounded-2xl border bg-white p-6 shadow-sm">
  <h2 className="mb-4 text-lg font-semibold">Data & Storage</h2>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
    <div>
      <p className="text-sm text-gray-500">Total Storage Used</p>
      <p className="text-xl font-semibold">3.8 TB</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Avg Growth / Month</p>
      <p className="text-xl font-semibold">+120 GB</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Documents Stored</p>
      <p className="text-xl font-semibold">482,921</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Backups Status</p>
      <p className="text-xl font-semibold text-green-600">Healthy</p>
    </div>
  </div>
</div>



      {/* Risk & Compliance */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Risk & Compliance</h2>

        <table className="w-full text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="py-3 text-left">Organization</th>
              <th className="py-3 text-left">Compliance</th>
              <th className="py-3 text-left">Risk Level</th>
              <th className="py-3 text-left">Last Audit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3">Green Valley High School</td>
              <td className="py-3 text-green-600">Compliant</td>
              <td className="py-3">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                  Low
                </span>
              </td>
              <td className="py-3 text-gray-500">2 days ago</td>
            </tr>
            <tr className="border-b">
              <td className="py-3">Bright Future Academy</td>
              <td className="py-3 text-yellow-600">Partial</td>
              <td className="py-3">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
                  Medium
                </span>
              </td>
              <td className="py-3 text-gray-500">1 week ago</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default SuperAdminDashboard;
