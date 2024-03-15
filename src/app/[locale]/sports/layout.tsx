import HeadNav from "@/components/ui/sports/HeadNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <HeadNav />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
