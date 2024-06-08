import "./leftbar.css"


import {Users} from "../../dummyData"
import Freinds from "../freinds/Freinds"
export default function Leftbar(){
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">

                    <li className="lileftbarListItem">
                    <span class="material-symbols-outlined leftbarI">rss_feed</span>
                    <span className="leftbarListItemText">Feed</span></li>

                    <li className="lileftbarListItem">
                    <span class="material-symbols-outlined leftbarI">chat</span>
                    <span className="leftbarListItemText">Chat</span></li>

                    <li className="lileftbarListItem">
                    <span class="material-symbols-outlined leftbarI">play_circle</span>
                    <span className="leftbarListItemText">Videos</span></li>

                    <li className="lileftbarListItem">
                    <span class="material-symbols-outlined leftbarI">group</span>
                    <span className="leftbarListItemText">Groups</span></li>

                    <li className="lileftbarListItem">
                    <span class="material-symbols-outlined leftbarI">bookmark</span>
                    <span className="leftbarListItemText">Bookmarks</span></li>

                    <li className="lileftbarListItem">
                    <span class="material-symbols-outlined leftbarI">work</span>
                    <span className="leftbarListItemText">Jobs</span></li>

                    <li className="lileftbarListItem">
                    <span class="material-symbols-outlined leftbarI">event</span>
                    <span className="leftbarListItemText">Events</span></li>
                </ul>
                <button className="leftbarButton">Show More</button>
                <hr className="leftbarHr"/>
                <ul className="leftbarFreindList">
                    {Users.map(u=>(
                        <Freinds key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}