"use client"

import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push(`/new/${uuidv4()}`);
  },[]);
  return (
    <Box>
    </Box>
  );
}
