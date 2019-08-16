import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
    border:2px black solid;
    background: grey;
    width: 45%;
    margin: 10px;
        h2{
            color: #443e3e;
            text-shadow: 1px 1px 5px #fff;
            border-bottom:2px black solid;
            padding-bottom: 5px;
            font-size:2.2rem;
            font-family: 'Cormorant Garamond', medium italic;
        }
        p{
            font-size: 1.45rem;
            font-style: bold;
            color: white;
        }
`;

const PersonCard = (props) =>{
    console.log(props);
    const {name, birth, gender, haircolor, height, mass} = props;
    return(
        <CardStyle className="person-card">
            <h2 className="title">
                {name}
            </h2>
                <p>Birth Year: {birth}</p>
                <p>Gender: {gender}</p>
                <p>HairColor: {haircolor}</p>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
        </CardStyle>
    )
}
export default PersonCard;