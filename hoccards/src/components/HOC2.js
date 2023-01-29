import React from 'react'

export default function HOC2(props) {
  return (
    <div>
      <props.cmp/>

      <div class="container text-center">
  <div class="row">
    <div class="col">
      <p>First order</p>
      <h6  style={{color:'red' ,height:'2rem' ,width:'2rem'}}>#HPYFRST</h6>
    </div>
    <div class="col" style={{background:'purple', height:'4rem' ,width:'2rem'}}>
      <h6 style={{color:'white'}}>20%off</h6>
    </div>
  </div>
</div>
    </div>
  )
}
