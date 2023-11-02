import React, { useContext } from 'react'
import { mainPageContext } from './MainPage'


function Customer(props) {


 const currentForm = useContext(mainPageContext)
 console.log(currentForm);
 
  return (
    <div className='customer-div'>
        <h1 className='name' >Name: SANUF THAJ </h1>
        <h2>email: abc@abc.com </h2>
        <h2>Password: 123456789  </h2>
        <h2>address : kollam </h2>
        <h2>Phno: 9633708435 </h2>
    </div>
  )
}

export default Customer