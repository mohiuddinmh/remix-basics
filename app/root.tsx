import { Outlet, LiveReload, Link, Links } from '@remix-run/react'
import React from "react";
import globalStyles from '~/styles/global.css'

interface LayoutProps {
  children: React.ReactNode
}

interface DocumentProps {
  children: React.ReactNode
  title: string
}

export default function App() {
  return (
    <Document title='My Remix Blog'>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children, title }: DocumentProps) {
  return (
    <html lang='en'>
    <head>
      <Links />
      <title>{title}</title>
    </head>
    <body>
    <h1>Hello There</h1>
    {children}
    {process.env.NODE_ENV === 'development'
      ? <LiveReload />
      : null}
    </body>
    </html>
  )
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='logo'>Remix</Link>

        <ul className="nav">
          <li>
            <Link to={'/demo'}>Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        {children}
      </div>
    </>
  )
}

export function links() {
  return [
    { rel: 'stylesheet', href: globalStyles }
  ]
}
