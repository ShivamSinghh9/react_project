import githubData from '../../assets/github.json'
import Macwindow from './Macwindow'


const GitCard=({data={id:1, image:"", title:"", description:"", tags:[], repoLink:"", demoLink:""}})=>{
    return <div className="card">

        <img src={data.image} alt="" />
        <h1 className='heading'>{data.title}</h1>
        <p className='description'>{data.description}</p>

        <div className="tags">
            {
                data.tags.map(tag=><p className='tag'>{tag}</p>)
            }
        </div>

        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            <a href={data.demoLink}>Demo Link</a>
        </div>

    </div>
}

const Github = ({windowName, setWindowsState}) => {
  return (
    
        <Macwindow windowName={windowName} setWindowsState={setWindowsState}>
            <div className="cards">
                {githubData.map(project =>{
                    return <GitCard data={project} />
                })}
            </div>
        </Macwindow>
  )
}

export default Github