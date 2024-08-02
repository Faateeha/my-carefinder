import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Text } from '@chakra-ui/react';

const ShareHospitals: React.FC = () => {
  const router = useRouter();
  const { data } = router.query;
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    if (data) {
      try {
        const decodedData = decodeURIComponent(data as string);
        const parsedData = JSON.parse(decodedData);
        setHospitals(parsedData);
      } catch (error) {
        console.error("Failed to decode or parse data", error);
      }
    }
  }, [data]);

  return (
    <Box p={6}>
      <Text fontSize="xl" mb={4}>Share these hospitals:</Text>
      {hospitals.map((hospital: any, index: number) => (
        <Box key={index} mb={4} p={4} border="1px solid gray">
          <Text fontSize="lg" fontWeight="bold">{hospital["Hospital name"]}</Text>
          <Text>{hospital.address}</Text>
          <Text>{hospital.contact}</Text>
        </Box>
      ))}
      <Button colorScheme="purple" onClick={() => navigator.clipboard.writeText(window.location.href)}>
        Copy Link to Clipboard
      </Button>
    </Box>
  );
};

export default ShareHospitals;
