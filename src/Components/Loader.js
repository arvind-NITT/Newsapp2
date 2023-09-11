import React from 'react'
import Style from './Styles.css'
export default function loader(props) {
 
  return (
    <div className='container d-flex justify-item-center'>
       <div className="loader" style={Style}>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
       
        <span className={`text-${props.mode==='Light'?"dark":"light"}`}>Loading....</span>
    </div>
    </div>
  )
}
