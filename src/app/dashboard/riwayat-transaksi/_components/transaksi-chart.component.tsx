'use client';

import React from 'react';
import { Transaction } from '@/types/transaksi.type';
import { formatCurrency } from '@/utils/transaksi.util';

interface TransactionChartProps {
  transactions: Transaction[];
  saldoBersih: number;
}

const TransactionChart: React.FC<TransactionChartProps> = ({ transactions, saldoBersih }) => {
  // Safety check for transactions
  if (!transactions || !Array.isArray(transactions) || transactions.length === 0) {
    return (
      <svg 
        style={{
          width: '120px',
          height: '80px'
        }}
        viewBox="0 0 120 80"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 0.2}} />
            <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 0}} />
          </linearGradient>
        </defs>
        
        <path
          d="M15,60 Q25,50 35,45 Q45,40 55,35 Q65,30 75,25 Q85,20 95,15 L95,75 L15,75 Z"
          fill="url(#chartGradient)"
        />
        
        <path
          d="M15,60 Q25,50 35,45 Q45,40 55,35 Q65,30 75,25 Q85,20 95,15"
          stroke="#3b82f6"
          strokeWidth="2.5"
          fill="none"
        />
        
        <circle cx="35" cy="45" r="2" fill="#3b82f6" />
        <circle cx="55" cy="35" r="2" fill="#3b82f6" />
        <circle cx="75" cy="25" r="2" fill="#3b82f6" />
        <circle cx="95" cy="15" r="3" fill="#3b82f6" stroke="white" strokeWidth="1" />
        
        <rect x="80" y="5" width="35" height="12" fill="#3b82f6" rx="2" />
        <text 
          x="97.5" 
          y="13" 
          style={{
            fontSize: '8px',
            fill: 'white',
            fontWeight: '600',
            textAnchor: 'middle'
          }}
        >
          {formatCurrency(Math.abs(saldoBersih || 0)).replace('Rp', '').replace('.00', '')}
        </text>
      </svg>
    );
  }

  // Calculate cumulative balance for chart
  let cumulativeBalance = 0;
  const balanceData = transactions.map((transaction, index) => {
    const amount = transaction.jenis === 'Pemasukan' ? transaction.kredit : -transaction.debet;
    cumulativeBalance += amount;
    return {
      x: index,
      y: cumulativeBalance,
      date: new Date(transaction.tanggal).toLocaleDateString('id-ID')
    };
  });

  // Normalize data for chart display
  const maxBalance = Math.max(...balanceData.map(d => Math.abs(d.y)));
  const minBalance = Math.min(...balanceData.map(d => d.y));
  const range = maxBalance - minBalance || 1;

  return (
    <svg 
      style={{
        width: '120px',
        height: '80px'
      }}
      viewBox="0 0 120 80"
    >
      {/* Chart background area with gradient */}
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 0.2}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 0}} />
        </linearGradient>
      </defs>
      
      {/* Generate path based on actual data */}
      {balanceData && balanceData.length > 1 && (
        <>
          {/* Chart area fill */}
          <path
            d={`
              M15,${70 - ((balanceData[0].y - minBalance) / range) * 40}
              ${balanceData.slice(1).map((point, i) => {
                const x = 15 + ((i + 1) / (balanceData.length - 1)) * 80;
                const y = 70 - ((point.y - minBalance) / range) * 40;
                return `L${x},${y}`;
              }).join(' ')}
              L95,75 L15,75 Z
            `}
            fill="url(#chartGradient)"
          />
          
          {/* Chart line */}
          <path
            d={`
              M15,${70 - ((balanceData[0].y - minBalance) / range) * 40}
              ${balanceData.slice(1).map((point, i) => {
                const x = 15 + ((i + 1) / (balanceData.length - 1)) * 80;
                const y = 70 - ((point.y - minBalance) / range) * 40;
                return `L${x},${y}`;
              }).join(' ')}
            `}
            stroke="#3b82f6"
            strokeWidth="2.5"
            fill="none"
          />
          
          {/* Data points */}
          {balanceData.map((point, i) => {
            const x = 15 + (i / (balanceData.length - 1)) * 80;
            const y = 70 - ((point.y - minBalance) / range) * 40;
            const isLast = i === balanceData.length - 1;
            
            return (
              <circle 
                key={i}
                cx={x} 
                cy={y} 
                r={isLast ? 3 : 2} 
                fill="#3b82f6" 
                stroke={isLast ? "white" : "none"}
                strokeWidth={isLast ? 1 : 0}
              />
            );
          })}
          
          {/* Value label with background */}
          <rect x="80" y="5" width="35" height="12" fill="#3b82f6" rx="2" />
          <text 
            x="97.5" 
            y="13" 
            style={{
              fontSize: '8px',
              fill: 'white',
              fontWeight: '600',
              textAnchor: 'middle'
            }}
          >
            {formatCurrency(Math.abs(saldoBersih)).replace('Rp', '').replace('.00', '')}
          </text>
        </>
      )}
      
      {/* Fallback static chart if insufficient data */}
      {(!balanceData || balanceData.length <= 1) && (
        <>
          <path
            d="M15,60 Q25,50 35,45 Q45,40 55,35 Q65,30 75,25 Q85,20 95,15 L95,75 L15,75 Z"
            fill="url(#chartGradient)"
          />
          
          <path
            d="M15,60 Q25,50 35,45 Q45,40 55,35 Q65,30 75,25 Q85,20 95,15"
            stroke="#3b82f6"
            strokeWidth="2.5"
            fill="none"
          />
          
          <circle cx="35" cy="45" r="2" fill="#3b82f6" />
          <circle cx="55" cy="35" r="2" fill="#3b82f6" />
          <circle cx="75" cy="25" r="2" fill="#3b82f6" />
          <circle cx="95" cy="15" r="3" fill="#3b82f6" stroke="white" strokeWidth="1" />
          
          <rect x="80" y="5" width="35" height="12" fill="#3b82f6" rx="2" />
          <text 
            x="97.5" 
            y="13" 
            style={{
              fontSize: '8px',
              fill: 'white',
              fontWeight: '600',
              textAnchor: 'middle'
            }}
          >
            {formatCurrency(Math.abs(saldoBersih || 0)).replace('Rp', '').replace('.00', '')}
          </text>
        </>
      )}
    </svg>
  );
};

export default TransactionChart;