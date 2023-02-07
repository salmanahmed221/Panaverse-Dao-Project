"use client";

import { Box, Button, HStack   } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <Box w="full" bg="#ebffff">
      <HStack justify="space-between" mx="2 ">
        <Image src={"/without.png"} alt="/" height={100} width={100} />

        <HStack
          spacing="16"
          fontSize={["14px", "14px", "18px", "18px"]}
          fontWeight="medium"
        >
          <Link
            href={"https://portal.piaic.org/"}
            target="_blank"
            title="Click to Visit"
          >
            <Button
              mr="10px"
              px={{ base: "6", lg: "10" }}
              borderRadius="20"
              variant="unstyled"
              bg="blue"
            >
              Apply
            </Button>
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navigation;
