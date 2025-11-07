// import Banner from "./components/Banner";
// import NFt2 from "assets/img/nfts/Nft2.png";
// import NFt4 from "assets/img/nfts/Nft4.png";
// import NFt3 from "assets/img/nfts/Nft3.png";
// import NFt5 from "assets/img/nfts/Nft5.png";
// import NFt6 from "assets/img/nfts/Nft6.png";
// import avatar1 from "assets/img/avatars/avatar1.png";
// import avatar2 from "assets/img/avatars/avatar2.png";
// import avatar3 from "assets/img/avatars/avatar3.png";

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


      </div>
  );
};

export default OrgancationView;
