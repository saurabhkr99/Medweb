import React from 'react'

function DocumentCard(props) {
   return (
    <div className='d-flex my-card mx-4 mb-2 justify-content-between px-4 pt-2'>
    {props.document}
    </div>
  )
}

export default DocumentCard