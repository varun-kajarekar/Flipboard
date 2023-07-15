import React, { Component, useState } from "react";
import NewsItem from "./newsitem";

export class news extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: true,
      pageSize :20
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=806923e9dcde4834a58f2cc9ff6c784f&pageSize=20"
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ article: parsedata.articles, loading: false });
  }

  loadMore = async()=>{
    var pn = this.state.pageSize+5;
      let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=806923e9dcde4834a58f2cc9ff6c784f&pageSize="+pn
      let data = await fetch(url);
      let parsedata = await data.json();
      this.setState({ article: parsedata.articles, loading: false,pageSize: this.state.pageSize+5});
      console.log(pn)

  }
  render() {
    if (this.state.loading) {
      return (
        <div className="d-flex justify-content-center m-5">
            <div className="spinner-grow " style={{width: "4rem", height: "4rem" }} role="status">
            </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row mx-auto">
          {this.state.article.map((e) => {
            return (
              <div className="col-md-4 my-4" key={e.title}>
                <NewsItem
                  title={e.title}
                  companyName={e.source.name}
                  imgurl={e.urlToImage}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center m-5">
        <button type="button" class="btn btn-light" onClick={this.loadMore}>Load More</button>

        </div>
      </div>
    );
  }
}

export default news;
