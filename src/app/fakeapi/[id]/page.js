import React from 'react'
import API_routes from "./route_data";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id
 
  // fetch data
  const product = await fetch('https://jsonplaceholder.typicode.com/posts/'+id).then((res) => res.json())
 
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    openGraph: {
      title: product.title,
      description:product.body
      // images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}


const Page = () => {
  return (
    <div>
     <API_routes/> 
    </div>
  )
}

export default Page
