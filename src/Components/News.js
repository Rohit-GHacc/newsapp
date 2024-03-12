import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(props){
    super(props);
    console.log('hello i am a constructor and i have been called');
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    // changing the title of the page according to the categories of the news
    document.title = `${this.capitalize(this.props.category)}-NewsPanda`;
    
    console.log('page size is :' + this.props.pageSize);
 }
 //function for capitalizing first letter below:
 capitalize = (str)=>{
  return str.charAt(0).toUpperCase() + str.slice(1);
 }

 async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efbaafb4252d4557b79529f0c3ed595a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    
    console.log('total results are :' + parsedData.totalResults);
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
    })
 }
 async componentDidMount(){
    // console.log('cdm');
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efbaafb4252d4557b79529f0c3ed595a&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles,loading: false, totalResults: parsedData.totalResults});
    this.updateNews();

 }
handleNextClick = async ()=>{
    console.log('next button clicked')

    // if (!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efbaafb4252d4557b79529f0c3ed595a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }
    this.setState({page: this.state.page+1});
    this.updateNews();

}
 
handlePrevClick = async()=>{
    console.log('previous button clicked')
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efbaafb4252d4557b79529f0c3ed595a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({
    //     page: this.state.page-1,
    //     articles: parsedData.articles,
    //     loading: false
    // })
    // console.log('page = '+this.state.page);
    this.setState({page: this.state.page -1 });
    this.updateNews();
}
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin: '40px 25px', color: 'white'}}>NewsPanda - Top {this.capitalize(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element) => {
          console.log(element);
          return <div className="col-md-4 " key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):''} description={element.description?element.description.slice(0,88):''} imageUrl={element.urlToImage?(element.urlToImage):"https://i.ytimg.com/vi/EDxZf687tn4/maxresdefault.jpg"} newsUrl={element.url} category={this.props.category} author = {element.author} publishedAt={element.publishedAt} source={element.source.name} />
          </div>
        })}
        <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button> 
                    <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" type="button" onClick={this.handleNextClick}>Next &rarr;</button> 
                </div>
        </div>
      </div>
      
    )
  }
}

export default News
