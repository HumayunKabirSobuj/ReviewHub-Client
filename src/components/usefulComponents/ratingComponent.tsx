import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RatingComponent({
	max = 5,
	value,
	onChange,
}: {
	max?: number;
	value: number;
	onChange: (val: number) => void;
}) {
	const [activeStatus, setActiveStatus] = useState<number | null>(null);

	return (
		<div className="flex gap-1">
			{Array.from({ length: max }, (_, i) => {
				const contained = (activeStatus ?? value) > i;
				return (
					<Button
						key={i}
						variant="ghost"
						size="icon"
						onClick={() => onChange(i + 1)}
						onMouseEnter={() => setActiveStatus(i + 1)}
						onMouseLeave={() => setActiveStatus(null)}
					>
						<Star
							fill={contained ? 'currentColor' : 'none'}
							className={contained ? 'text-yellow-400' : 'text-gray-400'}
						/>
					</Button>
				);
			})}
		</div>
	);
}
