// import Banner from "./components/Banner";
// import NFt2 from "assets/img/nfts/Nft2.png";
// import NFt4 from "assets/img/nfts/Nft4.png";
// import NFt3 from "assets/img/nfts/Nft3.png";
// import NFt5 from "assets/img/nfts/Nft5.png";
// import NFt6 from "assets/img/nfts/Nft6.png";
// import avatar1 from "assets/img/avatars/avatar1.png";
// import avatar2 from "assets/img/avatars/avatar2.png";
// import avatar3 from "assets/img/avatars/avatar3.png";

import { useNavigate } from "react-router-dom";

import tableDataTopCreators from "./variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "./variables/tableColumnsTopCreators";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import UserInfoMultiView from "views/admin/user/components/viewuser/userinfocard";
import Settinguser from "views/admin/user/components/viewuser/settinguser";
import Organizationinfo from "./components/Organizationinfo";
import OrganizationSetting from "./components/OrganizationSetting";


// import TopCreatorTable from "./components/TableTopCreators";
// import NftCard from "components/card/NftCard";

import OrganizationProfie from "./components/organizationprofie";
const OrgancationView = () => {
  const navigate = useNavigate(); 
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-12 lg:!mb-0">
          <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
            <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
              <OrganizationProfie />
             </div>

            {/* right side section */}

            <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
              <TopCreatorTable
                extra="mb-5"
                tableData={tableDataTopCreators}
                columnsData={tableColumnsTopCreators}
              />
              
            {/* <Settinguser /> */}
        {/* <HistoryCard /> */}
            </div>
     </div>
        </div>
        <div className="col-span-12 lg:!mb-0">
          <Organizationinfo />
        </div>
        {/* <UserInfoMultiView /> */}
      </div>
      <OrganizationSetting />
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      

      

      {/* right side section */}

      {/* <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        />
        
      <Settinguser />
        <HistoryCard />
      </div> */}
     </div>
  {/* Organization Roles & Staff System */}
  <div className="rounded-xl border bg-white p-6 shadow-sm">
  <div className="mb-4 flex items-center justify-between">
    <h2 className="text-lg font-semibold">Organization Roles & Staff</h2>
    <button 
    onClick={() => navigate(`/admin/organization-tables/Roles-organization/${'ss'}`)}
    className="rounded-lg bg-brand-500 px-4 py-2 text-sm text-white">
      Manage Roles
    </button>
  </div>

  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
    {[
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
    ].map((role) => (
      <div
        key={role}
        className="flex items-center justify-between rounded-lg border px-4 py-3"
      >
        <span className="text-sm font-medium">{role}</span>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
          Active
        </span>
      </div>
    ))}
  </div>
  </div>
    
  {/* Access Control & Permissions */}
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
  <h2 className="mb-4 text-lg font-semibold">Access Control & Permissions</h2>

  <div className="space-y-4 text-sm">
    <div className="flex items-center justify-between">
      <span>Manage Organizations & Schools</span>
      <input type="checkbox" defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <span>User & Role Management</span>
      <input type="checkbox" defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <span>Academic Configuration</span>
      <input type="checkbox" defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <span>Finance & Billing Access</span>
      <input type="checkbox" defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <span>System & Security Settings</span>
      <input type="checkbox" defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <span>Audit Logs Visibility</span>
      <input type="checkbox" defaultChecked />
    </div>
  </div>
  </div>


  {/* System Modules Status */}
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
    <header className="relative flex items-center justify-between mb-4">
      <div className="text-xl font-bold text-navy-700 dark:text-white">
          System Modules
      </div>
      <button
        onClick={() => navigate(`/admin/organization-tables/systemodules-organization/${'idiidiid'}`)}
        className="dark:active-bg-white-20 linear rounded-md bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
          See all
      </button>
    </header>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
    <div className="rounded-lg border p-4">
      <p className="font-medium">Academic System</p>
      <span className="text-xs text-green-600">Active</span>
    </div>
    <div className="rounded-lg border p-4">
      <p className="font-medium">Finance & Billing</p>
      <span className="text-xs text-green-600">Active</span>
    </div>
    <div className="rounded-lg border p-4">
      <p className="font-medium">HR & Payroll</p>
      <span className="text-xs text-green-600">Active</span>
    </div>
    <div className="rounded-lg border p-4">
      <p className="font-medium">Transport System</p>
      <span className="text-xs text-red-500">Inactive</span>
    </div>
    <div className="rounded-lg border p-4">
      <p className="font-medium">Library System</p>
      <span className="text-xs text-green-600">Active</span>
    </div>
    <div className="rounded-lg border p-4">
      <p className="font-medium">Examination System</p>
      <span className="text-xs text-green-600">Active</span>
    </div>
  </div>
  </div>

  {/* Organization Audit Logs */}
  <div className="rounded-xl border bg-white p-6 shadow-sm">
  <header className="relative flex items-center justify-between mb-4">
      <div className="text-xl font-bold text-navy-700 dark:text-white">
          Audit & Activity Logs
      </div>
      <button
        onClick={() => navigate(`/admin/organization-tables/logactivity-organization/${'idiidiid'}`)}
        className="dark:active-bg-white-20 linear rounded-md bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
          See all
      </button>
    </header>

  {/* <h2 className="mb-4 text-lg font-semibold">Audit & Activity Logs</h2> */}

  <ul className="space-y-3 text-sm">
    <li className="flex justify-between">
      <span>Organization settings updated</span>
      <span className="text-gray-400">2 hours ago</span>
    </li>
    <li className="flex justify-between">
      <span>New school added to organization</span>
      <span className="text-gray-400">Yesterday</span>
    </li>
    <li className="flex justify-between">
      <span>Role permissions modified</span>
      <span className="text-gray-400">3 days ago</span>
    </li>
  </ul>
  </div>

</div>
  );
};

export default OrgancationView;
