"use client"

import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
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
      <body>{children}</body>
    </html>
  )
}
