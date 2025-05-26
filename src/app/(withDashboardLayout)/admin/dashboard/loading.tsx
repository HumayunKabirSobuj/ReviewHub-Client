import { Skeleton } from '@/components/ui/skeleton';

const loading = () => {
    return (
        <div>
            <div className="container py-8">
                <div className="flex justify-between items-center mb-6">
                    <Skeleton className="h-8 w-32" />
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-64" />
                        <Skeleton className="h-10 w-24" />
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-6">
                    <aside className="col-span-1 hidden md:block">
                        <Skeleton className="h-[500px] w-full rounded-lg" />
                    </aside>

                    <div className="col-span-4 md:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {Array(6)
                                .fill(0)
                                .map((_, index) => (
                                    <Skeleton key={index} className="h-64 w-full rounded-lg" />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default loading;