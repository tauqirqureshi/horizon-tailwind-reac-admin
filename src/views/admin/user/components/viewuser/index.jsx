// import Banner from "./userbanner";
// import General from "./components/General";
// import Notification from "./components/Notification";
// import Project from "./components/Project";
// import Storage from "./components/Storage";
// import Upload from "./components/Upload";
import Userbanner from "./userbanner"; 
import Userinfocard from "./userinfocard";
import Settinguser from "./settinguser";
import Docview from "./docview"; //  Add this import
import UserAuditLogs from "./UserAuditLogs"; // Add this import


const ViewUser = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-12 lg:!mb-0">
          <Userbanner />
        </div>

        {/* <div className="col-span-3 lg:!mb-0">
          <Storage />
        </div> */}

        {/* <div className="z-0 col-span-5 lg:!mb-0">
          <Userbanner />
        </div> */}
      </div>
      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-12 lg:!grid-cols-12">
        <div className="col-span-12 lg:col-span-12 lg:mb-0">
          <Userinfocard />
        </div>
      </div>

       <div className="grid h-full grid-cols-1 gap-12 lg:!grid-cols-12">
        <div className="col-span-12 lg:col-span-12 lg:mb-0">
          <Docview />
        </div>
      </div>

      <Settinguser />


      <div className="grid h-full grid-cols-1 gap-12 lg:!grid-cols-12">
        <div className="col-span-12 lg:col-span-12 lg:mb-0">
          <UserAuditLogs />
        </div>
      </div>

    </div>
  );
};

export default ViewUser;
