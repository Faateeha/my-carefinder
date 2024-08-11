// services/hospitalService.ts
import React from 'react';
import { db } from '@/app/firebase'; // Adjust the import path as needed
import { collection, getDocs } from 'firebase/firestore';

export interface Hospital {
  name: string;
  address: string;
  contact: string;
  description?: string; // Optional field for markdown content
}

export const fetchHospitals = async (): Promise<Hospital[]> => {
  const hospitalsCollection = collection(db, 'hospitals');
  const hospitalsSnapshot = await getDocs(hospitalsCollection);
  const hospitalsList = hospitalsSnapshot.docs.map(doc => doc.data() as Hospital);
  return hospitalsList;
};
