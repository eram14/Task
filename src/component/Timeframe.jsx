import React from 'react'

function Timeframe(props) {
  return (
    <>
        <button className={(props.index===props.active?'optionbtn':'optionbtn2')+'  col px-1 mx-1'} onClick={()=>props.setActive(props.index)}> {props.num}</button>
    </>
  )
}

export default Timeframe