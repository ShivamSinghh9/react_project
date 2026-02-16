import { RiCalendarLine, RiFile4Fill, RiFilePdf2Line, RiGithubFill, RiHeartFill, RiLinksLine, RiMailFill, RiSpotifyFill, RiTerminalLine } from "@remixicon/react";



const Dock = ({ setWindowsState}) => {
  return (
    <footer className="dock">
      <div onClick={()=>{setWindowsState(state=>({...state,github: true}))}} className="icon github"> <RiGithubFill /></div>
      <div onClick={()=>{setWindowsState(state=>({...state,note: true}))}} className="icon note"> <RiFile4Fill /> </div>
      <div onClick={()=>{setWindowsState(state=>({...state, resume: true}))}} className="icon pdf"> <RiFilePdf2Line /> </div>
      <div onClick={()=>{window.open("https://calendar.google.com/","_blank")}} className="icon calender"><RiCalendarLine /></div>
      <div onClick={()=>{setWindowsState(state=>({...state, spotify: true}))}} className="icon spotify"><RiSpotifyFill /></div>
      <div onClick={()=>{window.open("mailto:shovam132e@gmail.com","_blank")}} className="icon mail"><RiMailFill /></div>
      <div onClick={()=>{window.open("https://www.linkedin.com/in/shivamsinghh132/","_blank")}} className="icon link"><RiLinksLine /></div>
      <div onClick={()=>{setWindowsState(state=>({...state, cli: true}))}} className="icon cli"><RiTerminalLine /></div>
      
    </footer>
  );
};

export default Dock;
