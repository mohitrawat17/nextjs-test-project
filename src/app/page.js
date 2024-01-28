import Link from 'next/link'

const Home = () => {
  return (
    <div style={{display:"flex" ,alignItems:"center",justifyContent:"center",fontSize:"50px",color:'black',textDecoration:'none'}}>
      <Link href='/signin'>Go to signin page</Link>
    </div>
  )
}

export default Home
