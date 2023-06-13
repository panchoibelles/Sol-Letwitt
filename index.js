import { select, range, symbol, symbols } from 'd3';

const width=600;
const height=500;
const n=25;
const symbolPath = 2;
const horizontal=true;

//  Create SVG
const svg = select('body').append('svg');
svg.attr('width', width)
svg.attr('height', height);

//             Create Bar Horizontal

//              Create bar Horizontal
svg.append('g')
  .selectAll('rect').data(range(n)).join('rect')
	.attr('y',(d)=>d*20)
  .attr('width',width)
  .attr('height',10)
  .attr('mask','url(#mask-1)');

//Create bar Vertical
svg.append('g')
  .selectAll('rect').data(range(n)).join('rect')
	.attr('x',(d)=>d*20)
  .attr('width',10)
  .attr('height',height)
  .attr('mask','url(#mask-2)');

const renderMask = (id,reverse,shape) => {
  const mask = svg.append('mask')
	.attr('id',id);

mask.append('rect')
	.attr('width', width)
  .attr('height', height)
  .attr('fill', reverse?'white':'black');

mask.append('g')
	.attr('transform','translate('+width/2+','+height/2+')')
  	.append('path')
  	.attr('d', symbol(symbols[shape], 50000)())
  	.attr('fill', reverse?'black':'white');
}

renderMask('mask-1',horizontal,symbolPath);    //Render Mask-1

renderMask('mask-2',!horizontal,symbolPath);   //Render Mask-2





