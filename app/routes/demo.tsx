import { Link, useLoaderData } from "@remix-run/react"
import { json } from "@remix-run/node";

export default function Demo() {
  const { data: users } = useLoaderData() as LoaderData
  return <>
    <h2>Demo page</h2>
    <Link to="/">Home Page</Link>

    {users?.map(user => <div>
      <span>{user.id}</span>
      <span>{user.name}</span>
      <span>{user.email}</span>
    </div>)}
  </>
}

interface LoaderData {
  data: User[]
}

export async function loader(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
  return { data }
}

export interface Geo {
  lat: string
  lng: string
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}
