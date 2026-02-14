import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Macwindow from "./components/windows/Macwindow";


const App = () => {
  return (
    <div>
      <main>
        <Dock />
        <Navbar />
        <Macwindow >
          <h1>hello</h1>
        </Macwindow>
      </main>
      
    </div>
  );
};

export default App;
