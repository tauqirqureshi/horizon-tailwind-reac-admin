import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard ,MdOutlineNotificationsActive } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";
import { FaUsersLine } from "react-icons/fa6";
import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

import { BiSolidBuildingHouse   } from "react-icons/bi";
import { LiaSchoolSolid } from "react-icons/lia";
import {
  HiOutlineShieldCheck,
} from "react-icons/hi";


import { PiStudentFill } from "react-icons/pi";
import { GrUserAdmin } from "react-icons/gr";
import { FaChalkboardTeacher } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<BiSolidBuildingHouse className="h-8 w-8" />}
          title={"Organizations : Active / Total"}
          subtitle={"124 / 150"}
        />
        <Widget
          icon={<LiaSchoolSolid  className="h-7 w-7" />}
          title="Schools"
          subtitle="862"
        />

        <Widget
          icon={<PiStudentFill className="h-7 w-7" />}
          title={"Students"}
          subtitle={"1,248,930"}
        />

        <Widget
          icon={<FaChalkboardTeacher className="h-7 w-7" />}
          title={"Teachers"}
          subtitle={"78,421"}
        />
         <Widget
          icon={<GrUserAdmin  className="h-7 w-7" />}
          title={"Admins"}
          subtitle={"480"}
        />
        <Widget
          icon={<FaUsersLine className="h-7 w-7" />}
          title={"Active Users (Today)"}
          subtitle={"312,883"}
        />

      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
