# Project related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("agraj")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach( (button) => {
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    switch(e.target.id){
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'purple':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        console.log(`'color not found'`);
        break;
    }
  })  
} )


```

## project 2 solution

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a vaild height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a vaild weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);

    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi} under weight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi} normal weight</span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi} over weight</span>`;
    } else {
      results.innerHTML = `<span>${bmi} error</span>`;
    }
  }
});

```