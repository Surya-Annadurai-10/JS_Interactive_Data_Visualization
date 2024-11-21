const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Monthly Sales',
      data: [65, 59, 80, 82, 55],
      borderWidth: 1
    }]
  },
  options: {
    
    animation : true,
    title: {
        display: true,
        text: "World Wine Production 2018"
      },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

anime({
    targets: 'div',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
  });