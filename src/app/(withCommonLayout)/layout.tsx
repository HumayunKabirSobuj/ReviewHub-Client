import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { Toaster } from "sonner";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Toaster richColors position="top-center" />
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;
