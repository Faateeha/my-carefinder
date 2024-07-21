"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const MarkdownEditor: React.FC = () => {
  const [value, setValue] = useState("**Write your content here...**");

  return (
    <Box className="container mx-auto p-4">
      <MDEditor
        value={value}
        onChange={setValue}
        previewOptions={{ disabled: false }} // Customize preview options if needed
      />
    </Box>
  );
};

export default MarkdownEditor;
