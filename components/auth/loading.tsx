import Image from 'next/image'

export function Loading() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-white absolute top-0 z-50">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  )
}
