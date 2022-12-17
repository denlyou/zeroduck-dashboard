import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { ForecastObject } from './exTypes';

interface DashboardStore {
  forecast: Array<ForecastObject>;
  setForecast: (forecast: Array<ForecastObject>) => void;
}

const useDashboardStore = create<DashboardStore>()(devtools((set) => ({
  forecast: [],
  setForecast: (list) => set({ forecast: list }),
} ) ) );

export default useDashboardStore;