import React, { Component, useState } from 'react'
export class NewsItem extends Component {
    
    render() {
        // url for uniquely identify each news item
        let {title,description,imageUrl,newsUrl,author,publishedAt,source} = this.props;
        console.log(`published at ${publishedAt} by ${author}`);

        // // 
        // let [color,setColor]=useState("success")
        return (
            <div>
                <div className="card my-3" >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span class="position-absolute top-0  text-light p-2 bg-danger border border-light rounded" style={{right: '0%'}}> {source}
                        </span>
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text"> {description}...</p>
                        
                        <p className="card-text"><small className="text-body-secondary">Published by {author?author:'unknown'} at {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer"  target ="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default NewsItem
