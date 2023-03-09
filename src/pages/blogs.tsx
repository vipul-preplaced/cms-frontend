import Blog from '../components/Blog'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'

type Props = {
  blogsData: any
}

const Blogs = ({ blogsData }: Props) => {

  const [selectedCategory, setSelectedCategory] = useState("")
  // const [blogsData, setBlogsData] = useState<any>([])

  // useEffect(() => {
  //   fetch('https://cms-prototype.onrender.com/api/blogs')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(response.statusText)
  //       }
  //       response.json().then((data) => {
  //         setBlogsData(data);
  //       });
  //     }).catch(err => {
  //       console.log(err)
  //     })
  // }, [])


  return (
    <div className='bg-[#f5f8ff] p-20'>

      {/* <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@tailwindcss/typography@0.4.x/dist/typography.min.css"
        />
      </Head> */}
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-4xl font-bold'>Blogs</h1>
        <p>Interview tips from top interviewers across the globe.</p>
        <div className='flex justify-between shadow-xl bg-white px-10 py-4 rounded-lg text-sm gap-10'>
          <button className={`${selectedCategory === "Interview Process" && "underline"}`} onClick={() => { setSelectedCategory("Interview Process") }}>Interview Process</button>
          <button className={`${selectedCategory === "Mock Interview" && "underline"}`} onClick={() => { setSelectedCategory("Mock Interview") }}>Mock Interview</button>
          <button className={`${selectedCategory === "Mentorship" && "underline"}`} onClick={() => { setSelectedCategory("Mentorship") }}>Mentorship</button>
          <button className={`${selectedCategory === "Interview Preparation Resources" && "underline"}`} onClick={() => { setSelectedCategory("Interview Preparation Resources") }}>Interview Preparation Resources</button>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-10 pt-10'>
        {blogsData.data && blogsData.data.map((blog: any, index: number) => {
          return <Blog key={index} id={blog.id} blogData={blog.attributes} />
        })}
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {

  const res = await fetch(`https://cms-prototype.onrender.com/api/blogs`)
  const data = await res.json()

  return {
    props: {
      blogsData: data
    }, // will be passed to the page component as props
  }
}

export default Blogs
