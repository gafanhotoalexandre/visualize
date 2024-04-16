'use client'

import { useOrganization } from '@clerk/nextjs'

import { EmptyOrg } from './_components/EmptyOrg'

export default function DashboardPage() {
  const { organization } = useOrganization()
  return (
    <div className="flex flex-col gap-y-4 flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? <EmptyOrg /> : <p>Lista de boards</p>}
    </div>
  )
}
