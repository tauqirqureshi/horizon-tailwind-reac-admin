// import CheckTable from "./components/CheckTable";

import {
  // columnsDataDevelopment,
  // columnsDataCheck,
  // columnsDataColumns,
  // columnsDataComplex,
  userDataComplex,
} from "./variables/columnsData";
// import tableDataDevelopment from "./variables/tableDataDevelopment.json";
// import tableDataCheck from "./variables/tableDataCheck.json";
// import tableDatauser from "./variables/tableDatauser.json"; 
import organizationData from "./variables/organzationData.json";
import OrganzationTable from "./components/organzationTable";



const UserTables = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        </div>
        {/* <DevelopmentTable
        columnsData={columnsDataDevelopment}
        tableData={tableDataDevelopment}
        /> */}
        {/* <CheckTable columnsData={userDataComplex} tableData={tableDatauser} /> */}
        <OrganzationTable columnsData={userDataComplex}  tableData={organizationData}  />
        {/* <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        /> */}

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">

      </div>
    </div>
  );
};

export default UserTables;