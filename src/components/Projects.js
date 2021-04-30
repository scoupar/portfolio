import React, {useState} from 'react';
import ModalVideo from 'react-modal-video';
import DevIcon from 'devicon-react-svg';
import ccnews from '../static/images/CCNews.png';
import hellospace from '../static/images/Hello Space.png';


const Projects = () => {

    const [isOpenSpace, setIsOpenSpace] = useState(false);
    const [isOpenCC, setIsOpenCC] = useState(false);



    return (
        <>
        <section id ="projects">
        <h1 className="title">Projects</h1>
        <div className = "projects-container">
            <div className = "project-card">
                <h1 className = "project-title">Hello Space!</h1>
                <h2 className = "project-description">An interactive full-stack education app</h2>
                <div className = "project-devicon-container">
                <DevIcon className = "project-devicon" icon ="javascript" height = {50} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="html5" height = {50} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="css3" height = {50} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="mongodb" height = {50} fill="whitesmoke"/>
                </div>
                <img className = "project-image"src = {hellospace} height = "300" width = "auto" alt= "screenshot"/>
                <ModalVideo channel ="youtube" autoplay isOpen={isOpenSpace} videoId="tW9jmAHcNuE" onClose={() => setIsOpenSpace(false)}   />
                <button className = "demo-button" onClick ={() => setIsOpenSpace(true)}>View Demo</button>
            </div>
            <div className = "project-card">
                <h1 className = "project-title">CC News</h1>
                <h2 className = "project-description">A full-stack news app</h2>
                <div className = "project-devicon-container">
                <DevIcon className = "project-devicon" icon ="java" height = {50} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="javascript" height = {50} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="html5" height = {50} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="css3" height = {50} fill="whitesmoke"/>
                </div>
                <img className = "project-image"src ={ccnews} height ="300" width= "auto" alt ="screenshot"/>
                <ModalVideo channel ="youtube" autoplay isOpen={isOpenCC} videoId="3CIGxUUhcpw" onClose={() => setIsOpenCC(false)} />
                <button className = "demo-button" onClick ={() => setIsOpenCC(true)}>View Demo</button>
            </div>
        </div>
        </section>
        </>
    )
}

export default Projects; 