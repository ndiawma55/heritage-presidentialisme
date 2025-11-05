import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import type { ChartData } from '../types';

const data: ChartData[] = [
  { name: 'Stabilité Politique (Indice)', 'Régime Présidentiel': 45, 'Régime Parlementaire': 75 },
  { name: 'Croissance PIB/habitant (%)', 'Régime Présidentiel': 2.1, 'Régime Parlementaire': 3.5 },
  { name: 'Indice de Démocratie', 'Régime Présidentiel': 5.2, 'Régime Parlementaire': 8.1 },
  { name: 'Contrôle de la Corruption', 'Régime Présidentiel': 38, 'Régime Parlementaire': 69 },
];

const DevelopmentChart: React.FC = () => {
  return (
    <div className="my-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-200">Indicateurs de Développement Comparés</h3>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
            <XAxis dataKey="name" stroke="#9ca3af"/>
            <YAxis stroke="#9ca3af"/>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563',
                color: '#ffffff'
              }}
              cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
            />
            <Legend wrapperStyle={{ color: '#4b5563' }} />
            <Bar dataKey="Régime Présidentiel" fill="#3b82f6" />
            <Bar dataKey="Régime Parlementaire" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DevelopmentChart;
