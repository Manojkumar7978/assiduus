import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import {
    Box, Heading,
    chakra

} from '@chakra-ui/react';
export default function Checkac({data}) {
    const chartRef = useRef();
    useEffect(() => {
        if (!chartRef.current) return;

        const svg = d3.select(chartRef.current);
        const width = 550;
        const height = 300;
        const margin = { top: 10, right: 0, bottom: 20, left: 0 };
        const dataKeys = ['in', 'out'];
        const color = d3.scaleOrdinal().domain(dataKeys).range(['#02bb7d', '#47b747']);

        svg.attr('width', width).attr('height', height);

        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.month))
            .range([0, width])
            .padding(0.8);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => Math.max(d.in, d.out))])
            .range([height - (margin.bottom + 20), margin.top]);

        
        dataKeys.forEach((key, i) => {
            svg
                .selectAll(`.rect-${key}`)
                .data(data)
                .enter()
                .append('rect')
                .attr('class', `rect-${key}`)
                .attr('x', (d) => x(d.month))
                .attr('y', (d) => y(d[key]))
                .attr('width', x.bandwidth())
                .attr('height', (d) => y(0) - y(d[key]))
                .attr('fill', color(key))
                .attr('rx', 6)
                .attr('ry', 6);
        });


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
            <Heading size={'md'}>Total cash flow</Heading>
            <Box
                display={'flex'}
                gap={2}
                alignItems={'center'}
                fontSize={'small'}
                fontWeight={'400'}
            >
                <chakra.div borderRadius={3} w={3} h={3} bg={'green'}></chakra.div>
                In
                <chakra.div borderRadius={3} w={3} h={3} bg={'green'}></chakra.div>
                Out
            </Box>

        </Box>
        <svg ref={chartRef}></svg>


    </>
    );
}
