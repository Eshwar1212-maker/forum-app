import Link from 'next/link'
import { FC } from 'react'
import { Icons } from './Icons'
import { buttonVariants } from './ui/Button'
interface NavbarProps {
  
}
const Navbar: FC<NavbarProps> = ({
  
}) => {
  return (
    <div className='fixed inset-x-0 top-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
        <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
            <Link href={'/'} className='flex gap-2 items-center'>
                <Icons.logo 
                className='h-8 w-8 sm:h-6'
                >

                </Icons.logo>
                <p className='hidden text-zinc-700 text-sm font-medium md:block'>Breaddit</p>

            </Link>
            <Link href={'/sign-in'} className={buttonVariants()}>Sign in</Link>
        </div>  
    </div>
  )
}

export default Navbar