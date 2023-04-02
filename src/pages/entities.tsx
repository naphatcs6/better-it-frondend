import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/router";
import api from '../../services/api';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
type Props = {}

type Data = {
  _id : string
  value: string
  word_name: string
}

export default function Entities({ data }: { data: Data[] }) {
  const MySwal = withReactContent(Swal);
  // const [word, setWord] = useState("")
  let word = ""
  const router = useRouter();
  const handlwChange = (event: any) => {
    event.preventDefault();
    const value = event.target.value;
    word = value
  }

  let arrtype = ['cancel', 'no', 'yes']

  const handleDelete = (event:any) => {
    console.log(event)
    api.delete(`/words/${event}`)
    router.push('/entities')
  }

  const handleCreate = (event:any) => {
    MySwal.fire({
      html: <div>
        <p className='p-4'>Add Word</p>
        <form autoComplete="off">
          <input
            className='w-3/6 appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
            name='tag'
            type='text'
            onChange={handlwChange}
          />
        </form>
      </div>,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        if (word !== "") {
          api.post('/words', {
            value: `${event}`,
            word_name: word,
          })
        } else {
          MySwal.showValidationMessage(
            `Add failed`
          )
        }
      }
    }).then((result) => {
      router.push('/entities')
    })
  };
  return (
    <>
      <title>Entities</title>
      <div className="bg-white m-5 rounded-lg shadow-lg">
        <div className='m-5 pt-4 text-2xl'>
          Phrase
        </div>
        <div className='flex flex-col m-5'>
          <div className='grid grid-cols-4 font-bold text-slate-400'>
            <div>VALUE</div>
            <div>SYNONYMS</div>
          </div>
          <div className='grid grid-rows-4 border-t border-slate-400 mt-4'>
            {arrtype.map((item, index) => {
              return (
                <div key={index} className='grid grid-cols-4'>
                  <div className='mt-2'>{item}</div>
                  <div className='flex flex-wrap col-span-3 mt-2'>
                    {data.map((items, index) => {
                      if (item == items.value) {
                        return (
                          <div key={index} className='flex flex-wrap'>
                            <div className="mr-2 mb-2 mt-2 w-fit group rounded flex flex-row border bg-white border-gray-300 hover:bg-indigo-50">
                              <div className='p-2 flex flex-row'>
                                <button className="px-1 text-sm font-medium text-slate-400">
                                  {items.word_name}
                                </button>
                                <button onClick={()=>{
                                  handleDelete(items._id)
                                }} className='px-2 scale-110 text-slate-400'>
                                  <RxCross2 />
                                </button>
                              </div>
                            </div>
                          </div>
                        )
                      }
                    })}
                    <button onClick={()=>{
                      handleCreate(item)
                    }} className='px-2 text-xl'>
                      Add word
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await api.get('words')
  const data = res.data
  return {
    props:
    {
      data,
    }
  };
}