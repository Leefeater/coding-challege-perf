import React, {useState} from 'react';
import styled from 'styled-components';
import {Content} from './Content';
import ReactHtmlParser from 'react-html-parser';

const PostWrapper = styled.div`
    border:1px solid #f1f1f1;
    border-radius:3px;
    position:relative;
    background-image:url(https://convertlyimguploadeast.s3.amazonaws.com/${ ({siteId}) => siteId}/${({img}) => img});
    background-size: cover;
    overflow:hidden;
`;
const ContentWrapper = styled.div`
    position:absolute;
    bottom:-100%;
    transition:all 1s ease;
    width:100%;
    background:#fff;
`;

const ContentModal = styled.div`

    height:80vh;
    width:80vw;
    position:fixed;
    transition:all 1s ease;
    background:#fff;
    border:1px solid #f1f1f1;
    border-radius:5px;
    z-index:1;
    ${( {active} ) => active ? 
    `left:10vw;
    top:10vh;` :
    `left:-100vw;
    top:-100vh;
    `
}
    & span {
        position:absolute;
        top:5px;
        right:5px;
        cursor:pointer;
    }
`;

export const BlogPostPreview = ({id, fetchBlogPost, index, siteId, activeId, updateActiveId}) => {

    const [blogData, updateBlogData] = useState({});
    let slider;

            fetchBlogPost(id).then( res => {
                updateBlogData(res);
            });

    const slideUp = () => {
            if(slider) slider.style.bottom = "0"
    };

    const slideDown = () => {
        if(slider) slider.style.bottom = "-100%"
    };


    return(
        <PostWrapper
            siteId={siteId}
            onMouseOver={ slideUp }
            onMouseOut={ slideDown }
            img={blogData.featureImage ? blogData.featureImage.src : ""}>
            {blogData?.itemType ?
                <ContentWrapper ref={el => slider = el}>
                    <Content title={blogData.postTitle} author={blogData.author} id={id} updateActiveId={updateActiveId} shortDescription={blogData.shortDescription}/>
                </ContentWrapper>
                :
                <div>Loading....</div>
            }
            <ContentModal active={ activeId === id } >
                <span onClick={() => { updateActiveId(false) }}>X</span>
                {ReactHtmlParser(blogData.postContent)}</ContentModal>
        </PostWrapper>

    )
}

//url(https://convertlyimguploadeast.s3.amazonaws.com//xyz.jpg})