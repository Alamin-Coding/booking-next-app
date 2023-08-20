import React from 'react'

const Section = ({children}) => {
  return (
     <section className='pt-[120px]'>
      <div className="container">
       {children}
      </div>
     </section>
  )
}

export default Section
