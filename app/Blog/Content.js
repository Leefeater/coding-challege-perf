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
    font-size:14px;
    }
    & button {
        padding:10px 30px;
        cursor:pointer;
        background:#44A48E;
        color:#efefef;
        font-size:14px;
        border:none;
    }
    
    
`;

export const Content = (props) => {

    return (
        <Wrapper>
            <div>
            <h1>{props.title}</h1>
                <small>By {props.author && props.author}</small>
            <p>{props.shortDescription}</p>
            </div>
            <div>
                <button onClick={ () => {
                    props.updateActiveId( props.id )
                } }>Read Post</button>
            </div>
        </Wrapper>
    )

}