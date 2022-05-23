import React, { useState } from 'react'
import Button from './Button'
import Timeframe from './Timeframe'

const arr = ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5']
const arr2 = ['1 Day', '7 Days', '30 Days', '1 Year', '5 Year']
function Container() {

  const [activeTier, setActiveTier] = useState(0)
  const [activeTimeFrame, setActiveTimeFrame] = useState(0)

  return (
    <div className='m-3 p-3'>
      <div className="card" >
        <div className="card-body">
          <div className='row'>
            <p className='col' style={{
              fontWeight: '700',
              fontSize: '20px'
            }}>ROI Calculator</p>
            <button style={{
              border: 'none',
              backgroundColor: 'white',
              marginLeft: '44%',
              position: 'absolute',
              fontSize: '30px',
              top: '5px'
            }} className='col'>X</button>
          </div>
          <div className='row'
            style={{
              position: 'absolute',
              top: '35px',
              right: '10px',
              padding: '10px'
            }}>
            <div className="form-check col">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
              <label className="form-check-label" for="exampleRadios1">
                CAKE
              </label>
            </div>
            <div className="form-check form-switch col">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
              <label className="form-check-label" for="flexSwitchCheckChecked">USD</label>
            </div>
          </div>
          <input defaultValue='0.00 USD' className='inputText form-control' type='text' />
          <div className='row'>
            <button className='opt col'>$1000</button>
            <button className='opt col'>$100</button>
            <p className='col text' style={{ marginTop: '3px', marginRight: '-90px' }}>~CAKE 0.000</p>
          </div>


          <div className='my-3'>
            <p style={{ fontWeight: '600' }}>Timeframe</p>
            <div className='row'>
              {arr2.map((item, index) => {
                return <Timeframe num={item} index={index} active={activeTimeFrame} setActive={setActiveTimeFrame} />
              })}
            </div>
          </div>

          <div className='my-3'>
            <p style={{ fontWeight: '650', fontSize: '18px' }}>Enable Accelerated APY</p>
            <div className="form-check form-switch col">
              <input className="form-check-input" type="checkbox" style={{
                right: '20px',
                padding: '10px',
                position: 'absolute',
                top: '41%',
                width: '45px',
                height: '25px'
              }} id="flexSwitchCheckChecked" checked />
            </div>
            <p className='text2'>Select Tier</p>
            <div className='row'>
              {arr.map((item, index) => {
                return <Button num={item} index={index} active={activeTier} setActive={setActiveTier} />
              })}
            </div>
          </div>


          <p className='text2' style={{ textAlign: 'end' }}>ROI at Current Rates</p>
          <input defaultValue='0.00 USD' className='inputText form-control' style={{
            marginTop: '-10px'
          }} type='text' />

          <p className='text' style={{ textAlign: 'end' }}>~ 0.000 CAKE + 0.000000 DON</p>
          <div className='row' style={{ fontWeight: '650' }}>
            <p className='col'>APY</p>
            <p className='col' style={{ color: '#F1C42C', marginLeft: '85%' }}>9.0%</p>
          </div>
          <ul>
            <li className='text'>Calculated based on current rates</li>
            <li className='text'>All figures are estimates provided for your convience only, and by no means represent guarantedd returns.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Container