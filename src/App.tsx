import Alert from "./components/Alert/Alert";
import "./App.css";
import {
  Ban,
  BellRing,
  CircleFadingArrowUp,
  CloudCheck,
  Info,
} from "lucide-react";

const App = () => {
  return (
    <>
      <h2>Task two</h2>
      <Alert
        type={"alert-error"}
        icon={<Ban size={22} />}
        title={"Something went wrong"}
      >
        Lorem ipsum dolor sit amet <a href="#">hsh</a> adipisicing elit. Ullam,
        laborum officiis est beatae alias asperiores voluptatibus odio fuga
        veritatis quos.
      </Alert>
      <Alert
        type={"alert-warning"}
        icon={<BellRing size={22} />}
        title={"Tips & Tricks"}
        describtion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum officiis est beatae alias asperiores voluptatibus odio fuga veritatis quos."
        children={undefined}
      />
      <Alert
        type={"alert-default"}
        icon={<CircleFadingArrowUp size={22} />}
        title={"Upgrade your plan"}
        describtion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum officiis est beatae alias asperiores voluptatibus odio fuga veritatis quos."
        children={undefined}
      />
      <Alert
        type={"alert-success"}
        icon={<CloudCheck size={22} />}
        title={"Your order has been processed"}
        describtion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum officiis est beatae alias asperiores voluptatibus odio fuga veritatis quos."
        children={undefined}
      />
      <Alert
        type={"alert-info"}
        icon={<Info size={22} />}
        title={"Note"}
        describtion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum officiis est beatae alias asperiores voluptatibus odio fuga veritatis quos."
        children={undefined}
      />
    </>
  );
};

export default App;
