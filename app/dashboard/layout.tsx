import SideNav from "@/components/SideNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex md:flex-row flex-col h-screen md:overflow-hidden">
      <div className="flex-none md:border-r w-20 lg:w-64">
        <SideNav />
      </div>
      <div className="flex-grow flex-1 mx-auto mt-12 md:mt-0 w-full max-w-7xl md:overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
