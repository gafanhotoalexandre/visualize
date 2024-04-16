'use client'

import { UserButton } from '@clerk/nextjs'

import { SearchInput } from './SearchInput'

export function Navbar() {
  return (
    <div className="flex items-center-gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        {/* TODO: Busca */}
        <SearchInput />
      </div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  )
}
