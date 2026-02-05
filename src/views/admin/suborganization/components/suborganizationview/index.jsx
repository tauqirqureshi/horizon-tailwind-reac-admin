import { FiUsers, FiBookOpen, FiSettings } from "react-icons/fi";
import {
  HiOutlineAcademicCap,
  HiOutlineOfficeBuilding,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";


const StatCard = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div className="rounded-xl bg-gray-100 p-3 text-gray-700">
      <Icon size={22} />
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-xs text-gray-500">{label}</span>
    <span className="text-sm font-medium text-gray-900">{value}</span>
  </div>
);

const SubOrganizationView = () => {
    const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Sub Organization Details</h1>
        <p className="text-sm text-gray-500">Advanced school management view</p>
      </div>

      {/* Organization Summary */}
      <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
            <HiOutlineOfficeBuilding size={28} />
          </div>
          <div>
            <p className="text-lg font-semibold">Green Valley High School</p>
            <p className="text-sm text-gray-500">School • Education Unit</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button  onClick={() => navigate("/admin/sub-org-tables/edit-sub-organization/89")} className="rounded-xl border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100">
            Edit Details
          </button>
          <button onClick={() => navigate("/admin/sub-org-tables/sub-organization-settings/89")}  className="rounded-xl bg-brand-500 px-4 py-2 text-sm text-white hover:bg-brand-600">
            Settings
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={FiUsers} label="Students" value="1,240" />
        <StatCard icon={HiOutlineAcademicCap} label="Teachers" value="86" />
        <StatCard icon={FiBookOpen} label="Courses" value="48" />
        <StatCard icon={HiOutlineOfficeBuilding} label="Departments" value="12" />
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        {/* School Info */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">School Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <InfoRow label="School Code" value="GVHS-001" />
            <InfoRow label="Board" value="State Board" />
            <InfoRow label="Established" value="1998" />
            <InfoRow label="Medium" value="English" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Contact Details</h2>
          <div className="flex flex-col gap-3">
            <InfoRow label="Email" value="info@gvhs.edu" />
            <InfoRow label="Phone" value="+1 234 567 890" />
            <div className="flex items-start gap-2">
              <HiOutlineLocationMarker className="mt-1 text-gray-400" />
              <p className="text-sm text-gray-700">
                123 Education Lane, New York, USA
              </p>
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">System Settings</h2>
          <div className="flex flex-col gap-3">
            <InfoRow label="Timezone" value="UTC -5" />
            <InfoRow label="Academic Year" value="2024 / 2025" />
            <InfoRow label="Status" value="Active" />
          </div>
        </div>
      </div>

      {/* Admin Management */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Administrators</h2>
          <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm text-white hover:bg-brand-600">
            Add Admin
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-gray-500">
              <tr>
                <th className="py-3 text-left">Name</th>
                <th className="py-3 text-left">Email</th>
                <th className="py-3 text-left">Role</th>
                <th className="py-3 text-left">Status</th>
                <th className="py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 font-medium">John Doe</td>
                <td className="py-3 text-gray-500">john@school.com</td>
                <td className="py-3">School Admin</td>
                <td className="py-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                    Active
                  </span>
                </td>
                <td className="py-3 text-right">
                  <button className="mr-3 text-brand-500 hover:underline">Edit</button>
                  <button className="text-red-500 hover:underline">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Academic Overview */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Academic Overview</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <InfoRow label="Total Classes" value="64" />
          <InfoRow label="Active Batches" value="18" />
          <InfoRow label="Exams Scheduled" value="12" />
          <InfoRow label="Pass Rate" value="96%" />
        </div>
      </div>

      {/* Finance Overview */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Finance Overview</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <InfoRow label="Fee Structure" value="Defined" />
          <InfoRow label="Total Revenue" value="$1.2M / year" />
          <InfoRow label="Pending Dues" value="$84,000" />
          <InfoRow label="Scholarships" value="142 Students" />
        </div>
      </div>

            {/* Activity & Audit Logs */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
        <ul className="space-y-3 text-sm">
          <li className="flex justify-between text-gray-700">
            <span>Admin John Doe updated school profile</span>
            <span className="text-gray-400">2 hours ago</span>
          </li>
          <li className="flex justify-between text-gray-700">
            <span>New teacher account created</span>
            <span className="text-gray-400">Yesterday</span>
          </li>
          <li className="flex justify-between text-gray-700">
            <span>Fee structure updated for 2025 batch</span>
            <span className="text-gray-400">3 days ago</span>
          </li>
        </ul>
      </div>

      {/* School Roles & Job Descriptions */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">School Roles & Job Descriptions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-gray-500">
              <tr>
                <th className="py-3 text-left">Role</th>
                <th className="py-3 text-left">Avg Salary</th>
                <th className="py-3 text-left">Primary Duties</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="py-3 font-medium">Teacher</td><td className="py-3">$45,468</td><td className="py-3 text-gray-600">Plan curriculum, teach subjects, assess students</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Teaching Assistant</td><td className="py-3">$27,896</td><td className="py-3 text-gray-600">Support teachers, assist students, grading</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Custodian</td><td className="py-3">$34,387</td><td className="py-3 text-gray-600">Clean and maintain school facilities</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">School Nurse</td><td className="py-3">$58,793</td><td className="py-3 text-gray-600">Provide healthcare and emergency aid</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Guidance Counselor</td><td className="py-3">$53,089</td><td className="py-3 text-gray-600">Student counseling and academic guidance</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Athletic Director</td><td className="py-3">$65,271</td><td className="py-3 text-gray-600">Manage sports programs and budgets</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Vice Principal</td><td className="py-3">$80,058</td><td className="py-3 text-gray-600">Assist principal with operations</td></tr>
              <tr><td className="py-3 font-medium">Principal</td><td className="py-3">$101,583</td><td className="py-3 text-gray-600">Lead school, manage staff and policies</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* School Roles & Job Descriptions */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">School Roles & Job Descriptions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-gray-500">
              <tr>
                <th className="py-3 text-left">Role</th>
                <th className="py-3 text-left">Category</th>
                <th className="py-3 text-left">Avg Salary</th>
                <th className="py-3 text-left">Primary Duties</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="py-3 font-medium">Custodian</td><td>Facilities</td><td>$34,387</td><td>Clean and maintain school facilities</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Teaching Assistant</td><td>Academic Support</td><td>$27,896</td><td>Assist teachers and students</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Food Service Worker</td><td>Support</td><td>$22,930</td><td>Prepare and serve meals</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Teacher</td><td>Academic</td><td>$45,468</td><td>Teach subjects and assess students</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Crossing Guard</td><td>Safety</td><td>$33,980</td><td>Ensure student road safety</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Sports Coach</td><td>Athletics</td><td>$38,978</td><td>Train and manage sports teams</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">School Bus Driver</td><td>Transport</td><td>$44,239</td><td>Transport students safely</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Academic Coordinator</td><td>Academic Leadership</td><td>$48,183</td><td>Oversee curriculum delivery</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Academic Adviser</td><td>Student Support</td><td>$44,719</td><td>Guide academic planning</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Groundskeeper</td><td>Facilities</td><td>$36,183</td><td>Maintain outdoor areas</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Maintenance Technician</td><td>Facilities</td><td>$49,794</td><td>Repair and maintenance</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">School Nurse</td><td>Health</td><td>$58,793</td><td>Provide medical care</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Webmaster</td><td>IT</td><td>$61,267</td><td>Maintain school website</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Special Education Teacher</td><td>Academic</td><td>$56,126</td><td>Teach students with disabilities</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Registrar</td><td>Administration</td><td>$50,064</td><td>Manage student records</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Guidance Counselor</td><td>Student Support</td><td>$53,089</td><td>Student counseling</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Athletic Director</td><td>Leadership</td><td>$65,271</td><td>Oversee sports programs</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Vice Principal</td><td>Leadership</td><td>$80,058</td><td>Assist school management</td></tr>
              <tr className="border-b"><td className="py-3 font-medium">Superintendent</td><td>District Leadership</td><td>$91,641</td><td>Oversee district operations</td></tr>
              <tr><td className="py-3 font-medium">Principal</td><td>Leadership</td><td>$101,583</td><td>Manage school operations</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Teachers List (Role-based People) */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Teachers</h2>
          {/* <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm text-white hover:bg-brand-600">
            SEE */}
          <button
            // onClick={() => navigate(`/admin/users/user-organization/${subOrganizationId}`)}
            onClick={() => navigate(`/admin/organization-tables/user-organization/${"iiiii"}`)}

            className="dark:active-bg-white-20 linear rounded-md bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                 See all
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-gray-500">
              <tr>
                <th className="py-3 text-left">Name</th>
                <th className="py-3 text-left">Role</th>
                <th className="py-3 text-left">Subject</th>
                <th className="py-3 text-left">Email</th>
                <th className="py-3 text-left">Status</th>
                <th className="py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 font-medium">Emily Johnson</td>
                <td className="py-3">Teacher</td>
                <td className="py-3">Mathematics</td>
                <td className="py-3 text-gray-500">emily@school.com</td>
                <td className="py-3"><span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">Active</span></td>
                <td className="py-3 text-right">
                  <button className="mr-3 text-brand-500 hover:underline">View</button>
                  <button className="text-red-500 hover:underline">Remove</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-medium">David Smith</td>
                <td className="py-3">Teaching Assistant</td>
                <td className="py-3">Science</td>
                <td className="py-3 text-gray-500">david@school.com</td>
                <td className="py-3"><span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">On Leave</span></td>
                <td className="py-3 text-right">
                  <button className="mr-3 text-brand-500 hover:underline">View</button>
                  <button className="text-red-500 hover:underline">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Students List */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Students</h2>
           <button
            // onClick={() => navigate(`/admin/users/user-organization/${subOrganizationId}`)}
            onClick={() => navigate(`/admin/organization-tables/user-organization/${"iiiii"}`)}

            className="dark:active-bg-white-20 linear rounded-md bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                 See all
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-gray-500">
              <tr>
                <th className="py-3 text-left">Name</th>
                <th className="py-3 text-left">Class</th>
                <th className="py-3 text-left">Roll No</th>
                <th className="py-3 text-left">Status</th>
                <th className="py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 font-medium">Michael Brown</td>
                <td className="py-3">Grade 10 - A</td>
                <td className="py-3">1024</td>
                <td className="py-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">Active</span>
                </td>
                <td className="py-3 text-right">
                  <button className="mr-3 text-brand-500 hover:underline">View</button>
                  <button className="text-red-500 hover:underline">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubOrganizationView;
