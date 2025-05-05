import ManagePaymentClient from '@/components/module/user-review/manage-payment';
import { getMyAllPaymentsApi } from '@/services/UserDashboard/PaymentServices';

export default async function ManagePaymentSection() {
	const payments = (await getMyAllPaymentsApi()).data;
	return (
		<div className="p-[15px]">
			<ManagePaymentClient payments={payments} />
		</div>
	);
}
