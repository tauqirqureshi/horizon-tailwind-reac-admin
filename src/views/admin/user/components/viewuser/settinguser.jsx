
import React, { useState } from "react";
import SettingsPanel from "components/settings/SettingsPanel";
function Settinguser() {
const [userSettings, setUserSettings] = useState({
    blockUser: false,
    disableResult: true,
    emailNotif: true,
    smsNotif: false,
    disableEbook: false,
  });

  const handleToggle = (id, value) => {
    setUserSettings((prev) => ({ ...prev, [id]: value }));
  };

  const userSettingOptions = [
    { id: "blockUser", label: "Block user" },
    { id: "disableResult", label: "Disable view result" },
    { id: "emailNotif", label: "Email notifications" },
    { id: "smsNotif", label: "SMS notifications" },
    { id: "disableEbook", label: "Disable download E-book" },
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

export default Settinguser;
