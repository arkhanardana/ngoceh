import Link from 'next/link'
import React from 'react'

const Users = () => {
   return (
      <>
         <div>Users</div>
         <li>
            <Link href={"/dashboard/users/1"}>Users 1</Link>
            <Link href={"/dashboard/users/2"}>Users 2</Link>
            <Link href={"/dashboard/users/3"}>Users 3</Link>
            <Link href={"/dashboard/users/4"}>Users 4</Link>
         </li>
      </>

   )
}

export default Users