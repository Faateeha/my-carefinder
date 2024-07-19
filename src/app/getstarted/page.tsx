import SearchComponent from "@/app/search"
import Hero from "@/app/hero"
import {Text, Heading} from "@chakra-ui/react"

export default function getStarted ()  {
    return ( <div>
        <Hero />
        <div className="p-4 justify-center items-center">
        <Heading as="h2" size="lg" >Care Finder</Heading>
        <Text fontSize="lg">Find the nearest hospital to you</Text>
        <Text fontSize="lg">Easily search for hospitals based on location and other criteria.</Text>
        <SearchComponent />
        </div>
    </div>
     );
}
 
