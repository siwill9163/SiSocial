import "./share.css"

export default function Share(){
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImage" src="assets/IMG_4930.jpeg" alt="" />
                    <input placeholder="Whats on your mind Simon" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">

                        <div className="shareOption">
                        <span class="material-symbols-outlined shareI">photo_library</span>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>

                        <div className="shareOption">
                        <span class="material-symbols-outlined shareI">Label</span>
                            <span className="shareOptionText">Tag</span>
                        </div>

                        <div className="shareOption">
                        <span class="material-symbols-outlined shareI">add_reaction</span>
                            <span className="shareOptionText">Mood</span>
                        </div>
                        
                        <button className="shareButton">Share</button>
                                                
                                           
                    </div>
                    
                </div>
            </div>
        </div>
    )
}