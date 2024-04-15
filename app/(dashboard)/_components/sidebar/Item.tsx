'use client'

import Image from 'next/image'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'

import { Hint } from '@/components/hint'
import { cn } from '@/lib/utils'

interface ItemProps {
  id: string
  name: string
  imageUrl: string
}
export function Item({ id, name, imageUrl }: ItemProps) {
  const { organization } = useOrganization()
  const { setActive } = useOrganizationList()

  const isActive = organization?.id === id

  function onClickOrganization() {
    if (!setActive) return

    setActive({ organization: id })
  }

  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          fill
          alt={name}
          src={imageUrl}
          onClick={onClickOrganization}
          className={cn(
            'rounded-md cursor-pointer opacity-75 hover:opacity-100 transition',
            isActive && 'opacity-100'
          )}
        />
      </Hint>
    </div>
  )
}
