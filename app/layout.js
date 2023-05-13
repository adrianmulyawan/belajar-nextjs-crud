"use client"

import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
  }, [])

  return (
    <html lang="en">
      <head>
        <title>NextJS CRUD</title>
      </head>
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">NextJS CRUD</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href={ '/' } className='nav-link'>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={ '/about' } className='nav-link'>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={ '/products' } className='nav-link'>
                    Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
