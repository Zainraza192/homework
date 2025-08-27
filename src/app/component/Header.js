

import React from "react";

export const Header = ()=> {
    return (
        <div className="mainhead">
           <div className="text">
             <img src="/images/tdesk.svg" className="img"></img>

            <a href="#"> 
                <span>T</span>
                Desk
            </a>

             <div className="list">
                <ul>
                    <a>Home</a>
                    <li>Blog</li>
                    <li>Knowledge Base</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button>login</button>
            </div>



           </div>
           
        </div>
    )
}