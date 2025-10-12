import React from "react";
import banner from "assets/img/avatars/IllustrationLinkedInBanner2.jpg";
import Userviewcard from "./userviewcard"
import { useParams } from "react-router-dom"
import tableDatauser from "../../variables/tableDatauser.json"


const Userbanner = () => {

    const { id } = useParams()
    const userData = tableDatauser.find((u) => u.id = id);
    
    
  return (
    <Userviewcard extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={userData ? userData.profilePic : "User Not Found"} alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {userData ? userData.name : "User Not Found"}
        </h4>
        <p className="text-base font-normal text-gray-600"> 
           Student at ( {(userData &&  userData.university) ? userData.university  : "Mind Go University"} )
           </p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white"> ORG0002</p>
          <p className="text-sm font-normal text-gray-600">Organization code </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            ST04993
          </p>
          <p className="text-sm font-normal text-gray-600"> USER ID </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            {(userData && userData.contactnumber) ?  userData.contactnumber : "User Not Found"}
          </p>
          <p className="text-sm font-normal text-gray-600">Cell number</p>
        </div>
      </div>
    </Userviewcard>
    
  );
};

export default Userbanner;
