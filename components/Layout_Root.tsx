import type { ReactNode } from 'react'
import Footer from './Footer'
import Landing from './Landing'
type Props = {
  children: ReactNode
  id?: string
}

const Layout_Defaualt = ({ children, id }: Props) => {
  return (
    <>
      <main id={id}>
        <Landing>{children}</Landing>
      </main>
      <Footer />
    </>
  )
}

export default Layout_Defaualt
