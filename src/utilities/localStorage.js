export const loadAppsList = () => {
  try {
    const data = localStorage.getItem("appsList");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const updatedAppList = (app) => {
  const existingApps = loadAppsList();
  try {
    const isDuplicate = existingApps.some((a) => a.id === app.id);
    if (isDuplicate) return alert("You have already Installed the app");
    const updatedLists = [...existingApps, app];
    localStorage.setItem("appsList", JSON.stringify(updatedLists));
  } catch (err) {
    console.log(err);
  }
};
