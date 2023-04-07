import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { update } from '../warnaActive'

const Title = (props) => {
  const dispath = useDispatch()
  const title = props.title
  
  return (
    useEffect(() => {
      dispath(update({ title }))
      // console.log('tes')
    })
  )
}

export default Title