import Link from 'next/link'
import React from 'react'

const Users = () => {
   return (
      <>
         <div>Users List</div>
         <li>
            <Link href={"/users/1"}>Users 1</Link>
            <Link href={"/users/2"}>Users 2</Link>
            <Link href={"/users/3"}>Users 3</Link>
            <Link href={"/users/4"}>Users 4</Link>
         </li>
      </>

   )
}

export default Users
