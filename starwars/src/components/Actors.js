import React from "react"
import './StarWars.css'
import styled from 'styled-components';
import { StyledH2, StyledH3, Container, StyleP } from './ActorsStyles.js'


const Actors = (props) => {
    return (
        <div className="ContainerComp">
            <Container >
                <StyledH2>{props.name}</StyledH2>
                <div>
                    <StyledH3>About Me</StyledH3>
                        <StyleP>Gender: {props.gender}</StyleP>
                        <StyleP>Birth Year: {props.birthday}</StyleP>
                        <StyleP>Height: {props.height}</StyleP>
                </div>
            </Container>
            </div>
    )
}

export default Actors;