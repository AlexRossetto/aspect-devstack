import React from 'react';
import { contentContainerStyle } from './styles'

interface HomeType {
  children: React.ReactNode
}

const Home = (props: HomeType) => {
  return (
    <div style={contentContainerStyle}>
      {props.children}
    </div>
  )
}




export default Home;