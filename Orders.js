import React from 'react'
import { connect } from 'react-redux'
import Header from './Container/Header'
const Orders = ({list}) => {
  return (
    <div>
      <Header/>
      <h2 className='mt-4'>Please wait your delicious food is being prepared</h2>
       <center>
        {list.length>0 ?
        <div className='container '>
             <div className='row'>
                {list.map((item)=>(
                 <div className='col-md-4' style={{padding:"5px"}} key={item.id}>
                      <div className='card  bg-warning' style={{width:"18rem",padding:"3px"}} >
                        <img src={item.url} className='card-img-top'/>
                         <div className='card-body'>
                              <h5> <div className='card-title'>{item.name} </div></h5>
                              <div className='card-text'>Billing Amount Rs.{item.prize} </div>
                             <p>Table Number:{item.table_number}</p>
                         </div>
                    </div>   
                 </div>
                     
                ))}
             </div>
        </div>
        :
        <div className='h3'>
            No order placed bhai
        </div>
     }
     </center>
    </div>
  )
    }

const mapStateToProps=state=>({
    list:state.orderreducer 
})

export default connect(mapStateToProps)(Orders)
