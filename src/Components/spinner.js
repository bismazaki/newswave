import React from 'react'
import arrow from './arrows.gif'

const Spinner = ()=> {
    return (
      <div className='text-center'>
        <img src={arrow} alt='loading'></img>
      </div>
    )
}
export default Spinner;
