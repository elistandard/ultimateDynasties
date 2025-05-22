import ChampionshipChart from '@/components/ChampionshipChart';
import { loadTeamData } from '@/utils/data';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  try {
    const data = await loadTeamData();
    
    if (!data || data.length === 0) {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">No Data Available</h1>
            <p className="text-gray-600">Please check your data files and try again.</p>
          </div>
        </main>
      );
    }

    return (
      <main className="flex min-h-screen flex-col items-center p-8">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Ultimate Dynasties</h1>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ChampionshipChart data={data} />
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error loading data:', error);
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Data</h1>
          <p className="text-gray-600">There was a problem loading the data. Please try again later.</p>
        </div>
      </main>
    );
  }
} 