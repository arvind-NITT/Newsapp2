import React from 'react'

export default function ContactUs(props) {
    
    
    let mystyle={
        'background': '#111827'
      }
    let defaultstyle={
        'background': 'white'
      }
        
    return (
      <div className=' min-vh-100' style={props.mode==='Dark'?mystyle:defaultstyle}>
       <div className="container mt-5 p-3" style={props.mode==='Dark'?mystyle:defaultstyle} >
        <form action='/' typeof='get' >
        <div className="mb-3 mt-3">
  <label htmlFor="exampleFormControlInput1" className={`form-label text-${props.mode==='Light'?"dark":"light"}`}>Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput2" className={`form-label text-${props.mode==='Light'?"dark":"light"}`}>Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="name.."/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode==='Light'?"dark":"light"}`}>Your Suggesion</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button  type='submit' className={`btn btn-secondary text-${props.mode==='Light'?"dark":"light"}`}>submit</button>
</form>
</div>
      </div>
    )
  }

