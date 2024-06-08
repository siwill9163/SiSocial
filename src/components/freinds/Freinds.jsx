import "./freinds.css"

export default function Freinds({user}){
    return (
    <li className="leftbarFreind">
        <img className="leftbarFriendImage" src={user.profilePicture} alt="" />            
        <span className="leftbarFriendName">{user.username}</span>
    </li>
    )
}