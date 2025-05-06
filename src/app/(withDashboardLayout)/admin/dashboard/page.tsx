import AdminDashboardPage from '@/components/modules/admin/AdminDashboardPage';
import { getAdminDashboardInfo, getReveiwDataForAdminDashboard } from '@/services/AdminDashboard';
import React from 'react';

const AdminDashboard = async() => {
    const data = await getAdminDashboardInfo()
    const tableData = await getReveiwDataForAdminDashboard()
    // console.log(tableData.data);
    return (
        <div>
            <AdminDashboardPage data={data} tableData={tableData}></AdminDashboardPage>
        </div>
    );
};

export default AdminDashboard;