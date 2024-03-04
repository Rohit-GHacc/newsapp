import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles= [];

  constructor(){
    super();
    console.log('hello i am a constructor and i have been called');
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
 }

 async componentDidMount(){
    console.log('cdm');
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=efbaafb4252d4557b79529f0c3ed595a&page=1&pageSize=20';
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});

 }
handleNextClick = async ()=>{
    console.log('next button clicked')
    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=efbaafb4252d4557b79529f0c3ed595a&page=${this.state.page}&pageSize=10`;
    
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({
        
    //     // data : await fetch(url),
    //     // parsedData : await data.json(),
    //     articles: parsedData.articles,
    //     page: this.page +1

    // });
    if (this.state.page +1 > Math.ceil(this.state.totalResults/20)) {

    }
    else {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=efbaafb4252d4557b79529f0c3ed595a&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }

}
 
handlePrevClick = async()=>{
    console.log('previous button clicked')
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=efbaafb4252d4557b79529f0c3ed595a&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
        page: this.state.page-1,
        articles: parsedData.articles
    })
    console.log('page = '+this.state.page);
}
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsPanda - Top Headlines</h2>

        <div className="row">
        {this.state.articles.map((element) => {
          console.log(element);
          return <div className="col-md-4 " key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):''} description={element.description?element.description.slice(0,88):''} imageUrl={element.urlToImage?(element.urlToImage):"https://i.ytimg.com/vi/EDxZf687tn4/maxresdefault.jpg"} newsUrl={element.url} />
          </div>
        })}
        <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button> 
                    <button className="btn btn-dark" type="button" onClick={this.handleNextClick}>Next &rarr;</button> 
                </div>
          

        </div>
      </div>
      
    )
  }
}

export default News
