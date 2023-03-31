import React from 'react'
import { Sidebardata } from '../data/SideBarData'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { VscGraph } from "react-icons/vsc";
type Props = {}

export default function Sidebar({ }: Props) {
  const router = useRouter()
  const currentRoute = router.pathname;
  return (
    <div className='w-2/12 lg:block hidden transition duration-300 h-screen px-4 pt-8 pb-4 flex-col border-2 border-gray-150 bg-white'>
      <div className="flex justify-center py-5">
        <ul className='w-full'>
          {Sidebardata.map((item,index)=>{
            return(
              <li key={index}
                  className={`${item.color} text-white p-1 py-5 mb-2 hover:bg-slate-200 flex`}>
                  <Link href={item.path}
                    className='rounded flex flex-row'>
                    <div className="p-1 mr-2 scale-125">{item.icon}</div>
                    <div className='font-sans font-normal'>{item.title}</div>
                  </Link>
                </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}