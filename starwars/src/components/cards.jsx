import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
    border:2px black solid;
    background: grey;
    width:200px
        h2{
            color: #443e3e;
            text-shadow: 1px 1px 5px #fff;
            border-bottom:2px black solid;
            padding-bottom: 5px;
        }
        p{
            font-size: 1.25rem;
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
                <p>{birth}</p>
                <p>{gender}</p>
                <p>{haircolor}</p>
                <p>{height}</p>
                <p>{mass}</p>
        </CardStyle>
    )
}
export default PersonCard;