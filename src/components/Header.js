import React from "react";

import {
    Grid,
    GridItem,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    UnorderedList,
    ListItem,
    Link,
} from "@chakra-ui/react";
import "../Clickable.css"
import RH from '../RED HAT.svg';
import {ArrowForwardIcon} from "@chakra-ui/icons";
import { Link as LLL} from 'react-router-dom';
import {useEffect, useState} from 'react';


export default function Header() {

  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);

    const [inputText, setInputText] = useState('');
    const [responseText, setResponseText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async (event) => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: inputText })
    };
    const response = await fetch('http://localhost:5000/api', requestOptions);
    const data = await response.json();
    setResponseText(data.output);

  
}

    const items = ["What is the process of voting?",
        "How would Rick explain the voting process in Moldova?",
        "What would Maya Sandu do if she were a samurai?",
        "Why should I go to the vote?",
        "Where is the lottery?"]
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={12}  p={4} >
      <GridItem colSpan={0}>
          <Button as={LLL} to="/" variant="link">
              <Image src={RH} alt="Logo" w="70px" />
          </Button>
      </GridItem>
      <GridItem colSpan={3}>
        <InputGroup >
            <Input boxShadow="lg" borderColor="white" background="white" placeholder="Generate Image" />
            <InputRightElement w="100px">
                <Button backgroundColor={"white"} textColor={"#9E45C8"}>Generate</Button>
            </InputRightElement>
        </InputGroup>
      </GridItem>
      <GridItem colSpan={8}>
        <InputGroup>
          <Input  boxShadow="lg" borderColor="white"  value={inputText} onChange={handleInputChange}  background="white" placeholder="Generate Text" />
          <InputRightElement width="auto">
            <Button backgroundColor={"whiteAlpha.100"}   onClick={handleSubmit} textColor={"#9E45C8"}>Generate</Button>
          </InputRightElement>
        </InputGroup>
        <div>{responseText}</div>
      </GridItem>

    </Grid>
  );
}

