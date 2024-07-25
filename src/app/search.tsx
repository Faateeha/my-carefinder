"use client";

import { useState, useEffect } from 'react';
import hospitalData from "@/data/data.json";
import { Box, Input, List, ListItem, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";

const SearchComponent: React.FC = () => {
  interface HospitalData {
    "Hospital name": string;
    address: string;
    contact: string;
  }

  const [query, setQuery] = useState('');
  const [filteredHospitals, setFilteredHospitals] = useState<HospitalData[]>([]);
  const [page, setPage] = useState(0);
  const [hospitals, setHospitals] = useState<HospitalData[]>([]);
  const itemsPerPage = 10;

  useEffect(() => {
    const loadHospitals = async () => {
      try {
        const firebaseHospitals = await fetchHospitalsFromFirebase();
        const combinedHospitals = [...hospitalData, ...firebaseHospitals];
        setHospitals(combinedHospitals);
      } catch (error) {
        console.error("Error loading hospitals:", error);
      }
    };

    loadHospitals();
  }, []);

  useEffect(() => {
    const searchHospitals = (query: string) => {
      const results = hospitals.filter(hospital =>
        hospital["Hospital name"]?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredHospitals(results);
      setPage(0);
    };

    searchHospitals(query);
  }, [query, hospitals]);

  const fetchHospitalsFromFirebase = async (): Promise<HospitalData[]> => {
    const hospitalsCollection = collection(db, "hospitals");
    const snapshot = await getDocs(hospitalsCollection);
    return snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        "Hospital name": data.name || "",
        address: data.address || "",
        contact: data.contact || ""
      } as HospitalData;
    });
  };

  const paginatedHospitals = filteredHospitals.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <Box p={6}>
      <Input
        placeholder="Search by hospital name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        mb={4}
        variant="filled"
      />
      <List spacing={3}>
        {paginatedHospitals.map((hospital) => {
          const nameSlug = encodeURIComponent(hospital["Hospital name"].toLowerCase().replace(/\s+/g, '-'));
          return (
            <ListItem key={nameSlug} border="1px" borderColor="gray.200" p={4} borderRadius="md" boxShadow="sm">
              <Link href={`/getstarted/${nameSlug}`}>
                <Text fontSize="lg" fontWeight="bold" cursor="pointer" _hover={{ color: "purple.500" }}>
                  {hospital["Hospital name"]}
                </Text>
              </Link>
              <Text fontSize="sm" color="gray.600">
                {hospital.address}
              </Text>
            </ListItem>
          );
        })}
      </List>
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button
          colorScheme="purple"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          Previous
        </Button>
        <Button
          colorScheme="purple"
          onClick={() => setPage(page + 1)}
          disabled={(page + 1) * itemsPerPage >= filteredHospitals.length}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default SearchComponent;
