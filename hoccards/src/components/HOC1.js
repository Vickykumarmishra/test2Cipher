import React from 'react'

export default function HOC1(props, props2) {
  return (
    <div>
      <props.cmp/>
      

      

      <div class="container text-center">
  <div class="row">
    <div class="col" style={{height:'2rem' ,width:'2rem'}}>
      <p>Payday Surprise</p>
      <h6  style={{color:'red'}}>#SRPSPDYY</h6>
    </div>
    <div class="col" style={{background:'purple', height:'4rem' ,width:'1.5rem'}}>
      <h6 style={{color:'white'}}>20%off</h6>
    </div>
  </div>
</div>
      
      
    </div>)
  
}
