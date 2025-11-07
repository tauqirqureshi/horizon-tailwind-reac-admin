

import Card from "components/card";
// import CardMenu from "components/card/CardMenu";
import React from "react";
import Organizationlogo from "assets/img/avatars/Organizationlogo.png";
import InfoSection from "views/admin/user/components/viewuser/infosection";
// import { BsCloudCheck } from "react-icons/bs";
const Organizationinfo = () => {


    const personalInfo = [
          { label: "Organization Code", value: "ORG0002" },
          { label: "Organization Name", value: "Mind Go University" },                                          
          { label: "Contact number", value: "+91 9876543210" },
          { label: "email", value: "shah.rounak@mindgouniversity.edu" },
          { label: "Trustee", value: "Shah Rounak" },
          { label: "Year of Establishment", value: "1986" },
          { label: "Academic Year", value: "2024-25" },
          { label: "Head Office", value: "Room 4003 , 5 Building Number, Park Street, 1st Floor, Olypub Building, Mirza Ghalib Street, West Bengal, Kolkata, India 700016" },
          { label: "Education", value: "School , high school , University" },
          { label: "Languages", value: "English, hindi , Gujarati" },
        ];
  return (
    <Card extra={"w-full h-full p-3"}>
          {/* Header */}
          <div className="mt-2 mb-8 w-full">
            <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
              General Information
            </h4>
            <p className="mt-2 px-2 text-base text-gray-600">
              As we live, our hearts turn colder. Cause pain is what we go through
              as we become older. We get insulted by others, lose trust for those
              others. We get back stabbed by friends. It becomes harder for us to
              give others a hand. We get our heart broken by people we love, even
              that we give them all...
            </p>
          </div>
          
          {/* Cards */}
          <InfoSection  title="Details"  items={personalInfo} columns={2}  />
          
        </Card>
  );
};

export default Organizationinfo;
