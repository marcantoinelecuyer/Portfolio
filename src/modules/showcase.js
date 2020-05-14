import React,{useState} from 'react';
import projectHandler from '../util/projectsHandler';

function Showcase(props) {
    const [isOpen, setIsOpen] = useState(false);

    function onEnter(src){
        // Reset the zoom-out animation
        document.getElementById('bgProjects').classList.remove("bg");
        void document.getElementById('bgProjects').offsetWidth;
        document.getElementById('bgProjects').classList.add("bg");

        props.setBgImg(src);
    }

    let list = <ul id={"projectList"}>{props.images.map(
        function(img){
            //const [isOpen, setIsOpen] = useState(false);
            return <li><a id={img.id}

                          onClick={() => {
                              projectHandler.openProject(img.id);
                              setIsOpen(true);
                          }}
                          onMouseEnter={() => {
                              isOpen
                              || onEnter(img.src);
                          }}
                          onMouseLeave={() => {
                              isOpen
                              || props.setBgImg('None')
                          }}>{img.title}</a></li>
        })}</ul>;

    return (
        <div className={"projects"}>
            {list}
        </div>
    );
}

export default Showcase;