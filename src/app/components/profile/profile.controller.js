class ProfileController {
  constructor() {
    this.name = 'profile';

    this.makeChart();
  }

  makeChart() {
    var svg = d3.select('#user_chart').append('svg')
      .attr('width', '800')
      .attr('height', '400');

    var margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
    };

    var width = +svg.attr('width') - margin.left - margin.right;
    var height = +svg.attr('height') - margin.top - margin.bottom;

    var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
    var y = d3.scaleLinear().rangeRound([height, 0]);

    var allSkills = [
      'Java',
      'Ruby',
      'Python',
      'C#',
      'Javascript',
      'AngularJS',
      'ReactJS',
      'EmberJS',
      'VueJS',
      'CSS',
      'html',
      'Unity',
      'bootstrap'
    ];

    var data = allSkills.map(function(skillName) {
      return {
        name: skillName,
        score: Math.random() / 2 + 0.5
      }  
    });

    var myData = [
      {
        name: 'Javascript',
        score: 0.8
      },
      {
        name: 'html',
        score: 0.4
      },
      {
        name: 'CSS',
        score: 0.6
      },
    ];

    console.log(data);

    x.domain(data.map(function(d) { return d.name; }));
    y.domain([0, 1]);

    g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(y).ticks(10, '%'))
      .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Score');

    g.selectAll('.industry')
      .data(data)
      .enter().append('rect')
        .attr('class', 'bar industry')
        .attr('x', function(d) { return x(d.name); })
        .attr('y', function(d) { return y(d.score); })
        .attr('fill', 'lightblue')
        .attr('stroke', 'black')
        .attr('stroke-width', 1)
        .attr('width', x.bandwidth())
        .attr('height', function(d) { return height - y(d.score); });

    g.selectAll('.myBar')
      .data(myData)
      .enter().append('rect')
        .attr('class', 'bar myBar')
        .attr('x', function(d) { return x(d.name); })
        .attr('y', function(d) { return y(d.score); })
        .attr('fill', 'green')
        .attr('stroke', 'black')
        .attr('stroke-width', 1)
        .attr('opacity', 0.7)
        .attr('width', x.bandwidth())
        .attr('height', function(d) { return height - y(d.score); });

  }
}

export default ProfileController;
