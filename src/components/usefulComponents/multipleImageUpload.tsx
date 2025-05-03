import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function UploadMultipleImages() {
	const [imageList, setImageList] = useState<File[]>([]);
	const [getView, setGetView] = useState<string[]>([]);

	const ImgChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (!files) return;

		const fileArray = Array.from(files);
		setImageList(fileArray);

		const previewUrls = fileArray.map((file) => URL.createObjectURL(file));
		setGetView(previewUrls);
	};

	const handleUpload = () => {
		const formData = new FormData();
		imageList.forEach((image, index) => {
			formData.append(`image[${index}]`, image);
		});

		console.log('total', imageList.length, 'images');
	};

	return (
		<div className="flex flex-col gap-4">
			<Label htmlFor="multi-image">Upload Images</Label>
			<Input id="multi-image" type="file" accept="image/*" multiple onChange={ImgChangeHandler} />

			{getView.length > 0 && (
				<div className="flex gap-2 flex-wrap">
					{getView.map((src, idx) => (
						<img
							key={idx}
							src={src}
							alt={`Preview ${idx}`}
							className="w-24 h-24 object-cover rounded-md border"
						/>
					))}
				</div>
			)}

			<Button onClick={handleUpload} disabled={getView.length === 0} className="w-[150px]">
				Upload Image
			</Button>
		</div>
	);
}
