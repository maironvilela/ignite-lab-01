import { getSession, withPageAuthRequired   } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next"
import Link from "next/link";
  

export default function Home()  {
  return(
    <>
      <h1>HOME</h1>
      <Link href="http://localhost:3000/api/auth/logout">Logout</Link>
     </>
  )
}

export const getServerSideProps = withPageAuthRequired();



/*
export const getServerSideProps: GetServerSideProps = async({req, res}) =>{
 
  const session = getSession(req, res);
 
  if(!session ){
    return{
      redirect:{
        destination: '/api/auth/login',
        permanent: false
      }
    }
  }

  return{props: {}}

  
}*/