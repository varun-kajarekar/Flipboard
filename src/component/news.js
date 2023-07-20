import React ,{ useEffect,useState } from "react";
import NewsItem from "./newsitem";


const news =(props)=>{
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true)
    const [pageSize, setPageSize] = useState(20)

    const updatNews=async ()=>{
      let Document_url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey='+props.api+'&category='+props.catagory+'&pageSize='+pageSize;
      let data = await fetch(Document_url);
      let parsedata = await data.json();
      setArticle(parsedata.articles);
      setLoading(false)
    }

    const Read_more = async () => {
      setPageSize(pageSize+5);
      updatNews();
    }


    useEffect(() => {
      updatNews();
    }, [])

    if (loading) {
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
  <div className="row ">
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
}

export default news;
