import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import {
  renderChampionshipChart,
  renderRankingsChart
} from "../utils/chart"; // ✅ IMPORT BOTH

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    renderChampionshipChart();  // ✅ Run stars chart
    renderRankingsChart();      // ✅ Run rankings chart
  }, []);

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen p-8 sm:p-16 font-sans`}
    >
      <main className="flex flex-col gap-8 max-w-5xl mx-auto items-start">
        <h1 className="text-3xl font-bold">Ultimate Dynasties</h1>

        {/* ⭐ STAR CHART */}
        <div id="controls" className="text-sm font-medium text-gray-700 flex gap-4"></div>
        <div id="chart" className="w-full overflow-x-auto"></div>

        {/* 📈 RANKINGS CHART SECTION */}
        <h2 className="text-xl font-bold mt-16">Rankings Over Time</h2>
        <div id="division-toggle-2" className="mb-4 text-sm font-medium text-gray-700 flex gap-4"></div>
        <div id="team-selector" className="mb-4"></div>
        <div id="rankings-chart" className="w-full overflow-x-auto"></div>
      </main>
    </div>
  );
}
