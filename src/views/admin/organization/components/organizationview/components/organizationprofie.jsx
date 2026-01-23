

import Card from "components/card";
// import CardMenu from "components/card/CardMenu";
import React from "react";
import Organizationlogo from "assets/img/avatars/Organizationlogo.png";

// import { BsCloudCheck } from "react-icons/bs";
const OrganizationProfie = () => {
  return (
    <Card extra={"w-full h-full p-4 mb-4"}>
      <div className="ml-auto">
        {/* <CardMenu /> */}
      </div>
      {/* Your storage */}
      <div className="mb-auto flex flex-col items-center justify-center">
        <div className="mt-2 flex items-center justify-center rounded-full bg-lightPrimary p-[26px] text-5xl font-bold text-brand-500 dark:!bg-navy-700 dark:text-white">
          {/* <BsCloudCheck /> */}
          {/* <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700"> */}
          <img className="h-full w-full rounded-full" src={Organizationlogo} alt="" />
        {/* </div> */}
        </div>
        <h4 className="mb-px mt-3 text-2xl font-bold text-navy-700 dark:text-white">
          Mind Go University (ORG0002)
        </h4>
        <p className="px-5 text-center text-base font-normal text-gray-600 md:!px-0 xl:!px-8">
          Supervise your drive space in the easiest way
        </p>
      </div>

      {/* Progress bar */}

      <div className="mb-auto flex flex-col items-center justify-center">
        <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
            <p className="text-sm font-normal text-gray-600">head Member</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              9.7K 
            </p>
            <p className="text-sm font-normal text-gray-600">Student (current active)</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              434
            </p>
            <p className="text-sm font-normal text-gray-600">Staff Member</p>
          </div>
        </div>
      </div>


    </Card>
  );
};

export default OrganizationProfie;
