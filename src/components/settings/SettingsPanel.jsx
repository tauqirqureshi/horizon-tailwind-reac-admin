import React from "react";
import Card from "components/card";
import Switch from "components/switch";

const SettingsPanel = ({
  title = "Settings",
  settings = [],
  onToggle = () => {},
  values = {},
  extra = "w-full h-full p-3",
}) => {
  return (
    <Card extra={extra}>
      <div className="relative mb-3 flex items-center justify-between pt-1">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {title}
        </h4>
      </div>

      <div className="flex flex-col">
        {settings.map(({ id, label }) => (
          <div key={id} className="mt-4 flex items-center gap-3">
            <Switch
              id={id}
              checked={values[id] || false}
              onChange={(e) => onToggle(id, e.target.checked)}
            />
            <label
              htmlFor={id}
              className="text-base font-medium text-navy-700 dark:text-white"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SettingsPanel;
