import Header from "@/components/Header";

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-16">
      <Header />
      {children}
    </div>
  );
}

export default HomePageLayout;
