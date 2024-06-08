import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}){
    const HomeRightbar = () => {
        return(
            <>
            <div className="birthdayContainer">
                <img className="birthdayImage" src="/assets/gift.jpg" alt="" />
                <span className="birthdayText"><b>Victoira</b> and <b>2 other freinds</b> have a birthday today</span>
            </div>
            <img className="adImage" src="/assets/coke.png" alt="" />
            <hr className="leftbarHr"/>
            <h4 className="rightbarTitle">Online friends</h4>
            <ul className="rightbarFriendsList">
                {Users.map(u=>(
            <Online key={u.id} user={u}/>
                ))}
            </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Colchester</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">London</span>
                </div>

                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Married</span>
                </div>
            </div>

            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="/assets/IMG_4930.jpeg" alt="" className="rightbarFollowingImage" />
                    <span className="rightbarFollowingsName">Sarah Smith</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="/assets/IMG_8787.jpeg" alt="" className="rightbarFollowingImage" />
                    <span className="rightbarFollowingsName">John Carter</span>
                </div>
            </div>
            </>
        )
    }
    return (
       <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
                
              
            </div>
       </div>
    )
}