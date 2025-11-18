import React, {useState} from "react"
import "./App.css"
import UserCard from "./UserCard"

const App = () => {
  const [isVisible, setVisible] = useState(true)
  const user = {
    name: "Pavan Vikas Nayak",
    age: 24,
    location: "Sangareddy, Telangana",
    avatar: "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg"
  }

  const toggleVisibility = () => {
    setVisible(!isVisible)
  }
  
  return (
    <div className="app-container">
      <button className="toggle-btn" onClick={toggleVisibility}>
        {isVisible ? "Hide Profile" : "Shoe Profile"}
      </button>
      {isVisible && <UserCard {...user}/>}
    </div>
  )
}

export default App;