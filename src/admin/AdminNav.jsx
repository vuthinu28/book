
import React from 'react'
import { Container, Row } from 'reactstrap'
import useAuth from '../custom-hooks/useAuth';
import { current } from '@reduxjs/toolkit';
import { Link, NavLink } from 'react-router-dom';
import '../styles/adminnav.css'
const AdminNav = () => {
    const{currentUser} =useAuth()
    const admin_nav =[
        {
            display:"Dashboard",
            path:'/dashboard'
        },
        {
            display:"AddProducts",
            path:'/dashboard/add-products'
        },
        {
            display:"Orders",
            path:'/dashboard/orders'
        },
        {
            display:"Users",
            path:'/dashboard/users'
        },
        
    ]
  return (
    <>
    <header className='admin_header'>
        <div className="admin_nav-top">
            <Container>
                <div className='admin_nav-wrapper-top'>
                    <div className="logo">
                        <h2>H2T Company</h2>
                    </div>
                    <div className="search_box">
                        <input type='text ' placeholder='Search....'/>
                        <span><i class="ri-search-line"></i></span>
                    </div>
                    <div className="admin_nav-top-right">
                        <Link to='/'><i class="ri-home-5-line"></i></Link>
                        <span><i class="ri-settings-2-line"></i></span>
                        <img src={currentUser.photoUrl} alt=''/>
                    </div>
                </div>
            </Container>
        </div>
    </header>
    <section className="admin_menu">
        <Container>
            <Row>
                <div className="admin_navigation">
                    <ul className="admin_menu-list">
                        {admin_nav.map((item,index)=>(
                            <li className='admin_menu-item' key={index}>
                                <NavLink to={item.path} 
                                className={navClass =>navClass.isActive ? 'active_admin-menu' : ''}>{item.display}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default AdminNav