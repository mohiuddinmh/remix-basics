import { Link } from "@remix-run/react";

export default function Index() {
  return <>
    <h1>Pappa Page</h1>
    <Link to={'/demo'}>Go to Demo</Link>
  </>
}
