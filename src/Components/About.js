import React from 'react'

export default function about(props) {
    let mystyle={
        'background': '#111827'
      }
    let defaultstyle={
        'background': 'white'
      }
      let Accordationstyle={
        "backgroundColor": "rgb(28 34 74)",
      }
  return (
    <div style={props.mode==='Dark'?mystyle:defaultstyle} className="min-vh-100">
      {/* <div className="container ">
        <div id="carouselExampleInterval" className="carousel slide mt-6" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src="https://static.vecteezy.com/system/resources/previews/000/185/160/original/streaming-live-news-background-template-vector.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src="https://static.vecteezy.com/system/resources/previews/000/185/160/original/streaming-live-news-background-template-vector.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://static.vecteezy.com/system/resources/previews/000/185/160/original/streaming-live-news-background-template-vector.jpg" className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
      </div> */}
      <div className="container p-3">
      <div className="accordion mt-5" id="accordionPanelsStayOpenExample">
        <div className={`accordion-item text-${props.mode==='Light'?"dark":"light"}`} style={props.mode==='Dark'?Accordationstyle:defaultstyle}>
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button style={props.mode==='Dark'?Accordationstyle:defaultstyle} className={`accordion-button text-${props.mode==='Light'?"dark":"light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              About This App
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>This  app is all about news, here you can watch amazing news and you would love to using it </strong><br/> News is something somebody doesn't want printed; all else is advertising.” “Popular culture is a place where pity is called compassion, flattery is called love, propaganda is called knowledge, tension is called peace, gossip is called news, and auto-tune is called singing.”
            </div>
          </div>
        </div>
        <div className={`accordion-item text-${props.mode==='Light'?"dark":"light"}`} style={props.mode==='Dark'?Accordationstyle:defaultstyle}>
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button style={props.mode==='Dark'?Accordationstyle:defaultstyle} className={`accordion-button collapsed text-${props.mode==='Light'?"dark":"light"}`}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              About Creater 
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <strong>This app is developed by Arvind Mali </strong> <br/>The developer currently a student of  MCA of batch 2024 from National Institute of Technology Trichy <br />AIR 55 in NIMCET 2021 <br />
              Belong From the chandwasa city , Loved to play Kabadii and cricket  
            </div>
          </div>
        </div>
        <div className={`accordion-item text-${props.mode==='Light'?"dark":"light"}`} style={props.mode==='Dark'?Accordationstyle:defaultstyle}>
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
          <button style={props.mode==='Dark'?Accordationstyle:defaultstyle} className={`accordion-button collapsed text-${props.mode==='Light'?"dark":"light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              About technology Used
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <strong>React, Newsapi, Bootstrap</strong><br />
                There are Mainly three technologies are used in the NewsApp <br /><br />
                React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

             Declarative views make your code more predictable and easier to debug. <br /><br />
             News API is a simple HTTP REST API for searching and retrieving live articles from all over the web. It can help you answer questions like:
<br />
What top stories is TechCrunch running right now?<br />
What new articles were published about the next iPhone today?<br />
Has my company or product been mentioned or reviewed by any blogs recently?<br /><br />
Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
