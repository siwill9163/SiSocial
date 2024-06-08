import "./profile.css"

import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'


export default function Profile(){
    return(
        <>
        <Topbar/>
        <div className="profile">
           <Leftbar/>
           <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                         <img className="profileCoverImage" src="/assets/post/4.JPG" alt="" />
                        <img className="profileUserImage" src="/assets/person/1.jpeg" alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Simon Williams</h4>
                        <span className="profileInfoDesc">Hello my friends</span>
                        
                    </div>
                   
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
                
           </div>
           
        </div>
        

       </>
    )
}