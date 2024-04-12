import { OrgSidebar } from './_components/OrgSidebar'
import { Sidebar } from './_components/sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="h-full">
      <Sidebar />

      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            {/* Add Navbar */}
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}