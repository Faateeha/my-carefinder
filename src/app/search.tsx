"use client";
import { useState, useEffect, useCallback } from 'react';
import hospitalData from "@/data/data.json";
import Aos from "aos";
import "aos/dist/aos.css";
import { Box, Input, SimpleGrid, List, ListItem, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { Parser } from 'json2csv';

interface HospitalData {
  "Hospital name": string;
  address: string;
  contact: string;
}

const SearchComponent: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  const [query, setQuery] = useState('');
  const [filteredHospitals, setFilteredHospitals] = useState<HospitalData[]>([]);
  const [page, setPage] = useState(0);
  const [hospitals, setHospitals] = useState<HospitalData[]>([]);
  const itemsPerPage = 12;

  const fetchHospitalsFromFirebase = useCallback(async (): Promise<HospitalData[]> => {
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
  }, []);

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
  }, [fetchHospitalsFromFirebase]);

  useEffect(() => {
    const searchHospitals = (query: string) => {
      const results = hospitals.filter(hospital =>
        hospital.address?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredHospitals(results);
      setPage(0);
    };

    searchHospitals(query);
  }, [query, hospitals]);

  const exportToCSV = () => {
    const parser = new Parser();
    const csv = parser.parse(filteredHospitals);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'hospitals.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    const maxHospitals = 5; // Limit to the first 5 hospitals to avoid exceeding URL length
    const limitedHospitals = filteredHospitals.slice(0, maxHospitals);

    const encodedData = encodeURIComponent(JSON.stringify(limitedHospitals));
    const shareUrl = `${window.location.origin}/share-hospitals?data=${encodedData}`;

    const mailtoLink = `mailto:?subject=Check out this list of hospitals&body=I found this list of hospitals using Carefinder:%0A%0A${shareUrl}%0A%0AOnly the first ${maxHospitals} hospitals are included.`;

    window.location.href = mailtoLink;
  };

  const paginatedHospitals = filteredHospitals.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <Box p={6} data-aos="zoom-in-down">
      <Input
        placeholder="Enter your location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        mb={4}
        variant="filled"
      />
      <List>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {paginatedHospitals.map((hospital) => {
            const nameSlug = encodeURIComponent(hospital["Hospital name"].toLowerCase().replace(/\s+/g, '-'));
            return (
              <ListItem key={nameSlug} border="1px" borderColor="gray.100" p={4} borderRadius="md" boxShadow="sm" backgroundColor="white">
                <Link href={`/getstarted/${nameSlug}`}>
                  <Text fontSize="lg" fontWeight="bold" cursor="pointer" _hover={{ color: "blue.500" }}>
                    {hospital["Hospital name"]}
                  </Text>
                </Link>
                <Text fontSize="sm" color="gray.600">
                  {hospital.address}
                </Text>
              </ListItem>
            );
          })}
        </SimpleGrid>
      </List>
      <Button colorScheme="blue" mt={4} onClick={exportToCSV}>
        Export to CSV
      </Button>
      <Button colorScheme="blue" mt={4} ml={3} onClick={handleShare}>
        Share Hospitals
      </Button>

      <Box mt={4} display="flex" justifyContent="space-between">
        <Button
          colorScheme="blue"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          Previous
        </Button>
        <Button
          colorScheme="blue"
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


