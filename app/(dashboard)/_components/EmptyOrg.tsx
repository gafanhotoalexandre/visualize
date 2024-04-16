import Image from 'next/image'
import { CreateOrganization } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export function EmptyOrg() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/elements.svg" height={200} width={200} alt="Vazio" />

      <h2 className="text-2xl font-semibold mt-6">Bem-vindo ao Visualize</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Para começar, crie uma organização.
      </p>

      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Criar organização</Button>
          </DialogTrigger>
          <DialogContent className="reset-dialog">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
