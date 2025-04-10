import React from 'react'
import KhmerBook from './KhmerBook'
import { fetchbook } from './FetchBook'

async function page() {
  const data = await fetchbook();
  return (
    <div>
        <KhmerBook datas={data}/>
    </div>
  )
}

export default page