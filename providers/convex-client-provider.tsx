'use client'

import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { AuthLoading, Authenticated, ConvexReactClient } from 'convex/react'

import { ptBR } from '@clerk/localizations'

import { Loading } from '@/components/auth/loading'

interface ConvexClientProviderProps {
  children: React.ReactNode
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!

const convex = new ConvexReactClient(convexUrl)

export default function ConvexClientProvider({
  children,
}: ConvexClientProviderProps) {
  return (
    <ClerkProvider localization={ptBR}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
