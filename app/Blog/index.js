import React from 'react';
import {getAllGraphPosts, getGraphPost} from "../utils/graph";
import {BlogPostPreview} from "./BlogPostPreview";
import styled from 'styled-components';



const BlogWrapper = styled.div`
    display: grid;
    grid-auto-rows: 400px;
    grid-template-columns: repeat(3,30%);
    grid-gap: 40px 40px;
    width: 100vw;
    padding: 40px;
`

export class Blog extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            blogPostsIds: [],
            siteId: "a402fab0-dfc9-11e9-815b-41f22eba7175",
            activeId: false,
            blogPosts: {}
        }

        this.fetchBlogPost = this.fetchBlogPost.bind(this);
        this.updateActiveId = this.updateActiveId.bind(this);
    }

    getBlogPostsIds() {

        getAllGraphPosts().then( res => {
            this.setState({blogPostsIds:res.blogPosts})
        })

    }



    async fetchBlogPost(id) {

        return await getGraphPost(id)
    }

    updateActiveId(id) {
        this.setState({activeId: id})
    }

    componentDidMount() {
        this.getBlogPostsIds()
    }

    render() {


        return (
            <BlogWrapper>
                {
                    this.state.blogPostsIds.map((id, index) => {
                        return (<BlogPostPreview id={id} siteId={this.state.siteId} activeId={this.state.activeId}
                                                 updateActiveId={this.updateActiveId} index={index}
                                                 fetchBlogPost={this.fetchBlogPost}/>)
                    })
                }
            </BlogWrapper>

        )


    }


}