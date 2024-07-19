"use client";

import { useState } from 'react';
import hospitalData from "@/data/data.json";
import { Box, Input, List, ListItem, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';

const SearchComponent: React.FC = () => {
  interface HospitalData {
    "Hospital name": string;
    address: string;
    contact: string;
  }

  const [query, setQuery] = useState('');
  const [filteredHospitals, setFilteredHospitals] = useState<HospitalData[]>([]);
  const [page, setPage] = useState(0);
  const itemsPerPage = 10;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const results = hospitalData.filter(hospital =>
      hospital.address.toLowerCase().includes(value)
    );

    setFilteredHospitals(results);
    setPage(0);
  };

  const paginatedHospitals = filteredHospitals.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <Box p={6}>
      <Input
        placeholder="Search by location"
        value={query}
        onChange={handleSearch}
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
        <Button colorScheme="purple"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          Previous
        </Button>
        <Button colorScheme="purple"
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
