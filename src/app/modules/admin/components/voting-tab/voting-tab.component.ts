import { Component, OnInit } from '@angular/core';
import payload from 'src/app/models/poll-payload';
import { PollData } from 'src/app/models/polldata';
import { PollService } from 'src/app/services/poll.service';
import * as d3 from 'd3';
@Component({
  selector: 'app-voting-tab',
  templateUrl: './voting-tab.component.html',
  styleUrls: ['./voting-tab.component.css'],
})
export class VotingTabComponent implements OnInit {
  constructor(private _pollService: PollService) {}
  polls: payload[] = [];
  pollData: PollData[] = [];
  private svg;
  private margin = 100;
  private width = 650 - this.margin * 2;
  private height = 500 - this.margin * 2;

  private createSvg(): void {
    this.svg = d3
      .select('figure#bar')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }
  private drawBars(data: PollData[]): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.map((d) => d.title))
      .padding(0.8);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(5,0)rotate(0)')
      .style('text-anchor', 'end');

      this.svg
      .append('text')
      .attr('x', this.width / 2)
      .attr('y', 0 - this.margin / 2)
      .attr('text-anchor', 'middle')
      .style('font-size', '24px')
      .text(data.map((d)=>d.topic)[0] );

    // Create the Y-axis band scale
    const y = d3.scaleLinear().domain([0, 8]).range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.title))
      .attr('y', (d) => y(d.poll_votes))
      .attr('width', x.bandwidth())
      .attr('height', (d) => this.height - y(d.poll_votes))
      .attr('fill', '#FFFFFF');
  }

  ngOnInit(): void {
    this.getPolls();
    setTimeout(() => {
      //for each topic in pollData create a new svg
      const groupedData = this.pollData.reduce((acc, curr) => {
        if (!acc[curr.topic]) {
          acc[curr.topic] = [];
        }
        acc[curr.topic].push(curr);
        return acc;

      }, {});
      for (const topic in groupedData) {
        const data = groupedData[topic];
        this.createSvg();
        this.drawBars(data);
      }
    }, 100);
  }
  getPolls() {
    this._pollService.getPolls().subscribe((data) => {
      this.polls = data;
      //for each poll add to pollData
      this.polls.forEach((poll) => {
        this.pollData.push({
          topic : poll.ideas[0].topic,
          title: poll.ideas[0].title,
          poll_votes: poll.ideas[0].poll_votes,
        });
        this.pollData.push({
          topic : poll.ideas[0].topic,
          title: poll.ideas[1].title,
          poll_votes: poll.ideas[1].poll_votes,
        });


      },
      (err) => alert("Poll for this topic has already been created"));
    });
  }
}
