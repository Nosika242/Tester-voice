
// Simple Card Component for opportunities
export default function OpportunityCard({ title, description, details }: { title: string, description: string, details: string[] }) {
    return (
        <div className="border border-gray-700 p-6 rounded-lg bg-[#141b30] hover:border-amber-600 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 mb-3">{description}</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                {details.map((detail, index) => (
                    <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {detail}
                    </li>
                ))}
            </ul>
        </div>
    );
}