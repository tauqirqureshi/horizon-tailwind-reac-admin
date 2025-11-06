// components/UserInfoMultiView.jsx
import React, { useState } from "react";
import Card from "components/card";
import InfoSection from "./infosection";


const UserInfoMultiView = () => {
  const [currentView, setCurrentView] = useState("personal"); // default view

  const personalInfo = [
    { label: "First Name", value: "John" },
    { label: "Last Name", value: "Doe" },
    { label: "SurName", value: "Smith" },
    { label: "GR ID", value: "GRN00493" },
    { label: "User ID", value: "UID00493" },
    { label: "Birthday", value: "20 July 1986" },
    { label: "Personal Email", value: "bob.smith@example.com" },
    { label: "Personal Number", value: "+91 9879163695" },
    { label: "Gender", value: "Male" },
    { label: "Study type [Exter OR Internal]", value: "Exter Study" },
    { label: "Current Status", value: "10th Board (Active)" },
    { label: "Last previous", value: "9th D (Passed 2022)" },
  ];

  const guardianInfo = [
    { label: "Father Name", value: "Raj Smith" },
    { label: "Mother Name", value: "Priya Shah" },
    { label: "Guardian Number", value: "+91 9879163695" },
    { label: "Guardian Email", value: "smith@example.com" },
  ];

  const addressInfo = [
    {
      label: "Current Address",
      value:
        "Room 4003 , 5 Building Number, Park Street, 1st Floor, Olypub Building, Mirza Ghalib Street, West Bengal, Kolkata, India 700016",
    },
    {
      label: "Permanent Address",
      value:
        "Room 4003 , 5 Building Number, Park Street, 1st Floor, Olypub Building, Mirza Ghalib Street, West Bengal, Kolkata, India 700016",
    },
    {
      label: "Permanent Address (Guardian)",
      value:
        "Room 4003 , 5 Building Number, Park Street, 1st Floor, Olypub Building, Mirza Ghalib Street, West Bengal, Kolkata, India 700016",
    },
  ];

  const organizationInfo = [
    { label: "Code", value: "ORG0002" },
    { label: "Name", value: "Mind Go University" },
    { label: "Email", value: "info@mindgouniversity.edu" },
    { label: "Head Name", value: "Dr. Shah Rounak" },
    { label: "Head Email", value: "shah.rounak@mindgouniversity.edu" },
    { label: "Head Contact Number", value: "+1 202-555-0123" },
    { label: "Principal Name", value: "Prof. Anita Desai" },
    { label: "Principal Email", value: "anita.desai@mindgouniversity.edu" },
    { label: "Principal Contact Number", value: "+1 202-555-0456" },
    { label: "Current Class Teacher Name", value: "Mr. Ramesh Kumar" },
    { label: "Current Class Teacher Email", value: "ramesh.kumar@mindgouniversity.edu" },
    { label: "Current Class Teacher Contact Number", value: "+1 202-555-0789" },
  ];

  const organizationAddresses = [
    {
      label: "Address",
      value:
        "Room 4003 , 5 Building Number, Park Street, 1st Floor, Olypub Building, Mirza Ghalib Street, West Bengal, Kolkata, India 700016",
    },
    {
      label: "Head Office Address",
      value:
        "Room 4003 , 5 Building Number, Park Street, 1st Floor, Olypub Building, Mirza Ghalib Street, West Bengal, Kolkata, India 700016",
    },
  ];

  // Map view keys to data
  const viewMap = {
    personal: { title: "Personal", items: personalInfo },
    guardian: { title: "Guardian", items: guardianInfo },
    address: { title: "Address", items: addressInfo, columns: 1 },
    organization: { title: "Organization", items: organizationInfo },
    orgAddress: { title: "Org Address", items: organizationAddresses, columns: 1 },
  };

  return (
    <Card extra="w-full h-full p-3">
      {/* Navigation */}

      <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Information
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                {/* <a href=" ">setting</a> */}
              </a>
            </li>
          </ul>
        </div>
      <div className="mb-4 mt-5 flex flex-col gap-2 px-4 md:flex-row md:items-center md:gap-4">
              {["personal", "guardian", "address", "organization", "orgAddress"].map((view) => (
          <button
            key={view}
            onClick={() => setCurrentView(view)}
            className={`px-4 py-2 rounded-md font-medium transition-colors duration-200
              ${
                currentView === view
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {view === "personal"
              ? "Personal"
              : view === "guardian"
              ? "Guardian"
              : view === "address"
              ? "Address"
              : view === "organization"
              ? "Organization"
              : "Org Address"}
          </button>
        ))}
      </div>


      {/* Render selected view */}
      <InfoSection
        title={viewMap[currentView].title}
        items={viewMap[currentView].items}
        columns={viewMap[currentView].columns || 2}
      />
    </Card>
  );
};

export default UserInfoMultiView;
