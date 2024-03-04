import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles= [];

  constructor(){
    super();
    console.log('hello i am a constructor and i have been called');
    this.state = {
      articles: this.articles,
      loading: false
    }
 }

 async componentDidMount(){
    console.log('cdm');
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=efbaafb4252d4557b79529f0c3ed595a';
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles});

 }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsPanda - Top Headlines</h2>
        let data = 
        <div className="row">
        {this.state.articles.map((element) => {
          console.log(element);
          return <div className="col-md-4 " key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):''} description={element.description?element.description.slice(0,88):''} imageUrl={element.urlToImage?(element.urlToImage):"https://i.ytimg.com/vi/EDxZf687tn4/maxresdefault.jpg"} newsUrl={element.url} />
          </div>
        })}
          

        </div>
      </div>
      
    )
  }
}

export default News
