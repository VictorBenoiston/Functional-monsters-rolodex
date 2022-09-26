import React, { Component } from "react";
import './Card.css'

export default props => {
    const { name, id, username, email } = props.item

        return (<div className="card-container">
        <div className="content">
            <h1>{name}</h1>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="`monster ${name}`" />
            <h4>Username: {username}</h4>
            <p><u>{email}</u></p>
        </div>
    </div>)
       
}
