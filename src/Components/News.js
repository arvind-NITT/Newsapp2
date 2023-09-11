import React ,{useEffect,useState} from "react";
import Newsitem from "./Newsitem";
// import Spinner from "./Spinner";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const [articles,setArticles]= useState([]);
    const [loading,setloading]= useState(true);
    const [page,setpage]= useState(1);
    const [TotalResult,setTotalResults]= useState(0);
    const  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
  let mystyle={
    'background': '#111827',
    'marginTop':" 56px"
  }
  

 const update = async ()=> {
    console.log("In Update");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=75b1c6e622cd42d1be0b821115c8b0a9&page=${page}&pageSize=${props.pageSize}`;
    // setState({ loading: true });
    let data = await fetch(url);
    let parsdata = await data.json();
    console.log(parsdata);
    setArticles(parsdata.articles);
    setTotalResults(parsdata.totalResults)
    setloading(false);
    setpage(page+1);
    // useState({
    //   articles: parsdata.articles,
    //   TotalResult: parsdata.totalResults,
    //   // loading: false
    // });
  }

  useEffect(()=>{
  update();
  if(props.Flag===0)
  props.changeMode();
  document.title = `${capitalizeFirstLetter(
    props.category
   )}-My News App`;
   // eslint-disable-next-line
  },[])
 

const fetchMoreData = async () => {
    console.log("IN Fetch more ")
    setpage(page+1);
    console.log(page);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=75b1c6e622cd42d1be0b821115c8b0a9&page=${page}&pageSize=${props.pageSize}`;
    // setState({ loading: true });
    let data = await fetch(url);
    let parsdata = await data.json();
    
 console.log(articles.length)
 let newdata=articles.concat(parsdata.articles);
 setArticles(newdata);
     
    console.log(articles );
  };

 
    return (
      <div className="min-vh-100" 
        style={props.mode==='Dark'?mystyle:{
          background:
            "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)",
            'marginTop':" 56px"
        }}
      >
        <h2 className={`text-center my-2 text-${props.mode==='Light'?"dark":"light"}`}>
          {capitalizeFirstLetter(props.category)} - Top Headlines
        </h2>
        {loading && <div className="d-flex justify-content-center"> <Loader mode={props.mode}/></div>}
      { !loading && <div className="container m-8">
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== TotalResult}
            loader={<Loader />}
          >
            <div className="container">
              <div className="row my-3">
                {articles.map((element) => {
                  return (
                    <div className="col-lg-4 col-md-6 my-3" key={element.url}>
                      <Newsitem
                        Title={element.title ? element.title : " "}
                        description={
                          element.description ? element.description : ""
                        }
                        imageUrl={element.urlToImage}
                        newsitem={element.url}
                        author={element.author}
                        publishedAt={element.publishedAt}
                        mode={props.mode}
                      />
                    </div>
                  );
                })}
              </div>
              </div>
          </InfiniteScroll>
        </div>}
      </div>
    );
  }

News.defaultProps = {
  category: "general",
  pageSize: 10,
};
News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
