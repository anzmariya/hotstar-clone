import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, setShow] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>600){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })
  return (
    <div className='d-flex flex-column nav'>
        <div className={`${show && 'nav-black'}`}>
          <img width={'50px'} src="https://unifi.com.my/tv/sites/default/files/styles/webp/public/2023-03/Disney-Hotstar.png.webp?itok=DzAkG47_" alt="" />
        </div>
        <div style={{marginTop:'100px',marginLeft:'15px'}}>
            <div>
            <i class="fa-regular fa-circle-user text-light"></i>
            </div>
            <div>
            <i class="fa-solid fa-magnifying-glass text-light mt-5 mb-5"></i>
            </div>
            <div>
            <i class="fa-solid fa-house text-light mb-5"></i>
            </div>
            <div>
            <i class="fa-solid fa-tv text-light mb-5"></i>
            </div>
            <div>
            <i class="fa-solid fa-film text-light mb-5"></i>
            </div>
            <div>
            <i class="fa-solid fa-baseball text-light mb-5"></i>
            </div>
        </div>
    </div>
  )
}

export default Nav