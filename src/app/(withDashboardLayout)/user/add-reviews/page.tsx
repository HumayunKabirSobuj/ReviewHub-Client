import CreateReviewComponent from '@/components/module/user-review/create-review';

export default function AddReviews() {
	return <CreateReviewComponent review={null} mode="create" setOpen={() => console.log('create')} />;
}
