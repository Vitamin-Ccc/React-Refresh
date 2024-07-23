import profilePic from "./assets/profile_pic.jpg"

function Card(){
  return(
    <div className="card">
        <img className="card-image" src={profilePic} alt="profile picture"></img>
        <h2 className="card-title">Sky Lin</h2>
        <p className="card-text">I am jobless and I like coding.</p>
    </div>
  )
}

export default Card