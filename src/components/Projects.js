import React, {useState} from 'react';
import ModalVideo from 'react-modal-video';
import DevIcon from 'devicon-react-svg';
import ccnews from '../static/images/CCNews.png';
import hellospace from '../static/images/Hello Space.png';
import stockmanager from '../static/images/stockmanager.png'


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
                <img className = "project-image"src = {hellospace} height = "150" width = "auto" alt= "screenshot"/>
                <h2 className = "project-description">A full-stack education app</h2>
                <div className = "project-devicon-container">
                <DevIcon className = "project-devicon" icon ="javascript" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="html5" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="css3" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="mongodb" height = {40} fill="whitesmoke"/>
                </div>
                <ModalVideo channel ="youtube" autoplay isOpen={isOpenSpace} videoId="tW9jmAHcNuE" onClose={() => setIsOpenSpace(false)}   />
                <a className = "demo-button" onClick ={() => setIsOpenSpace(true)}>View Demo</a>
                <a className = "demo-button" href= "https://github.com/scoupar/SpaceAppProject" target ="_blank">View Code</a>
            </div>
            <div className = "project-card">
                <h1 className = "project-title">CC News</h1>
                <img className = "project-image"src ={ccnews} height ="150" width= "auto" alt ="screenshot"/>
                <h2 className = "project-description">A full-stack news app</h2>
                <div className = "project-devicon-container">
                <DevIcon className = "project-devicon" icon ="java" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="javascript" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="html5" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="css3" height = {40} fill="whitesmoke"/>
                </div>
                <ModalVideo channel ="youtube" autoplay isOpen={isOpenCC} videoId="3CIGxUUhcpw" onClose={() => setIsOpenCC(false)} />
                <a className = "demo-button" onClick ={() => setIsOpenCC(true)}>View Demo</a>
                <a className = "demo-button" href= "https://github.com/scoupar/Java_News_App_Frontend" target ="_blank">View Code</a>
            </div>
            <div className = "project-card">
                <h1 className = "project-title">Stock Manager</h1>
                <img className = "project-image"src ={stockmanager} height ="150" width= "auto" alt ="screenshot"/>
                <h2 className = "project-description">A full-stack stock-<br></br>management app</h2>
                <div className = "project-devicon-container">
                <DevIcon className = "project-devicon" icon ="python" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="postgresql" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="html5" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="css3" height = {40} fill="whitesmoke"/>
                </div>
                <ModalVideo channel ="youtube" autoplay isOpen={isOpenCC} videoId="3CIGxUUhcpw" onClose={() => setIsOpenCC(false)} />
                <a className = "demo-button" onClick ={() => setIsOpenCC(true)}>View Demo</a>
                <a className = "demo-button" href= "https://github.com/scoupar/Stock_Manager_Project" target ="_blank">View Code</a>
            </div>
        </div>
        </section>
        </>
    )
}

export default Projects; 