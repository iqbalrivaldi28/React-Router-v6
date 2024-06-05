import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const CarDetail = () => {

  const {id} = useParams()

  // const {text} = useOutletContext()

  return (
    <>
      <div>CarDetail {id  }</div>
      {/* <div>{text}</div> */}
    </>
  )
}

export default CarDetail