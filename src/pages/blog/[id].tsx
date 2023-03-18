import Head from 'next/head';
import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

type Props = { data: any }

const Index = ({ data }: Props) => {
  return (
    <div className='bg-[#f4f4f4]'>
      <Head>
        <title>Blog</title>

        <meta name="description" content="Preplaced Mentor" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={`http://localhost:3000/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Blog`} />
        <meta property="og:description" content="Preplaced Mentor" />
        {/* <meta property="og:image" content={(mentorData && mentorData.photoUrl) ? mentorData.photoUrl : ""} /> */}

        {/* <!-- Twitter Meta Tags --> */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta property="twitter:domain" content="app.preplaced.in" />
        <meta property="twitter:url" content={`http://localhost:3000/blog`} />
        <meta name="twitter:title" content="Preplaced" />
        <meta name="twitter:description" content="Preplaced Mentor" />
        <meta name="twitter:image" content="Blog" />
      </Head>
      <div className='bg-blue-100 p-20 space-y-5'>
        <p className='max-w-screen-xl mx-auto text-4xl font-bold'>
          {data?.Title}
        </p>
        <p className='max-w-screen-xl mx-auto text-2xl font-semibold'>
          {data?.Description}
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto px-20 py-10'>
        <ReactMarkdown className='prose' rehypePlugins={[rehypeRaw]} >
          {data?.Content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps({ params }: any) {

  console.log("static site generation Called");
  
  const res = await fetch(`https://cms-prototype.onrender.com/api/blogs/${params.id}`)
  const data = await res.json();

  // console.log("Data", data);

  return {
    props: { data: data.data ? data.data.attributes : null },
    revalidate: 100,
    notFound: data.data ? false : true
  }
}

export default Index