function myFunction() {
  console.log('Input Value', document.getElementById("country").value)
  // 'https://dev.to/adebayoileri/configure-babel-for-nodejs-application-3798'

  const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 8 },
    { name: 'Sunny', age: 1 }
  ];
  const markup = `
  <ul class="dogs">
      ${dogs.map(dog => `<li>* ${dog.name} is ${dog.age * 7}</li>`)}
  `;

  document.getElementById("result").innerHTML = markup
}