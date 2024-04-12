interface AuthLayoutProps {
  children: React.ReactNode
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex justify-center items-center min-h-screen w-full bg-purple-100">
      {children}
    </main>
  )
}
