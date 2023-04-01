import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { VscGraph } from "react-icons/vsc";
import style from "../src/styles/Home.module.css"
type Props = {}

export default function Sidebar({ }: Props) {
  const router = useRouter()
  const currentPath = router.pathname;

  return (
    <div className='w-2/12 relative lg:block hidden transition duration-300 h-screen flex-col bg-white'>
      <div className='bg-white p-10'>
        <Link className=' flex justify-center' href='/'>Home</Link>
      </div>
      <div className="flex justify-center bg-blackg-bg">
        <ul className='w-full'>
          {Sidebardata.map((item, index) => {
            return (
              <li key={index} className='w-full'>
                <div className={`${currentPath === item.path ? `${style.sidebarAction}` : ``} grid grid-flow-col items-center bg-white h-full`}>
                  <div className={`${currentPath === item.path ? `${style.btnAction}` : ``} ${item.color} text-white p-4 py-4 m-2 hover:bg-slate-200 flex`}>
                    <Link href={item.path}
                      className='rounded flex flex-row'>
                      <div className="p-1 mr-2 scale-125">{item.icon}</div>
                      <div className='font-sans font-normal'>{item.title}</div>
                    </Link>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export const Sidebardata = [
  {
    title: "DATA ANALYTICS",
    path: "/dataanalytics",
    color: "bg-sidecolor1-1",
    icon: <VscGraph />,
  },
  {
    title: "INTENTS",
    path: "/intents",
    color: "bg-sidecolor1-2",
    icon: <VscGraph />,
  },
  {
    title: "ENTITIES",
    path: "/entities",
    color: "bg-sidecolor1-3",
    icon: <VscGraph />,
  },
  {
    title: "CONVERSATION FLOW",
    path: "/conversationflow",
    color: "bg-sidecolor1-4",
    icon: <VscGraph />,
  },
  {
    title: "BUSINESS LOGIC",
    path: "/businesslogic",
    color: "bg-sidecolor1-5",
    icon: <VscGraph />,
  },
  {
    title: "RULE-BASED",
    path: "/rulebased",
    color: "bg-sidecolor1-6",
    icon: <VscGraph />,
  },
  {
    title: "NLP",
    path: "/nlp",
    color: "bg-sidecolor1-7",
    icon: <VscGraph />,
  }
];