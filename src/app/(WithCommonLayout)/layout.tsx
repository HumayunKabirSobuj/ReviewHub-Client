const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        {/*Add Nav bar here <Navbar /> */}
        <h2>Hello from navbar</h2>
        <main className="min-h-screen mt-20">
  
          {children}</main>
        <footer>Footer</footer>
      </>
    );
  };
  
  export default CommonLayout;
  