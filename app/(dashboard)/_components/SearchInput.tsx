'use client'

import qs from 'query-string'
import { Search } from 'lucide-react'
import { useDebounceValue } from 'usehooks-ts'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export function SearchInput() {
  const router = useRouter()
  const [value, setValue] = useState('')
  const [debouncedValue] = useDebounceValue(value, 500)

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    )

    router.push(url)
  }, [debouncedValue, router])

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        placeholder="Buscar boards"
        className={cn(
          'w-full max-w-[516px] pl-9 focus-visible:ring-[#3b82f680] transition'
        )}
        onChange={handleInputChange}
        value={value}
      />
    </div>
  )
}
