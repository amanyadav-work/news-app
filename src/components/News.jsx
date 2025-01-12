import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'



const News = ({ searchNews, category }) => {

    const [news, setnews] = useState(0);
    const [loaders, setloaders] = useState(1);
    const [pageno, setpageno] = useState(1);

    const handleNextPage = () => {
        setpageno(pageno + 1);
    }
    const handlePrevPage = () => {
        setpageno(pageno - 1);
    }

    const functionName = async () => {
        let url = `https://newsapi.org/v2/top-headlines?apiKey=322a3a77e5184ff68d9605fab5ef11b2&category=${category}&page=${pageno}&pageSize=${searchNews.pagesize}&q=${searchNews.squery ? searchNews.squery : "t"}`;
        setloaders(1)
        let data = await fetch(url)
        let parsedData = await data.json();
        setloaders(0)
        // Check if 'articles' exists in the response
        if (parsedData.articles) {
            setnews(parsedData); // Set the news articles if present
        } else {
            setloaders(1)
            const fallbackData = await fetch('./src/components/a.json');
            const fallbackParsedData = await fallbackData.json();
            const filteredData = searchNews.squery ? fallbackParsedData.articles.filter(item => item.title.toLowerCase().includes(searchNews.squery.toLowerCase())) : news.articles;
            if (searchNews.squery) {
                    setnews({
                        ...news,
                        articles: filteredData
                    })
                
            } else {
                setnews(fallbackParsedData);
            }
            setloaders(0)
        }
    }

    useEffect(() => {

        functionName();


    }, [searchNews.squery, pageno, category])
    console.log(news)

    useEffect(() => {
        setpageno(1)
 
    }, [searchNews.squery])
    

    return (
        <>
            <h1 className='text-center my-5'>News</h1>
            <div className={loaders == 1 ? "visible-loader" : "hidden-loader"} style={{ display: `${loaders}` }}><img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" /></div>
            <div style={{ display: loaders === 1 ? 'none' : 'block' }}            >
                <div style={{ display: 'flex', gap: "25px", justifyContent: 'space-evenly', margin: "auto", maxWidth: "1250px", flexWrap: "wrap" }}>
                    {
                        (news.totalResults === 0 )
                            ? (
                                <div className="container text-center m-5">
                                    <p>No News Found</p>
                                </div>
                            ) : null // Ensures nothing is rendered when the condition is not met
                    }




                    {news.articles && news.articles.map((item) => {
                        if (item.title !== "[Removed]") {
                            return <NewsItem key={item.url} newsTitle={item.title} newsDescription={item.description ? item.description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum minima veritatis, a illo veniam corporis consequuntur ducimus recusandae eos sit"} newsImg={item.urlToImage} newsUrl={item.url} />
                        }
                    })
                    }
                    <div className="container d-flex justify-content-between">
                        <button onClick={handlePrevPage} className="btn btn-primary" disabled={pageno <= 1}>Previous Page</button>
                        <button onClick={handleNextPage} className="btn btn-primary" disabled={pageno >= 2}>Next Page</button>
                    </div>

                </div>
            </div>

        </>




    )

}


export default News
