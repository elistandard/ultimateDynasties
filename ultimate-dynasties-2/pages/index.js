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

        {/* 📈 RANKINGS CHART SECTION */}
        <h2 className="text-xl font-bold mt-1">Select a division</h2>
        <div id="division-toggle-2" className="mb-1 text-sm font-medium text-gray-700 flex gap-4"></div>
        <h2 className="text-xl font-bold mt-1">Select a team</h2>
        <div id="team-selector" className="mb-1"></div>
        <div id="team-summary" className="mb-1"></div>
        <h2 className="text-xl font-bold mt-1">Nationals Rankings Over Time</h2>
        <div id="rankings-chart" className="w-full overflow-x-auto"></div>

        {/* ⭐ STAR CHART */}
        <h2 className="text-xl font-bold mt-16">Winners</h2>
        <div id="controls" className="text-sm font-medium text-gray-700 flex gap-4"></div>
        <div id="chart" className="w-full overflow-x-auto"></div>
      </main>
      <footer className="w-full mt-12 text-center text-sm text-gray-500">
        Data source: 1984-2024 results: <a href="https://collegechampionships.usaultimate.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">https://collegechampionships.usaultimate.org/</a>
      </footer>
    </div>
  );
}