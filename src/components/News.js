import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount() {
    try {
      let url = "https://newsapi.org/v2/top-headlines?apiKey=6e2e48d547344a74be165ba0a6bd19cf&q=olympics&page=1";
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({ articles: parseData.articles });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }
  handleNextClick = async ()=>{
    console.log('Next');
    let url = `https://newsapi.org/v2/top-headlines?apiKey=6e2e48d547344a74be165ba0a6bd19cf&q=olympics&page=${this.state.page+1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
        page :this.state.page + 1,
        articles: parseData.articles
    })
  }
 handlePrecClick= async()=>{
    console.log('Prev');
    let url = `https://newsapi.org/v2/top-headlines?apiKey=6e2e48d547344a74be165ba0a6bd19cf&q=olympics&page=${this.state.page-1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
        page :this.state.page-1 ,
        articles: parseData.articles
    }   
)
  }
  render() {
    const { articles } = this.state;

    return (
      <div className='container my-3'>
        <h2>News Pulse - HeadLines</h2>
        <div className="row">
          {articles.length > 0 ? (
            articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 57) : ""}
                  ImageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))
          ) : (
            <p>No articles available</p>
          )}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" class="btn btn-dark" disabled={this.state.page<=1} onClick={this.handlePrecClick}>&larr; Previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
