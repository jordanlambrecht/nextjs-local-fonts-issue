import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const Landing = ({ children }: Props) => {
  return <div>{children}</div>
}

export default Landing
