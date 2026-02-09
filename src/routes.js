import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import ViewUser from "views/admin/user/components/viewuser"; // Ensure this path is correct
import DataTables from "views/admin/tables";  
import RTLDefault from "views/rtl/default";
import UserTables from "views/admin/user"; // Add this import
import OrganizationTables from "views/admin/organization"; // Add this import
import { FaUserGroup } from "react-icons/fa6"; 
import { GoOrganization } from "react-icons/go";
import { SiAwsorganizations } from "react-icons/si";
import  OrganizationView from "views/admin/organization/components/organizationview";
import SubOrganization from "views/admin/suborganization";
import SubOrganizationView from "views/admin/suborganization/components/suborganizationview";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import EditSubOrganization from "views/admin/suborganization/components/suborganizationview/EditSubOrganization";
import SubOrganizationSettings from "views/admin/suborganization/components/suborganizationview/SubOrganizationSettings";
import OrganizationSystemModules from "views/admin/organization/components/Permissions/Org-systemmodules/OrganizationSystemModules";
import OrganizationRoles from "views/admin/organization/components/Permissions/Org-manageRole/OrganizationRoles";
import AuditActivityLogs from "views/admin/organization/components/Permissions/AuditActivityLogs/AuditActivityLogs";
import SuperAdminDashboard from "views/admin/superadmindashboard";

const routes = [
  // {
  //   name: "Main Dashboard",
  //   layout: "/admin",
  //   path: "default",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <MainDashboard />,
  // },
    {
    name: "Dashboard",
    layout: "/admin",
    icon: <MdHome className="h-6 w-6" />,
    collapse: true,
    items: [
      {
        name: "Main Dashboard",
        layout: "/admin",
        path: "dashboard/main",
        icon: <MdHome className="h-6 w-6" />,
        component: <MainDashboard />,
      },
      {
        name: "Super Dashboard",
        layout: "/admin",
        path: "dashboard/super-admin",
        icon: <MdHome className="h-6 w-6" />,
        component: <SuperAdminDashboard />,
      },
    ],
  },
  {
    name: "Organization Management",
    layout: "/admin",
    collapse: true,
    icon: <GoOrganization className="h-6 w-6" />,
    path: "organization-tables",
    // component: <OrganizationTables />,
    items: [
      {
        name: "Main Organization",
        layout: "/admin",
        path: "organization-tables",
        icon: <MdHome className="h-6 w-6" />,
        component: <OrganizationTables />,
      },
      {
        name: "Sub Organization",
        layout: "/admin",
        path: "sub-org-tables",
        icon: <MdHome className="h-6 w-6" />,
        component: <SubOrganization />,
      },
    ],
  },
  
  {
    name: "Manage Users",
    layout: "/admin",
    icon: <FaUserGroup className="h-6 w-6" />,
    path: "users",
    component: <UserTables />,
  },
  {
    name: "View User",
    layout: "/admin",
    path: "users/view-user/:id",   
    component: <ViewUser />,
    hide: true,         
  },
  {
    name: "View Organization",
    layout: "/admin",
    icon: <GoOrganization className="h-6 w-6" />,
    path: "organization-tables/view-organization/:id",
    component: <OrganizationView />,
    hide: true,         

  },
  {
    name: "Organization Member",
    layout: "/admin",
    path: "organization-tables/user-organization/:id",   
    component: <UserTables />,
    hide: true,         
  },
  {
    name: "Organization Manage Role & Staff",
    layout: "/admin",
    icon: <GoOrganization className="h-6 w-6" />,
    path: "organization-tables/Roles-organization/:id",
    component: <OrganizationRoles />,
    hide: true,         

  },
  {
    name: "Organization Access & Security",
    layout: "/admin",
    icon: <GoOrganization className="h-6 w-6" />,
    path: "organization-tables/systemodules-organization/:id",
    component: <OrganizationSystemModules />,
    hide: true,         

  },
  {
    name: "Organization Audit & Activity Logs",
    layout: "/admin",
    // icon: <GoOrganization className="h-6 w-6" />,
    path: "organization-tables/logactivity-organization/:id",
    component: <AuditActivityLogs />,
    hide: true,         

  },
  {
    name: "View Sub-Organization",
    layout: "/admin",
    icon: <SiAwsorganizations className="h-6 w-6" />,
    path: "sub-org-tables/view-sub-organization/:id",
    component: <SubOrganizationView />,
    hide: true, 
  },
  {
    name: "edit Sub-Organization",
    layout: "/admin",
    icon: <SiAwsorganizations className="h-6 w-6" />, 
    component: <EditSubOrganization />,
    path: "sub-org-tables/edit-sub-organization/:id",
    hide: true,
  },

  
  {
    name: "settings Sub-Organization",
    layout: "/admin",
    icon: <SiAwsorganizations className="h-6 w-6" />, 
    component: <SubOrganizationSettings />,
    path: "sub-org-tables/sub-organization-settings/:id",
    hide: true,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },
];
export default routes;
