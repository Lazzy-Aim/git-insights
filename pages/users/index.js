import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

export async function fetcher(...arg) {
    const res = await fetch(...arg);
    
    return res.json();
  }


export const Users = ({users}) => {

    const { data } = useSWR("/api/github", fetcher);
    console.log(data)
    
    return ( 
    <>
        
      <div className='container flex-col justify-center mx-auto px-4'>
        <div className='flex justify-center'>
            <h1 className="text-3xl font-bold pt-7 pb-1">Users</h1>
        </div>
        <div className='flex flex-wrap items-center justify-center'>
        {
            data ? data.users.data.map((user) => (

                <div className='2xl:w-1/5 md:w-1/3 sm:w-full m-h-96 px-6 py-9 mx-6 my-6 bg-card rounded'>
                        <div className='flex justify-center'>
                            <Image className=' rounded-full' src={user.avatar_url} width={130} height={130}/>
                        </div>
                        <div className='my-7'>
                            <div className='flex justify-center mb-4'>
                                <h2 className='text-2xl'>{user.login}</h2>
                            </div>
                            <p className='my-1'>Repositories: </p>
                            <p className='my-1'>Contributions: </p>
                            <p className='my-1'>Projects: </p>
                            <p className='my-1'>Friends: </p>
                        </div>
                        <div className='flex justify-center'>
                            <Link href={'/users/' + user.id} key={user.id}><a className="bg-button rounded px-8 py-3 ">More</a></Link>
                        </div>
                    </div>
            )):null
        }
        </div>
      </div>
    </>
     )
}
 
export default Users;