import React from 'react'
import s from './Shopwrap.module.scss'

const Shopwrap = () => {
  return (
   <>
   <section className={s.shopwrap}>
   <div className="container">
      <div className={s.wrap}>
      <div className={s.card}>
         <h2>Casual</h2>
      </div>
      <div className={s.card}>
         <h2>Formal</h2>
      </div>
      <div className={s.card}>
         <h2>Party</h2>
      </div>
      <div className={s.card}>
         <h2>Gym</h2>
      </div>
      </div>
   
   </div>
   </section>
   </>
  )
}

export default Shopwrap