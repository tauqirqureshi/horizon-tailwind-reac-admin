// import CheckTable from "./components/CheckTable";

// import {
//   userDataComplex,
import SubOrganizationTable from "./components/suborganizationlist/suborgtable";
import suborganizationData from "./components/variable/suborgdata.json";
import {Sub_organizationColumnsData} from "./components/variable/suborgcolumnsdata.js";
// import tableDatauser from "../../admin/user/variables/tableDatauser.json"; 
// import tableDataColumns from "./variables/tableDataColumns.json";

const SubOrganization = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        </div>

        {/* <DevelopmentTable
        columnsData={columnsDataDevelopment}
        tableData={tableDataDevelopment}
        /> */}
        {/* <CheckTable columnsData={userDataComplex} tableData={tableDatauser} /> */}
        <SubOrganizationTable columnsData={Sub_organizationColumnsData}  tableData={suborganizationData}  />
        {/* <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        /> */}

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">

      </div>
    </div>
  );
};

export default SubOrganization;