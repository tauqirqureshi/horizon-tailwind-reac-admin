import React, { useState } from "react";
import SettingsPanel from "components/settings/SettingsPanel";

function OrganizationSetting() {
  const [userSettings, setUserSettings] = useState({
    blockOrganization: false,
    disableResult: true,
    emailOrganization: true,
    smsNotifOrganization: false,
    disableEbookOrganization: false,
    isActive: true,
  });

  const handleToggle = (id, value) => {
    setUserSettings((prev) => ({ ...prev, [id]: value }));
  };

  const userSettingOptions = [
    { id: "blockOrganization", label: "Block Organization" },
    {   id: "isActive", label: "Active" },
    { id: "disableResult", label: "Disable view result" },
    { id: "emailOrganization", label: "Email notifications" },
    { id: "smsNotifOrganization", label: "SMS notifications" },
    { id: "disableEbookOrganization", label: "Disable download E-book" },
  ];

  return (
    <SettingsPanel
      title="Settings"
      settings={userSettingOptions}
      values={userSettings}
      onToggle={handleToggle}
    />
  );
}

export default OrganizationSetting;
