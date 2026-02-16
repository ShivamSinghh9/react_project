import { Rnd } from 'react-rnd'

const Macwindow = ({children, windowName, setWindowsState}) => {
  return (
    <Rnd 
    default={{
        width:"40vw",
        height:"50vh",
        x:300,
        y:400
    }}
    >
        <div className="fullwindow">
            <div className="nav">
                <div className="dots">
                    <div onClick={()=>setWindowsState(state =>({...state, [windowName]: false}))} className="red dot"></div>
                    <div className="yellow dot"></div>
                    <div className="green dot"></div>
                </div>
                <div className="title">shivamsingh - zsh</div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div> 
    </Rnd>
  )
}

export default Macwindow