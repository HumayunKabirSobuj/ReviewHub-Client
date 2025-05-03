import { Navbar } from "@/components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Navbar />
      <div className="container mx-auto">
        <main className="min-h-screen">{children}</main>
      </div>
    </>
  );
};

export default CommonLayout;
