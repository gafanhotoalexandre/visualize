import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>Esta é uma tela apenas para usuários autenticados.</div>

      <div>
        <UserButton />
      </div>
    </div>
  )
}
