import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'

export default function Header() {
  return (
    <header className="  w-full z-30 sticky top-0">
      <div className="">
        <div className=" mx-auto ">
          <div className="md:px-20  flex items-center justify-between h-14  border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]  px-3">

            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link className="flex items-center justify-center bg-white w-8 h-8 rounded shadow-sm shadow-zinc-950/20" href="/">
                <Image src={Logo} width={24} height={24} alt="Logo" />
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="flex grow">

              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 lg:px-5 py-2 flex items-center transition" href="https://bourgeon.bubbleapps.io/version-test">Contact</Link>
                </li>
                <li className="ml-1">
                  <Link className="btn-sm text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow" href="/request-demo">Request Demo</Link>
                </li>
              </ul>

            </nav>

          </div>
        </div>
      </div>
    </header>
  )
}
