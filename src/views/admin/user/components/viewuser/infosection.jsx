import React from "react";


const InfoSection = ({ title, items, columns = 3 }) => {
  return (
    <div className="mt-2 mb-8 w-full">
      <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
        {title}
      </h4>
      <div className={`grid grid-cols-${columns} gap-4 px-3`}>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 
                       shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
          >
            <p className="text-sm text-gray-600">{item.label}</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
