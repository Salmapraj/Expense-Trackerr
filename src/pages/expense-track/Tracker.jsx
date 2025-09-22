import React, { useState } from 'react'

function Tracker() {
  const handleSubmit=(e)=>{
e.preventDefault()
  }
  const [description,setDescription]=useState("")
  const [amount,setAmount]= useState(0)
  return (
    <>
    <div>
      <div>

      <h1>Expense tracker</h1>
      <div className='flex justify-center gap-80 mt-15 '>

        <div> 
          <h2>Your balance</h2>
          <p>$0.00</p>
          <div>
            <h2 className='text-xl'>Income:</h2>
            </div>
            <div className='mb-5'>
              <h2 className='text-xl'>
                Expenses:
              </h2>
            </div>

              <form action="" onSubmit={handleSubmit} className='flex flex-col space-y-2 items-center  md:flex-row lg:gap-6  items-center space-x-3'>

              <input type="text" className='border rounded px-2 py-1 ' placeholder='description' value={description}  onChange={(e)=>setDescription(e.target.value)}/>
              <input type="number" className='border rounded px-2 py-1 ' placeholder='Amount' value={amount}  onChange={(e)=>setAmount(e.target.value)}/>
              <div className='flex justify-evenly'>

              <input type="radio" className='' /> <label htmlFor="" >Income</label>
              <input type="radio" className='ml-2' /> <label htmlFor="" >Expense</label>
              </div>
              <button type='submit' className='p-2   rounded-md bg-green-500 text-white hover:bg-green-400'>Add Transaction</button>
              </form>

          </div>

        <div> Profile Info</div>
      </div>
      </div>
    </div>
    <div className='mt-5'>
      <h2>Transactions list</h2>
      <div className='grid grid-cols-3 border divide-x divide-gray-300 divide-y divide-gray-300'>
        {/* Header rows */}
<div className="font-semibold bg-gray-100 p-2 ">Transaction Name</div>
<div className="font-semibold bg-gray-100 p-2 ">Expense/Income</div>
<div className="font-semibold bg-gray-100 p-2 ">Amount</div>


{/* Data rows */}
<div>kje</div>
<div>kje</div>
<div>kje</div>
<div>kje</div>
<div>kje</div>
<div>kje</div>
      </div>
    </div>
    </>
  )
}

export default Tracker