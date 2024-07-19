import { useRouter } from 'next/navigation';
import hospitalData from '@/data/data.json';
import { Box, Text } from '@chakra-ui/react';

const HospitalDetail = () => {
  const router = useRouter();
  const { name } = router.query;

  const hospital = hospitalData.find((h) =>
    encodeURIComponent(h["Hospital name"].toLowerCase().replace(/\s+/g, '-')) === name
  );

  if (!hospital) return <Text>Loading...</Text>;

  return (
    <Box p={6}>
      <Text fontSize="2xl" fontWeight="bold">{hospital["Hospital name"]}</Text>
      <Text mt={4}>{hospital.address}</Text>
      <Text mt={2}>Contact: {hospital.contact}</Text>
    </Box>
  );
};

export default HospitalDetail;
