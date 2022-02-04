import "./App.css";
import Layout from "./layout/Layout";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import TaskList from "./components/TaskList";
import Signup from "./components/Signup";
import AddNewTask from "./components/AddNewTask";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/auth" component={Signup}  />
          <Route path="/tasks" component={TaskList} />
          <Route path="/newtask" component={AddNewTask} />
          <Route path="/" component={HomePage} exact={true} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;