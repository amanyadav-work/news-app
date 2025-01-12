import React from 'react'
import './NewsItem.css'

const NewsItem = ({newsTitle, newsDescription, newsImg, newsUrl}) => {
  return (
 <>
<div className="card" style={{width: "31%", margin:"0 auto",}}>
  <img src={newsImg?newsImg:"/fallbackimg.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{newsTitle}</h5>
    <p className="card-text">{newsDescription}</p>
    <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
 
 </>
  )
}

export default NewsItem
