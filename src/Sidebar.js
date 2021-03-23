import React, { Component } from 'react';
import pic10 from './image/team-1.jpg'
import pic11 from './image/team-2.jpg'
import pic12 from './image/team-3.jpg'
import pic13 from './image/team-4.jpg'
import pic14 from './image/team-5.jpg'
import pic15 from './image/team-6.jpg'
import pic16 from './image/team-7.jpg'
import pic17 from './image/team-8.jpg'

class Sidebar extends Component {
    render() {
        // const text = document.querySelector('.text')
        // text.innerHTML = text.textContent.replace(/\S/g,
        //     "<span>$&</span>");
        //
        // const letters = document.querySelectorAll('span');
        // for (let i=0; i<letters.length; i++){
        //     letters[i].addEventListener("mouseover", function()
        //     {
        //         letters[i].classList.add('active')
        //     })
        // }
        return (
            <div className="animates">

                <section>
                 <div className="banner-area">
                     <h2>MicroTech</h2>
                 </div>
                </section>

                <div className="box1">
                    <h1>MicroTech Developers</h1>
                    <span style={{"--i":1}}><img src={pic10} alt="1" /></span>
                    <span style={{"--i":2}}><img src={pic11} alt="2"/></span>
                    <span style={{"--i":3}}><img src={pic12} alt="3"/></span>
                    <span style={{"--i":4}}><img src={pic13} alt="4"/></span>
                    <span style={{"--i":5}}><img src={pic14} alt="5"/></span>
                    <span style={{"--i":6}}><img src={pic15} alt="6"/></span>
                    <span style={{"--i":7}}><img src={pic16} alt="7"/></span>
                    <span style={{"--i":8}}><img src={pic17} alt="8"/></span>

                </div>

            </div>
        );
    }
}

Sidebar.propTypes = {

};

export default Sidebar;