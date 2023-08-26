import React from 'react'
import './table.css'
function TableSkeleton({text, addBtn}) {
  return (
    <div className='table-skeleton'>
        <p>{text} </p>
        {
            addBtn && <button>Add Subject</button>
        }
    </div>
  )
}

export default TableSkeleton