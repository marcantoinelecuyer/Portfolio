class Scroll{
    static init(){
        //document.addEventListener('scroll', evt => this._scroll());
    }

    static _scroll(){
        document.getElementById('menu').style.animation = 'fadeOut-slide 1s forwards';

        //document.getElementById('projectPage').style.animation = 'fadeIn 1s forwards';
        document.getElementById('projectPage').style.display = 'grid';


    }

}

export default Scroll;