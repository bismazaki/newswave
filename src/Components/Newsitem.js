import React from 'react'

const  Newsitem =(props)=> {
    let {title ,  description, imageUrl , newsurl , author , date, source, badgecolor} = props
    return (
      <div>
    <div className="card" >
    <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${badgecolor}`} style={{zIndex: '1', left: '90%'}}>
      {source}
  </span>
        <img src={imageUrl} className="card-img-top" alt="img"/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
         <p className="card-text">{description}...</p>
         <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on { new Date(date).toGMTString()}</small></p>
         <a href={newsurl} rel='noreferrer' target='_blank' className="btn btn-dark">Read More</a>
     </div>
</div>
      </div>
    )
  
}
export default Newsitem;