"use client";

import { useState } from 'react';
import hospitalData from "@/data/data.json";
import { Box, Input, List, ListItem, Button, Text, Flex } from '@chakra-ui/react';

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

    if (value === '') {
      setFilteredHospitals([]);
      return;
    }

    const results = hospitalData.filter((hospital: HospitalData) =>
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
    <Box p={4}>
      <Input
        placeholder="Search by location"
        value={query}
        onChange={handleSearch}
        mb={4}
      />
      <List spacing={3}>
        {paginatedHospitals.map((hospital, index) => (
          <ListItem key={index} p={3} shadow="md" borderWidth="1px" borderRadius="md">
            <Flex direction="column">
              <Text fontWeight="bold">{hospital["Hospital name"]}</Text>
              <Text color="gray.500">{hospital.address}</Text>
            </Flex>
          </ListItem>
        ))}
      </List>
      <Flex mt={4} justify="space-between">
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          colorScheme="purple"
        >
          Previous
        </Button>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={(page + 1) * itemsPerPage >= filteredHospitals.length}
          colorScheme="purple"
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default SearchComponent;

