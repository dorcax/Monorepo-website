// src/constants/transfers.ts
export interface Transfer {
  destination: string;
  currency: string;
  amount: number;
  dateTime: string;
  trackingCode: string;
}

export const transferList: Transfer[] = [
  {
    destination: 'Nigeria',
    currency: 'NGN',
    amount: 3000,
    dateTime: '2025-07-28 10:30 AM',
    trackingCode: '#NG123456',
  },
  {
    destination: 'United States',
    currency: 'USD',
    amount: 150,
    dateTime: '2025-07-28 11:00 AM',
    trackingCode: '#US987654',
  },
  {
    destination: 'Kenya',
    currency: 'KES',
    amount: 5000,
    dateTime: '2025-07-28 01:45 PM',
    trackingCode: '#KE456789',
  },
  {
    destination: 'Ghana',
    currency: 'GHS',
    amount: 1200,
    dateTime: '2025-07-28 03:20 PM',
    trackingCode: '#GH321654',
  },
];
