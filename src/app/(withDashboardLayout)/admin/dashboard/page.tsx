import AdminDashboardPage from "@/components/modules/admin/AdminDashboardPage";
import { Loader } from "lucide-react";
import { Suspense } from "react";

const AdminDashboard = () => {

  // console.log(tableData.data);
  return (
    <div>
      <Suspense
        fallback={
          <div className="w-full h-[100vh] flex items-center justify-center">
            <Loader className="w-[80px] h-12 animate-spin" />
          </div>
        }
      >
        <AdminDashboardPage
        // data={data}
        // tableData={tableData}
        ></AdminDashboardPage>
      </Suspense>
    </div>
  );
};

export default AdminDashboard;
