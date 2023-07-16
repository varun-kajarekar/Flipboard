import React, { Component, useState } from "react";
import NewsItem from "./newsitem";

export class news extends Component {
  constructor() {
    super();
    
    this.state = {

      article: [],
      loading: true,
      pageSize: 20,
    };
  }

  async componentDidMount() {
    let {Durl} = this.props;
    let data = await fetch(Durl);
    let parsedata = await data.json();
    this.setState({ article: parsedata.articles, loading: false });
  }

  Read_more = async () => {
    let {Durl} = this.props;
    var pn = this.state.pageSize + 5;
    let url =Durl+"&pageSize=" +pn;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      article: parsedata.articles,
      loading: false,
      pageSize: this.state.pageSize + 5,
    });
  };
  render() {

    if (this.state.loading) {
      return (
        <div className="d-flex justify-content-center m-5">
          <div
            className="spinner-grow "
            style={{ width: "4rem", height: "4rem" }}
            role="status"
          ></div>
        </div>
      );
    }
    return (
      <>
      
      <div className="container">
  <div className="row mx-5">
          {this.state.article.map((e) => {
            return (
              <div className="col-md-4 my-4" key={e.title}>
                <NewsItem
                  title={e.title}
                  companyName={e.source.name}
                  imgurl={e.urlToImage}
                  publishedAt={e.publishedAt}
                  articleurl={e.url}
                />
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-center m-5">
          <button
            type="button"
            className="btn btn-outline-danger bg-danger text-white"
            onClick={this.Read_more}
          >
            Read more
          </button>
        </div>
      </div>
      </>
    );
  }
}

export default news;
