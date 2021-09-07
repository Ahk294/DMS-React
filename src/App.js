import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./components/screens/HomeScreen";
import Register from "./components/Register";
import Login from "./components/Login";
import CreateOrg from "./components/screens/tenetAdminScreens/CreateOrg";
import NewProject from "./components/screens/tenetAdminScreens/NewProject";
import DashboardTA from "./components/screens/tenetAdminScreens/DashboardTA";
import SettingsOrg from "./components/screens/tenetAdminScreens/settingsTA/SettingsOrg";
import SettingsPersonalInfoTA from "./components/screens/tenetAdminScreens/settingsTA/SettingsPersonalInfo";
import SettingsProjects from "./components/screens/tenetAdminScreens/settingsTA/SettingsProjects";
import DashboardManager from "./components/screens/managerScreens/DashboardManager";
import ManageProject from "./components/screens/managerScreens/ManageProject";
import SettingsPersonalInfoManager from "./components/screens/managerScreens/settingsManager/SettingsPersonalInfo";
import SettingsProject from "./components/screens/managerScreens/settingsManager/SettingsProject";
import DashboardUser from "./components/screens/userScreens/DashboardUser";
import SettingsPersonalInfoUser from "./components/screens/userScreens/settingsUser/SettingsPersonalInfo";

const App = () => {
  return (
    <Router>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/createorg" component={CreateOrg} />
      <Route path="/newproject" component={NewProject} />
      <Route path="/dashboardta" component={DashboardTA} />
      <Route
        path="/settingsta/personalinfo"
        component={SettingsPersonalInfoTA}
      />
      <Route path="/settingsta/organization" component={SettingsOrg} />
      <Route path="/settingsta/projects" component={SettingsProjects} />
      <Route path="/dashboardmanager" component={DashboardManager} />
      <Route path="/manageproject" component={ManageProject} />
      <Route
        path="/settingsmanager/personalinfo"
        component={SettingsPersonalInfoManager}
      />
      <Route path="/settingsmanager/project" component={SettingsProject} />
      <Route path="/dashboarduser" component={DashboardUser} />
      <Route
        path="/settingsuser/personalinfo"
        component={SettingsPersonalInfoUser}
      />
    </Router>
  );
};

export default App;
