'use client'

import { Authenticated } from 'convex/react'

interface Props {
  children: React.ReactNode
}
export default function AuthenticatedProvider({ children }: Props) {
  return <Authenticated>{children}</Authenticated>
}
