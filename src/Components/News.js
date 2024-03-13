import React , {useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=> {
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);

  // constructor(props) {
  //   super(props);
  //   // console.log('hello i am a constructor and i have been called');
  //   state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults: 0
  //   }
    // changing the title of the page according to the categories of the news
    // document.title = `${capitalize(props.category)}-NewsPanda`;

    // console.log('page size is :' + props.pageSize);
  // }
  //function for capitalizing first letter below:
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const updateNews = async ()=> {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setState({ loading: true })
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(50);
    
    console.log('total results are :' + parsedData.totalResults);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(()=>{
    updateNews();
  },[]);


  // const componentDidMount = async () => {
    // console.log('cdm');
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    // setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json()

    // console.log(parsedData);
    // setState({articles: parsedData.articles,loading: false, totalResults: parsedData.totalResults});
  //   updateNews();

  // }
  const handleNextClick = async () => {
    // console.log('next button clicked')
    // if (!(page +1 > Math.ceil(totalResults/props.pageSize))) {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=efbaafb4252d4557b79529f0c3ed595a&page=${page + 1}&pageSize=${props.pageSize}`;
    //     setState({loading: true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     setState({
    //         page: page + 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }
    setPage(page+1);
    updateNews();

  }

  const handlePrevClick = async () => {
    // console.log('previous button clicked')
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=efbaafb4252d4557b79529f0c3ed595a&page=${page-1}&pageSize=${props.pageSize}`;
    // setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // setState({
    //     page: page-1,
    //     articles: parsedData.articles,
    //     loading: false
    // })
    // console.log('page = '+page);
    setPage(page-1);
    updateNews();
  }

  const fetchData = async () => {
    setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json()

    // console.log('total results are :' + parsedData.totalResults);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }
    return (
      <>
        <h1 className='text-center' style={{ margin: '40px 25px', color: 'white' }}>NewsPanda - Top {capitalize(props.category)} Headlines</h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                console.log(element);
                return <div className="col-md-4 " key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ''} description={element.description ? element.description.slice(0, 88) : ''} imageUrl={element.urlToImage ? (element.urlToImage) : "https://i.ytimg.com/vi/EDxZf687tn4/maxresdefault.jpg"} newsUrl={element.url} category={props.category} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                </div>
              })}

              {/* <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-dark" type="button" onClick={handleNextClick}>Next &rarr;</button>
              </div> */}
            </div>
          </div>
        </InfiniteScroll>

      </>

    );

}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.number
}

export default News
