import { Outlet, LiveReload } from '@remix-run/react'
import React from "react";

interface DocumentProps {
  children: React.ReactNode
  title: string
}

export default function App() {
  return (
    <Document title='My Remix Blog'>
      <Outlet />
    </Document>
  )
}

function Document({ children, title }: DocumentProps) {
  return (
    <html lang='en'>
    <head>
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