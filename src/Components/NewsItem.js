import React from 'react'
const NewsItem = (props)=>{
        // url for uniquely identify each news item
        let {title,description,imageUrl,newsUrl,author,publishedAt,source} = props;
        // console.log(`published at ${publishedAt} by ${author}`);
        var colour = 'danger';
        if(props.category === 'entertainment'){
            colour = 'warning';
            // console.log(colour);
        }
        else if(props.category === 'business'){
            colour = 'primary';
            // console.log(colour);
        }
        else if(props.category === 'sports'){
            colour = 'info';
            // console.log(colour);
        }
        else if(props.category === 'technology'){
            colour = 'dark';
            // console.log(colour);
        }
        else if(props.category === 'health'){
            colour = 'success';
            // console.log(colour);
        }
        else if(props.category === 'science'){
            colour = 'secondary';
            // console.log(colour);
        }
        // let [color,setColor]=useState("success")
        return (
            <div>
                <div className="card my-3 border-0" >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body bg-light">
                        <span className={`position-absolute top-0  text-light p-1 m-0 bg-${colour} rounded`} style={{right: '0%'}}> {source}
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

export default NewsItem
