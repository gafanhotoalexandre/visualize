import { Plus } from 'lucide-react'
import { OrganizationProfile } from '@clerk/nextjs'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function InviteButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Convidar membros
        </Button>
      </DialogTrigger>

      <DialogContent className="reset-dialog max-w-[880px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  )
}
