import NavBar from "@/components/global/navigationbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="default-padding-body">
      <NavBar />

      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default CommonLayout;
