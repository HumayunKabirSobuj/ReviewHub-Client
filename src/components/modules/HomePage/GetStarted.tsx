import { ArrowRight } from 'lucide-react';

const GetStarted = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 py-8'>
            {/* Top section - CTA */}
            <div className="bg-white p-6 rounded-lg  border border-primary">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-black">
                            Enhance your shopping experience with{" "}
                            <span className="text-primary">honest reviews</span>
                        </h2>
                        <p className="text-sm text-black">
                            Join thousands of users who make better purchasing decisions
                            with our community-driven reviews.
                            <br />
                            Start today and never regret a purchase again.
                        </p>
                    </div>
                    <button className="bg-primary hover:bg-purple-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
                        <span>Get Started Now</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;