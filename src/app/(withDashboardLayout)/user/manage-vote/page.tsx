import ManageVoteClient from '@/components/module/user-review/manage-vote';
import { getMyAllVotesApi } from '@/services/UserDashboard/VoteServices';

export default async function ManageVoteSection() {
	const votes = (await getMyAllVotesApi()).data;
	return (
		<div className="p-[15px]">
			<ManageVoteClient votes={votes} />
		</div>
	);
}
