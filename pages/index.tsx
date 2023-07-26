import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

import Layout from '../components/Layout';

export default function Home() {
  return (
    <> 
       <Head>
          <title> Homepage </title>
          <meta name="keywords" content ="coders"/>
          <link rel="shortcut icon" href="https://api-booking-app-aws-ec2.onrender.com/default.png" />
       </Head>
       <Layout>

       </Layout>
    </>
  )
}
