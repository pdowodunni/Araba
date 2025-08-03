import "./App.css";
import DreamyCursor from "./components/shared/cursor-follower";
import MainLayout from "./layouts/main-layout";

{
  /*
  WARNING: Most of these components work by accident and magic.
  
  Legend has it, even the slightest change to these variables could unleash CSS demons.

  Modify at your own peril. You've been warned. I would NOT help you debug.
*/
}

function App() {
  return (
    <>
      <DreamyCursor />
      <MainLayout />
    </>
  );
}

export default App;
