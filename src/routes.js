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

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
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
    name: "Manage Organization",
    layout: "/admin",
    icon: <GoOrganization className="h-6 w-6" />,
    path: "organization-tables",
    component: <OrganizationTables />,
  },
  {
    name: "Manage Sub-Organization",
    layout: "/admin",
    icon: <SiAwsorganizations className="h-6 w-6" />,
    path: "sub-org-tables",
    component: <UserTables />,
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
