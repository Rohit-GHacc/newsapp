import React from 'react'
import loading from './spinner.gif'
const Spinner = ()=> {
    return (
      <div className="text-center">
        <img className="my-3" src={loading} alt="loading" style={{height: '2rem'}}/>
      </div>
    ) 
}
export default Spinner
