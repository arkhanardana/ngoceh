import React from 'react'

const Dashboard = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <h1 className='text-3xl'>DASHBOARD NAVBAR</h1>
         <main>
            {children}
         </main>

      </>
   )
}

export default Dashboard