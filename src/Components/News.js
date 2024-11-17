import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  let {setprogress, country, apiKey, pageSize,category, badgecolor} = props
 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const [articles , setArticles] = useState([]);
  const [loading , setLoading] = useState(false);
  const [page , setPage] = useState(1);
  const [totalResults , setTotalResults] = useState(0);

 

  const updateNews = async () => {
    setprogress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    setprogress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    setprogress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setprogress(100);
  }
  useEffect(() => {
    document.title = `NewsWave - ${capitalizeFirstLetter(category)}`;
    updateNews();
    // eslint-disable-next-line
  }, [])


  // HandlePrevious = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }

  // HandleNext = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
    const badgeColor = badgecolor(category);
    return (
      <>

        <h1 className={`text-center text-${badgeColor}`} style={{ marginTop: '90px' }}>NewsWave - Top {capitalizeFirstLetter(category)} Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className='container'>
            <div className='row my-3'>
              {articles.map((element, index) => {
                return (
                  <div className='col-md-3 my-3' key={`${element.url}-${index}`}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 33) : ""}
                      description={element.description ? element.description.slice(0, 48) : ""}
                      imageUrl={element.urlToImage ? element.urlToImage : "https://about.fb.com/wp-content/uploads/2023/09/GettyImages-686732223.jpg"}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      badgecolor={badgeColor}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

      </>
    );
  
}
export default News;
