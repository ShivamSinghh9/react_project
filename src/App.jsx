import { useState } from "react";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Cli from "./components/windows/Cli";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";



const App = () => {

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
    <div>
      <main>
        <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
        <Navbar />
        {windowsState.github && <Github windowName='github' windowsState={windowsState} setWindowsState={setWindowsState} />}
        {windowsState.note && <Note windowName='note' windowsState={windowsState} setWindowsState={setWindowsState} />}
        {windowsState.resume && <Resume windowName='resume' windowsState={windowsState} setWindowsState={setWindowsState} />}
        {windowsState.spotify && <Spotify windowName='spotify' windowsState={windowsState} setWindowsState={setWindowsState} />}
        {windowsState.cli && <Cli windowName='cli' windowsState={windowsState} setWindowsState={setWindowsState} />}
      </main>
      
    </div>
  );
};

export default App;
