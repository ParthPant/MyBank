import React, {useState} from 'react';


function MiniStatement(){
    const [accountNo, setAccountNo] = useState();
    return(
        <>
        <div className='place-content-center flex justify-center items-center h-screen'>
        <div className="card w-96 bg-gray-900 flex justify-center items-center">
      <form className="card-body flex justify-center items-center text-center">
        <div className="card-title">Account Number</div>
        <input
          type="text"
          placeholder="Enter account number"
          className="input border-black input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setAccountNo(e.target.value)}
        />
        <div className="card-actions">
            <button
              class="btn btn-active btn-primary bg-purple-600"
              onClick={(e) => {
                e.preventDefault();
                onsubmit(accountNo);
              }}
            >
              Submit
            </button>
          </div>
        </form>
        </div>
        </div>
</>
        

    );

}

export default MiniStatement;