"use client"

const { default: Link } = require("next/link");


function  page(){
  return(
    <div>
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/signup">signup</Link>
        <Link href="/about">about</Link>
        <Link href="/about/vidit">Vidit</Link>
        <Link href="/about/gourav">gourav</Link>
      </nav>
    </div>
  )
}
export default page;