import React from 'react'

 const Input = ({setMyInput}) => {
  return (
    <div>
            <input
                type="text"
                placeholder=" Search Film"
                onChange={(e) => setMyInput(e.target.value)}
            />
        </div>
  )
}


export default Input