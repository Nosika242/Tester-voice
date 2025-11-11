
"use client";

import Link from "next/link";
import { Mail, Phone, Users, TrendingUp, Target } from "lucide-react";
import OpportunityCard from "@/src/components/advertise/OpportunityCard";

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-[#0c1225] text-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-amber-600 font-[montserrat] drop-shadow-md">
            Partner With VoiceTrendz
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Reach a passionate audience interested in music, voice tech, and digital culture.
          </p>
        </header>

        {/* 1. About VoiceTrendz Section */}
        <section className="bg-[#1D182B] p-8 rounded-xl shadow-2xl mb-12">
          <h2 className="text-3xl font-bold mb-4 border-b border-purple-500 pb-2">
            About VoiceTrendz
          </h2>
          <p className="text-gray-300 leading-relaxed">
            VoiceTrendz is a rapidly growing platform dedicated to exploring the intersection of **music, voice technology, and modern digital trends**. Our readership consists of tech-savvy young adults, aspiring artists, music producers, and innovators who actively seek out new products, services, and gear.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-[#0c1225] rounded-lg">
              <Users className="mx-auto text-purple-400 mb-2" size={24} />
              <p className="text-xl font-semibold">250K+</p>
              <p className="text-sm text-gray-400">Monthly Page Views</p>
            </div>
            <div className="p-4 bg-[#0c1225] rounded-lg">
              <Target className="mx-auto text-purple-400 mb-2" size={24} />
              <p className="text-xl font-semibold">18-34</p>
              <p className="text-sm text-gray-400">Primary Age Demographic</p>
            </div>
            <div className="p-4 bg-[#0c1225] rounded-lg">
              <TrendingUp className="mx-auto text-purple-400 mb-2" size={24} />
              <p className="text-xl font-semibold">High</p>
              <p className="text-sm text-gray-400">Engagement Rate</p>
            </div>
          </div>
        </section>

        {/* 2. Advertising Opportunities Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">
            Available Opportunities
          </h2>
          <div className="space-y-6">
            <OpportunityCard 
                title="Premium Display Ads"
                description="High-visibility banner slots (leaderboards, sidebars) optimized for desktop and mobile."
                details={["Targeted by topic", "Flexible CPC/CPM models"]}
            />
            <OpportunityCard 
                title="Sponsored Content & Reviews"
                description="In-depth articles, product reviews, or feature stories written in partnership with your brand."
                details={["Native integration", "Promoted across social channels"]}
            />
            <OpportunityCard 
                title="Newsletter & Podcast Mentions"
                description="Reach our most loyal subscribers directly through dedicated slots in our weekly newsletter or voice channel."
                details={["Exclusive audience", "High conversion rate"]}
            />
          </div>
        </section>

        {/* 3. Contact Details Section */}
        <section className="text-center bg-[#1D182B] p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 border-b border-amber-600 pb-2">
            Ready to Connect?
          </h2>
          <p className="text-gray-300 mb-6">
            For specific rate sheets, custom packages, or media kit requests, please reach out directly to our partnership team.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            
            <div className="flex items-center space-x-3 justify-center">
              <Mail className="text-amber-600" size={24} />
              <Link href="mailto:advertise@voicetrendz.com" className="text-lg hover:text-purple-400 transition-colors">
                advertise@voicetrendz.com
              </Link>
            </div>

            <div className="flex items-center space-x-3 justify-center">
              <Phone className="text-amber-600" size={24} />
              <span className="text-lg text-white">
                (555) 123-4567
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

