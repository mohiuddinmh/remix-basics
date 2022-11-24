import { Link } from "@remix-run/react";

export default function Demo(){
  return<>
    <h2>Demo page</h2>
    <Link to="/">Home Page</Link>
  </>
}