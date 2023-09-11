import React from "react";

export default function Newsitem(props) {
  
    let {Title, description,imageUrl,newsitem,author,publishedAt,mode} = props;
    let mystyle={
      "backgroundColor": "rgb(80 72 80)",
    }
    return (
      <div>
        <div className={`card bg-${mode}` } style={{width: "18rem"}} >
          <img src={!imageUrl?"https://www.coindesk.com/resizer/M4GFO80vmW3rKsPmYdxBwtyyg0s=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZWHVEKCPGFF6BLDOGVGNO6IKTA.jpeg":imageUrl} className="card-img-top" alt=".."  />
          <div className="card-body" style={mode==='Dark'?mystyle:{"backgroundColor": "white"}}>
            <h5 className={`card-title text-${mode==='Light'?"dark":"light"}`} >{Title}</h5>
            <p className={`card-text text-${mode==='Light'?"dark":"light"}`}>
            {description}
            </p>
            <p className={`card-text text-${mode==='Light'?"dark":"light"}`}><small className={`card-text text-${mode==='Light'?"dark":"light"}`} >By {!author?"Arvind":author} on {new Date(publishedAt).toUTCString()}</small></p>
            <a rel="noreferrer" href={newsitem} target="_blank" className="btn btn-primary">
             Read More
            </a>
          </div>
        </div>
        
      </div>
    );

}

// style={mode==="light"?mystyle:style}
// 