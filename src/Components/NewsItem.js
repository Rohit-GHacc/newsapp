import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        // url for uniquely identify each news item
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <div>
                <div className="card my-3" >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text"> {description}...</p>
                        <a href={newsUrl} rel="noreferrer"  target ="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default NewsItem
