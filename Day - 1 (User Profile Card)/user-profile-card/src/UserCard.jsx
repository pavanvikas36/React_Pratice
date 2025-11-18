import React from "react"
import "./App.css"

const UserCard = ({name, age, location, avatar}) => {
    return (
        <div className="user-card fade-in">
            <img src={avatar} className="avatar" alt={name}/>
            <h2>{name}</h2>
            <p>{location}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default UserCard