import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { NavLink } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

export default function Home() {
  return (
    <>
      <Sidebar></Sidebar>
    </>
  )
}
