/*
 *Objective :get base,height of a triangle.calculate the area by using the provided formula.and then display the area.
 * step-1:get base value of the triangle
 * step-2:added an id in the base input field
 * <step-3:use getElementById to access the input field
 * step-4:get value from the input field.(value is string now)
 * step-5:convert the value to a number.use pareFloat.
 *
 */

function calculateTriangleArea() {
  // get triangle base value
  const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);

  // get triangle height value
  const triangleHeightInput = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);
  // calculate triangle area
  const area = 0.5 * base * height;
  console.log(area, 'area of the triangle is:');

  // display triangle Area
  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText = area;
}
