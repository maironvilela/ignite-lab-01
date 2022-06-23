/* eslint-disable @next/next/no-html-link-for-pages */
import { getAccessToken, getSession, useUser } from "@auth0/nextjs-auth0"
import { GetServerSideProps } from "next"

export default function Home() {

  const {user} = useUser()
  return null
}

export const getServerSideProps: GetServerSideProps = async(ctx) =>{

  const {req, res} = ctx;

  const session = getSession(req, res);

  const token = getAccessToken(req, res)

  console.log(token);
  
  if(!session ){

    return{
      redirect:{
        destination: '/api/auth/login',
        permanent: false
      }
    }
  } else{
    return{
      redirect:{
        destination: '/app',
        permanent: false
      }
    }
  }
}
