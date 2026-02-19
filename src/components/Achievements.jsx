import React from "react";
import { Trophy } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "LeetCode Weekly Contest",
      rank: "Global Rank 3942",
      detail: "among 36k participants",
    },
    {
      title: "CodeChef Starters 211",
      rank: "Global Rank 658",
      detail: "",
    },
    {
      title: "CodeChef Starters Division 4",
      rank: "Global Rank 463",
      detail: "",
    },
    {
      title: "Educational Codeforces Round 172",
      rank: "Global Rank 5871",
      detail: "among 25k participants",
    },
    {
      title: "LeetCode Biweekly 140",
      rank: "Global Rank 6980",
      detail: "among 35k participants",
    },
  ];

  return (
    <section className="mb-24 sm:mb-32">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 sm:mb-16">
        Achievements
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-[#b0b0b0] leading-relaxed mb-12 font-medium">
        Competitive programming rankings and achievements
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {achievements.map((achievement, index) => (
          <div key={index} className="group bg-[#0f0f0f] p-6 sm:p-8 rounded-xl border-l-4 border-[#3b82f6] hover:bg-[#151515] transition-all duration-300 border border-[#1a1a1a] hover:border-[#3b82f6]">
            <div className="flex items-start gap-4 mb-4">
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-[#3b82f6] flex-shrink-0 mt-1" />
              <h3 className="text-xl sm:text-2xl text-white font-semibold group-hover:text-[#3b82f6] transition-colors duration-300">
                {achievement.title}
              </h3>
            </div>
            <p className="text-lg sm:text-xl text-[#3b82f6] font-bold mb-2 ml-10 sm:ml-11">{achievement.rank}</p>
            {achievement.detail && (
              <p className="text-base sm:text-lg text-[#888888] ml-10 sm:ml-11 font-medium">
                {achievement.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;