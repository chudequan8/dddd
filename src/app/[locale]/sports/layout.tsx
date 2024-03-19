import HeadNav from "@/components/ui/sports/HeadNav";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="h-screen flex flex-col">
      <HeadNav />
      <div className="flex-grow p-6 md:overflow-y-auto bg-white dark:bg-16j75bq">{children}</div>
    </div>
  );
}
