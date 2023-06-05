import React from 'react'
import Header from './Container/Header'
import Table from './Container/Table'
import Filter from './Container/Filter'
import Card from './Container/Card'
import Gap from './Container/gap'
const Home = () => {
  return (
    <div>
       <Header/>
       <gap/>
       <Table/>
       <Filter/>
       <Card/>
    </div>
  )
}

export default Home
