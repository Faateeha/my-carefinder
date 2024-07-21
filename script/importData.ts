import fs from 'fs';
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase
initializeApp({
  credential: applicationDefault()
});

const db = getFirestore();

// Load JSON data
const hospitals = JSON.parse(fs.readFileSync('src/data/data.json', 'utf8'));

const importData = async () => {
  const batch = db.batch();
  const collectionRef = db.collection('hospitals');

  hospitals.forEach((hospital: any) => {
    const docRef = collectionRef.doc(); // Auto-generate document ID
    batch.set(docRef, hospital);
  });

  await batch.commit();
  console.log('Data imported successfully.');
};

importData().catch(console.error);
