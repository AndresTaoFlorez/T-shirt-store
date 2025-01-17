import { NavLink } from "react-router";
import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const { counter, handleShoppingCartOpen, handleSearchByCategory } = useContext(ShoppingCartContext)

  const NavOption = ({ to = '', children, className = '', onClick }) => {

    return (<li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) => `${isActive ? 'underline underline-offset-4' : ''} ${className}`}>
        {children}
      </NavLink>
    </li >)
  }
  return (
    <nav className="flex flex-col sm:flex-row justify-between bg-slate-50 items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <NavOption to='home' className='text-lg font-bold'
          onClick={() => handleSearchByCategory('')}
        >
          T-shirt-store
        </NavOption>
        <NavOption
          onClick={() => handleSearchByCategory('')}
        >
          All
        </NavOption>
        <NavOption
          to="clothes"
          onClick={() => { handleSearchByCategory('clothes') }}
        >
          Clothes
        </NavOption>
        <NavOption
          to="furniture"
          onClick={() => handleSearchByCategory('furniture')}
        >
          Furniture
        </NavOption>
        <NavOption
          to="electronics"
          onClick={() => handleSearchByCategory('electronics')}
        >
          Electronics
        </NavOption>
        <NavOption
          to="others"
          onClick={() => handleSearchByCategory('others')}
        >
          Others
        </NavOption>

      </ul>

      <ul className="flex items-center gap-3">
        <NavOption to='my-orders'>
          My Orders
        </NavOption>
        <NavOption to='my-account'>
          My Account
        </NavOption>
        <NavOption to='sign-in'>
          SignIn
        </NavOption>
        <NavOption className="flex gap-2">
          <ShoppingBagIcon
            className="h-6 w-6 text-black"
            onClick={() => handleShoppingCartOpen()}
          />{counter}
        </NavOption>
      </ul>
    </nav>);
}

export default Navbar;