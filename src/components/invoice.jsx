import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import {
  Box, Button, Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Text,
  Input,
} from '@chakra-ui/react';

export default function Invoice({ data }) {
  const chartRef = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (!chartRef.current) return;

    const svg = d3.select(chartRef.current);
    const width = 550;
    const height = 300;
    const margin = { top: 10, right: 0, bottom: 20, left: 0 };

    svg.attr('width', width).attr('height', height);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.tag))
      .range([0, width])
      .padding(0.8);

      const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)]) 
      .range([height - (margin.bottom+20), margin.top]);

      svg.selectAll('*').remove();

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.tag))
      .attr('y', (d) => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', (d) => y(0) - y(d.value))
      .attr('fill', '#47b747')
      .attr('rx', 6)
      .attr('ry', 6)
      ;


    const xAxis = d3.axisBottom().scale(x).tickSize(0);

    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(xAxis)
      .call(g => g.select(".domain").remove())

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)

  }, [data]);

  return (<>
    <Box h={'50px'} borderBottom={'1px solid #e6edfa'}
      display={'flex'}
      justifyContent={'space-between'}
      padding={'0 10px'}
      alignItems={'center'}
    >
      <Heading size={'md'}>Invoices owed to you</Heading>
      <Button bg={'#e6edfa'}onClick={onOpen} fontWeight={'500'} color={'#70b993'}>New Sales Invoice</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt={20} h={'400px'}
        display={'grid'} 
        placeItems={'center'}
        w={'600px'} bg={'#e6edfa'}>
          <ModalBody >
            <Text textAlign={'center'}  mb={10} fontWeight={'bolder'}>Upload Sales Invoice</Text>
            <Input type='file' bg={'white'}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
    <svg ref={chartRef}></svg>

  </>
  );
};
