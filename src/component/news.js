import React, { useEffect, useState } from "react";
import NewsItem from "./newsitem";

import Loading from "./loading.js";

const news = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState(20);
  const [catagory_name, setcatagory_name] = useState("Loading");

  const updatNews = async () => {
    let Document_url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=" +
      props.api +
      "&category=" +
      props.catagory +
      "&pageSize=" +
      pageSize;
    let data = await fetch(Document_url);
    let parsedata = await data.json();
    setArticle(parsedata.articles);
    setLoading(false);
    if (props.catagory != "general") {
      setcatagory_name(props.catagory);
    } else {
      setcatagory_name("Top headlines");
    }
  };

  const Read_more = async () => {
    setPageSize(pageSize + 5);
    updatNews();
  };

  useEffect(() => {
    updatNews();
    Read_more();
  }, []);

  if (loading) {
    return <Loading catagoryname={catagory_name} />;
  }
  return (
    <>
      <div className="container">
        <h6 className="mt-4 fw-bolder">{catagory_name.toUpperCase()}</h6>

        <div className="row">
          {article.map((e) => {
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
            onClick={Read_more}
          >
            Read more
          </button>
        </div>
      </div>
    </>
  );
};

export default news;
