import React, {useState} from 'react';
import ModalVideo from 'react-modal-video';
import DevIcon from 'devicon-react-svg';
import ccnews from '../static/images/CCNews.png';
import hellospace from '../static/images/Hello Space.png';
import stockmanager from '../static/images/stockmanager.png';
import ReactPlayer from 'react-player';
import stockmanagerbanner from '../static/images/stockmanagerbanner.png';
import hellospacebanner from '../static/images/Hellospacebanner.png';
import ccnewsbanner from '../static/images/ccnewsbanner.png'
import vasa from '../static/images/V A S A.png';
import vasalarge from '../static/images/Vasa-Large.png';
import vasabanner from '../static/images/vasa-banner.png';

const Projects = () => {

    const [isOpenSpace, setIsOpenSpace] = useState(false);
    const [isOpenCC, setIsOpenCC] = useState(false);
    const [isOpenStock, setIsOpenStock] = useState(false);



    return (
        <>
        <section id ="projects">
        <h1 className="title">Projects</h1>
        <div className = "projects-container">
        <div className = "project-card">
                <div className = "project-title">
                <h1>VASA  - a mobile friendly band website</h1>
                <img className = "hidden-image"src = {vasabanner} alt = "vasa-banner" width = "300"/>
                <br></br>
                </div>
                <div className ="project-image">
                <img src = {vasalarge} alt= 'vasa picture' height ="350"/>
                </div>
                <div className = "project-text">
                <p>Mobile-first linktree-style website for Glasgow instrumental band VASA to display all social media / web links in one view.</p>
                <p>Created using React and deployed with Firebase</p>
                <p></p>
                <a className = "demo-button" href= "https://wearevasa.com" target ="_blank">View Site</a>
                <a className = "demo-button" href= "https://github.com/scoupar/vasa-mobile-site" target ="_blank">View Code</a>
                
                </div>
                <div className = "project-devicon-container">
                <DevIcon className = "project-devicon" icon ="javascript" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="html5" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="css3" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="npm" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="visualstudio" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="git" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="github_badge" height = {40} fill="whitesmoke"/>
                </div>

            
            </div>
        <div className = "project-card">
                <div className = "project-title">
                <h1>CC News - a full-stack news app</h1>
                <img src = {ccnewsbanner} alt = "cc-news-image" className = "hidden-image" width = "300"/>
                <br></br>
                <a className = "hidden-button" href ="https://youtu.be/3CIGxUUhcpw" target = "blank">View Demo on YouTube</a>
                </div>
                <div className = "project-image">
                <ReactPlayer className = "video" url="https://youtu.be/3CIGxUUhcpw" controls/>
                </div>
                <div className = "project-text">
                    <p>Created with a react front-end which is connected to a spring boot Java back-end. The app features a reader-focused front section where news articles can be viewed and filtered by category and journalist. A keyword search function is also used to filter articles by their headline. </p>
                    <p>The site also features an admin section which allows the user to add, edit and delete the articles and journalist information that is displayed in the front end.</p>
                    <p>Additional features include a fully working weather widget and 'breaking news' section that pulls real news stories from the News API which updates on a regular basis. </p>
                    <span><p>Built with <a href="https://github.com/tinahouston" target ="blank" className = "team-link">Tina Houston</a>, <a href ="https://github.com/mz-biddy01" target ="blank" className = "team-link">Helen Aguda</a> and <a href ="https://github.com/gregor69" target ="blank" className = "team-link">Gregor Simpson</a></p></span>
                    <a className = "demo-button" href= "https://github.com/scoupar/Java_News_App_Frontend" target ="_blank">View Code</a>
            
                </div>
                
                <div className = "project-devicon-container">
                <DevIcon className = "project-devicon" icon ="java" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="javascript" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="html5" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="css3" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="npm" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="visualstudio" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="intellij" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="git" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="github_badge" height = {40} fill="whitesmoke"/>
                </div>

            </div>
            <div className = "project-card">
                <div className = "project-title">
                <h1>Hello Space! - a full-stack interactive education app</h1>
                <img className = "hidden-image"src = {hellospacebanner} alt = "hello-space-banner" width = "300"/>
                <br></br>
                <a className = "hidden-button" href ="https://youtu.be/tW9jmAHcNuE" target = "blank">View Demo on YouTube</a>
                </div>
                <div className ="project-image">
                <ReactPlayer className = "video" url="https://youtu.be/tW9jmAHcNuE" controls />
                </div>
                <div className = "project-text">
                <p>Built using React for the front end and an Express server to perform CRUD operations on a MongoDb database. The app also fetches data from multiple web API's (NASA and SpaceDevs) and displays selected data to the user.</p>
                <p>Libraries such as HighCharts, Leaflet and Canvas are used to display information and create an interactive learning environment for the user.</p>
                <p>Notable features include a quiz, information on upcoming launches into space and an interactive section that allows the user to move around space.</p>
                <span><p>Built with <a href="https://github.com/thestylishcoder" target ="blank" className = "team-link">Anna Cunningham</a> and <a href ="https://github.com/reneengraham" target ="blank" className = "team-link">Renee Graham</a></p></span>
                <p></p>
                <a className = "demo-button" href= "https://github.com/scoupar/SpaceAppProject" target ="_blank">View Code</a>
                
                </div>
                <div className = "project-devicon-container">
                <DevIcon className = "project-devicon" icon ="javascript" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="html5" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="css3" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="mongodb" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="npm" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="visualstudio" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="git" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="github_badge" height = {40} fill="whitesmoke"/>
                </div>

            
            </div>

            <div className = "project-card">
                <div className = "project-title">
                <h1>Stock Manager - a full-stack stock management app</h1>
                <img className = "hidden-image"src = {stockmanagerbanner} alt = "image" width ="300"/>
                <br></br>
                <a className = "hidden-button" href ="https://www.youtube.com/watch?v=z43hjhUEKd0" target = "blank">View Demo on YouTube</a>
                </div>
                <div className = "project-image">
                <ReactPlayer className = "video"url ="https://youtu.be/z43hjhUEKd0" controls/>
                </div>
                <div className = "project-text">
                    <p>This is a stock management app designed to be used in a restaurant, however it would also be suitable for use in any situation with suppliers and products. </p>
                    <p>The app is built with the flask python framework and is connected to a PostgreSQL database. Full CRUD operations are available to the user to manage both products and suppliers.</p>
                    <p>Users are alerted to out of stock items immediately on the home page as well as stock level alerters on the main product list.</p>
                    <p>This was a solo project undertaken after learning python for 4 weeks.</p>
                <a className = "demo-button" href= "https://github.com/scoupar/Stock_Manager_Project" target ="blank">View Code</a>
                
                </div>
                <div className = "project-devicon-container">
                <DevIcon className = "project-devicon" icon ="python" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="postgresql" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="html5" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="css3" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="npm" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="visualstudio" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="git" height = {40} fill="whitesmoke"/>
                <DevIcon className = "project-devicon" icon ="github_badge" height = {40} fill="whitesmoke"/>
                </div>

            </div>
        </div>
        </section>
        </>
    )
}

export default Projects; 