import {headerLogo} from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
   <header className='padding-x py-8 absolute z-10 w-full'>
     <nav className='flex justify-between items-center max-container'>
        <a href="/">
       <img   src={headerLogo} alt='Logo' width={130} height={29}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        {navLinks.map((items)=>(
          <li key={items.label}>
            <a 
            href={items.href}
            className='fonts-montserrat leading-normal
            text-lg text-slate-gray'
            
            
            
            >
            {items.label}
            </a>
          </li>
        ))}
        </ul>
        <div className='hidden max-lg:block'>
   
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="25" height="25" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M95 4146 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8
785 -10 2474 -8 l2437 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27
21 -2447 2 c-2019 2 -2452 0 -2477 -11z"/>
<path d="M95 2546 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8
785 -10 2474 -8 l2437 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27
21 -2447 2 c-2019 2 -2452 0 -2477 -11z"/>
<path d="M95 946 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8
785 -10 2474 -8 l2437 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27
21 -2447 2 c-2019 2 -2452 0 -2477 -11z"/>
</g>
</svg>

        </div>
     </nav>
   </header>
  )
}

export default Nav