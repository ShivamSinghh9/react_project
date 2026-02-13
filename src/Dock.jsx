import { RiCalendarLine, RiFile4Fill, RiFilePdf2Line, RiGithubFill, RiHeartFill, RiLinksLine, RiMailFill, RiSpotifyFill, RiTerminalLine } from "@remixicon/react";


const Dock = () => {
  return (
    <footer className="dock">
      <div className="icon github"> <RiGithubFill /></div>
      <div className="icon note"> <RiFile4Fill /> </div>
      <div className="icon pdf"> <RiFilePdf2Line /> </div>
      <div className="icon calender"><RiCalendarLine /></div>
      <div className="icon spotify"><RiSpotifyFill /></div>
      <div className="icon mail"><RiMailFill /></div>
      <div className="icon link"><RiLinksLine /></div>
      <div className="icon cli"><RiTerminalLine /></div>
      
    </footer>
  );
};

export default Dock;
