import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import Link from 'next/link'
// import '../styles/prose.css'

type Props = {
  blogData: any
  id: number
}


const Blog = ({ blogData, id }: Props) => {
  // console.log(blogData);
  return (
    <div>
      {/* <Image src="https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsIjIwMjAvMDQvMTYvMDcvNTIvMzkvNjI2L1tCbG9nXS1OZXctSW50ZXJ2aWV3LVByb2Nlc3MtQ29udGVudC5qcGciXV0"
        width={500}
        alt=""
        height={500} /> */}

      <div className='w-96 border-2 rounded-lg p-10 space-y-5 shadow-xl'>
        <p className='text-3xl'>{blogData.Title}</p>
        <p>{blogData.Description}</p>
        <div>
          <Link href={`/blog/${id}`} className="font-bold hover:underline">Read Full Blog</Link>
        </div>
      </div>
      {/* <ReactMarkdown className='prose'>
        {blogData.Content}
      </ReactMarkdown> */}
    </div>
  )
}

export default Blog