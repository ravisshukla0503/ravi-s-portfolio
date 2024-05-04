import HamburgerMenu from "./components/HamburgerMenu";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import "./App.css";
function App() {
  return (
    <>
    <header className="text-white h-[14vh] w-full bg-[#0a192f]">
      <Header />
      <HamburgerMenu />
    </header>
    <div className="w-full flex md:flex-row flex-col">
    <div className="order-2 w-full md:w-[10%] md:h-[100vh] md:fixed md:top-0 md:left-0 bg-[#0a192f]">
    <LeftSidebar />
    </div>
    <div  className="order-1 w-full md:w-[80%] overflow-y-auto md:absolute md:left-[10%] px-[25px] md:px-[100px] pt-[100px] bg-[#0a192f]">
    <MainContent />
    </div>
    <div  className="order-3 border-3 w-full md:w-[10%] md:h-[100vh] md:fixed md:top-0 md:right-0 bg-[#0a192f]">
    <RightSidebar />
    </div>
    </div>
  </>
  )
}

export default App;
