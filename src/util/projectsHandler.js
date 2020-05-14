class projectHandler{


    static openProject(id){
        this.openedProj = id;
        for (let i=0;i<5;i++){
            //document.getElementById(i).style.animation = "fadeOut 1s forwards";
             //document.getElementById(i).classList.remove('projectList');
            // document.getElementById(i).classList.add('projectList');
        }
        //document.getElementById(id).classList.add('title');
        //document.getElementById(id).classList.remove('projectList');

        document.getElementById("projectList").style.animation = "fadeOut 1s forwards";
       //document.getElementById("projectList").style.webkitAnimation= "fadeOut 1s forwards";
        //document.getElementById(id).parentElement.parentElement.style.display = "none";
        console.log(id);

        document.getElementById("openProject").style.height = "100vh";
        document.getElementById("openProject").style.display = "block";
    }

    static closeProject(){
        document.getElementById(this.openedProj).classList.remove('title');
    }
}

export default projectHandler;