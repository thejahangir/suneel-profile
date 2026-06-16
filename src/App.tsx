import React, { useState, useEffect } from "react";
import AppV1 from "./AppV1";
import AppV2 from "./AppV2";
import VersionSwitcher from "./components/VersionSwitcher";

export const App: React.FC = () => {
  const [version, setVersion] = useState<"v1" | "v2">("v1");

  useEffect(() => {
    // Parse query params to load correct version on load or refresh
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const v = params.get("v");
      if (v === "2") {
        setVersion("v2");
      } else {
        setVersion("v1");
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, []);

  const handleSwitch = (selectedVersion: "v1" | "v2") => {
    setVersion(selectedVersion);
    const versionNum = selectedVersion === "v2" ? "2" : "1";
    const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?v=${versionNum}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  return (
    <>
      {version === "v2" ? <AppV2 /> : <AppV1 />}
      <VersionSwitcher currentVersion={version} onSwitch={handleSwitch} />
    </>
  );
};

export default App;
