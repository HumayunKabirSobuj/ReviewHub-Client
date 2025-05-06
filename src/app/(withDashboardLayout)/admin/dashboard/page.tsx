import AdminDashboardPage from '@/components/modules/admin/AdminDashboardPage';
import { getAdminDashboardInfo } from '@/services/AdminDashboard';
import React from 'react';

const AdminDashboard = async() => {
    const data = await getAdminDashboardInfo()
    // console.log(data);
    return (
        <div>
            <AdminDashboardPage data={data}></AdminDashboardPage>
        </div>
    );
};

export default AdminDashboard;