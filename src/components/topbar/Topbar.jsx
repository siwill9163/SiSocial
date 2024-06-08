import "./topbar.css"


export default function Topbar() {
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">SiSocial</span>
            </div>
            <div className="topbarCenter">
          
                <div className="searchbar">  <span class="material-symbols-outlined searchI">search</span>
                    <input className="searchInput" placeholder="Search for friends, posts or videos"  />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                    
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                    <span class="material-symbols-outlined">person</span>
                    <span className="topbarIconBade">1</span>
                    </div>

                    <div className="topbarIconItem">
                    <span class="material-symbols-outlined">chat</span>
                    <span className="topbarIconBade">2</span>
                    </div>

                    <div className="topbarIconItem">
                    <span class="material-symbols-outlined">notifications</span>
                    <span className="topbarIconBade">1</span>
                    </div>
                </div>
                <img src="assets/IMG_8787.jpeg" alt="" className="topbarImage" />
            </div>
        </div>
    )
}