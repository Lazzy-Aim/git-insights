import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { fetcher } from './index'
import Users from './index'


function User() {
  return (
    <>
      <div className='container mx-auto'>
        <div className='flex justify-center'>
          <h1 className='text-3xl font-bold pt-7 pb-1'>User</h1>
        </div>
      </div>
    </>
  )
}
  
  export default User;