import Link from "next/link";
export default function CommunityZonePage() {
  return (
    <div className="p-6 card-body rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-blue-400/30 transition-all duration-300 flex items-center flex-col mx-auto">
      <h3 className="text-xl font-bold text-gray-100 mb-4">Fan Poll</h3>
      <p className="mb-4 font-semibold text-white">Who had the best album this year?</p>
     <Link href="/voicetrendz/community-zone/vote" className="">
        <button className=" mt-4 py-2 px-6 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition">
          Vote Now
        </button>
      </Link>
    </div>
  );
}
