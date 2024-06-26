import Link from "next/link";
import Users from "./components/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data
}

async function IndexPage() {
  const users = await fetchUsers();
  
  return (
    <>
      <h1>Index Page</h1>
      <Users users={users} />
    </>
  );
}

export default IndexPage;
