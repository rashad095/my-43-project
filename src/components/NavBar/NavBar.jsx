import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, HiOutlineBackspace } from 'react-icons/ai';


const NavBar = () => {
    const [open, setOpen] = useState(false)


    const routes = [
        { id: 'home', path: '/', name: 'Home' },
        { id: 'about', path: '/about', name: 'About' },
        { id: 'contact', path: '/contact', name: 'Contact' },
        { id: 'product-detail', path: '/products/:id', name: 'ProductDetail' },
        { id: 'not-found', path: '*', name: 'NotFound' }
      ];
      


    return (
        <nav>
            <div className="md:hidden text-2xl" onClick={ () => setOpen(!open)}>
                {
                    open === true ?
                     <HiOutlineBackspace></HiOutlineBackspace>
                      : <AiOutlineMenu className=""></AiOutlineMenu>
                }
            
            </div>
            <ul className="md:flex">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;