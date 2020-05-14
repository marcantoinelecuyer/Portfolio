import React,{useState} from 'react';
import Showcase from "../modules/showcase";
import imageLoader from "../util/imgLoader";
import OpenProject from "./openProject";

function ProjectPage() {
    const [bgImg, setBgImg] = useState('');

    return (
        <div id="projectPage">
            <img className={'bg'} id={'bgProjects'} src={bgImg}/>
            <h3>My Projects</h3>
            <Showcase images={imageLoader()} setBgImg={setBgImg}/>
            <OpenProject/>
        </div>
    );
}

export default ProjectPage;