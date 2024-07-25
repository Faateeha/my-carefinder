// components/HospitalList.tsx
"use client";
import { useEffect, useState } from "react";
import { fetchHospitals, Hospital } from "@/app/hospital"; // Adjust import path

const HospitalList = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHospitals = async () => {
      try {
        const data = await fetchHospitals();
        setHospitals(data);
      } catch (error) {
        console.error("Failed to fetch hospitals", error);
      } finally {
        setLoading(false);
      }
    };

    getHospitals();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {hospitals.map(hospital => (
        <div key={hospital.name}>
          <h2>{hospital.name}</h2>
          <p>{hospital.address}</p>
          <p>{hospital.contact}</p>
          <p>{hospital.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HospitalList;
