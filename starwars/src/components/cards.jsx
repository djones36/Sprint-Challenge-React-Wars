import React from "react";
// import styled from "styled-components";

const PersonCard = () =>{
    return(
        <div className="person-card">
            <h2 className="title">
                Name
            </h2>
            <ul>
                <li>birth</li>
                <li>gender</li>
                <li>haircolor</li>
                <li>height</li>
            </ul>
        </div>
    )
}
export default PersonCard;