import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import {
    Box, Heading,
    Select,
} from '@chakra-ui/react';

export default function Checkac({ accountData }) {
    const chartRef = useRef();
    useEffect(() => {
        if (!chartRef.current) return;
        const svg = d3.select(chartRef.current);

        let width = 550
        let height = 300
        const margin = { top: 10, right: 0, bottom: 20, left: 0 };

        const x = d3
      .scaleBand()
      .domain(accountData.map((d) => d.id))
      .range([0, width - margin.right])
      .padding(0.1);
  
      const y = d3
      .scaleLinear()
      .domain([0, d3.max(accountData, (d) => d.value)])
      .range([height - margin.bottom, margin.top]);


      const line = d3
      .line()
      .x((d) => x(d.id) + x.bandwidth())
      .y((d) => y(d.value))
      .curve(d3.curveBasis);


      svg
      .append('path')
      .datum(accountData)
      .attr('fill', 'none')
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('d', line);

    svg
      .append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSize(0))
      .call(g => g.select(".domain").remove())
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '20px')
      .attr('dy', '10px')

    }, [accountData]);


    return (<>
        <Box h={'50px'} borderBottom={'1px solid #e6edfa'}
            display={'flex'}
            justifyContent={'space-between'}
            padding={'0 10px'}
            alignItems={'center'}
        >
            <Heading size={'md'}>Checking Account</Heading>
            <Box
                display={'flex'}
                gap={2}
                alignItems={'center'}
                fontSize={'small'}
                fontWeight={'400'}
            >
                <Select w={'100px'} borderRadius={5}
                    fontWeight={'bold'}
                    placeholder={'Manage'} defaultValue={'Jan'} size='sm'>

                </Select>
                <Select w={'100px'} borderRadius={5}
                    fontWeight={'bold'}
                    placeholder={'Jan'} defaultValue={'Jan'} size='sm'>
                    <option value='Feb'>Feb</option>
                    <option value='Mar'>Mar</option>
                    <option value='Apr'>Apr</option>
                    <option value='May'>May</option>
                    <option value='Jun'>Jun</option>
                    <option value='July'>July</option>
                    <option value='Aug'>Aug</option>
                    <option value='Sept'>Sept</option>
                    <option value='Oct'>Oct</option>
                    <option value='Nov'>Nov</option>
                    <option value='Dec'>Dec</option>
                </Select>

            </Box>

        </Box>
        <svg ref={chartRef} width={'550px'} height={'300px'}></svg>


    </>
    );
}
