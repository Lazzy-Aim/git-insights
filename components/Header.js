import Image from "next/image"
import Link from 'next/link'

const Header = () => {
    return ( 
        <header className="bg-header text-white py-5">
            <div className="container mx-auto flex justify-between items-center">
                <Image src="/git-insights-logo.svg" width={200} height={42} />
                <nav>
                    <ul className="flex">
                        <Link href="/"><a className="">Home</a></Link>
                        <Link href="/users"><a className="ml-4">Users</a></Link>
                        <Link href="/favorites"><a className="ml-4">Favorites</a></Link>
                        <Link href="/about"><a className="ml-4">About</a></Link>
                    </ul>
                </nav>
                <div className="search">
           
                </div>
            </div>
        </header>
     )
}
 
export default Header