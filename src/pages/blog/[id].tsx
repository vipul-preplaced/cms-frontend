import React from 'react'
import ReactMarkdown from 'react-markdown'

type Props = { data: any }

const index = ({ data }: Props) => {
  return (
    <div className='bg-[#f4f4f4]'>
      <div className='bg-blue-100 p-20 space-y-5'>
        <p className='max-w-screen-xl mx-auto text-4xl font-bold'>
          {data.Title}
        </p>
        <p className='max-w-screen-xl mx-auto text-2xl font-semibold'>
          {data.Description}
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto px-20 py-10'>
        <ReactMarkdown className='prose'>
          {data.Content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {

  const res = await fetch(`https://cms-prototype.onrender.com/api/blogs/${context.params.id}`)
  const data = await res.json()

  return {
    props: { data: data.data.attributes },
  }
}

export default index