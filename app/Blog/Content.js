import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    padding:10px;
    & h1 {
      font-size:25px;
      margin:0;
    }
    & small {
      font-size:8px;
    }
    & p {
    font-size:12px;
    }
`;

export const Content = (props) => {

    return (
        <Wrapper>
            <div>
            <h1>{props.title}</h1>
                <small>By {props.author && props.author.name} - </small>
            <p>{props.shortDescription}</p>
            </div>
            <div>
                <button onClick={ () => {
                    props.updateActiveId( props.id )
                } }>View More</button>
            </div>
        </Wrapper>
    )

}