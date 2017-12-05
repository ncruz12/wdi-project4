

-- INSERT INTO css_types (css_type) VALUES
-- ('Gradients'),
-- ('Images'),
-- ('Animations'),
-- ('Transitions'),
-- ('2D Transforms'),
-- ('3D Transforms');

INSERT INTO tricks (category, description, codes_id) VALUES
('Gradients', 'CSS3 gradients allows you to display transitions betweent two or more colors and can be in a different shape.', 1),
('Images', 'There are many things that can be done with images, but for this example I will show how to flip an image.',2),
('Animations', 'CSS3 animations allow an element to change from one style to another', 3),
('Transition', 'CSS3 transitions allow you to change property values from one value to another, over a given time', 4),
('Opacity', 'This property determines the transperancy of a element', 5),
('Shadow', 'CSS3 allows you to add shadow to text or elements, for this example we will be doing it on text with multiple colors', 6);


INSERT INTO codes (html_code, css_code) VALUES
('
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Gradient</title>
</head>
<body>
  <h1>This is a Radial Gradient as a Circle</h1>
  <div id="gradient"></div>
</body>
</html>
  ',
  '
  #gradient {
  height: 170px;
  width: 210px;
  background: radial-gradient(circle, purple, lightpink, lightblue);
}
  '),

('
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Images</title>
</head>
<body>
  <div id="images">
    <h1>Hover over image to view effect</h1>
    <img src="" alt="picture">
  </div>
</body>
</html>
  ',
  '
  images img:hover {
    transform: scaleX(-1);
  }
  '),

('
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Animations</title>
</head>
<body>
  <h1>This animation changes the color and shape of the element</h1>
  <div class="animation"></div>
</body>
</html>
  ',
  '
  .animation {
  height: 150px;
  width: 150px;
  margin: 0 auto;
  background-color: blue;
  animation-name: stretch;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

  @keyframes stretch {
  0% {
    transform: scale(.3);
    background-color: blue;
    border-radius: 100%;
  }
  50% {
    background-color: purple;
  }
  100% {
    transform: scale(1.5);
    background-color: red;
  }
}
  '),

('
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Transitions</title>
</head>
<body>
  <div class="transition">
    <h1>Hover over me</h1>
  </div>
</body>
</html>
  ',
  '
  .transition {
  width: 150px;
  height: 300px;
  background-color: lightblue;
  transition: all 1s ease-in-out;
}

  .transition:hover {
  width: 350px;
  height: 150px;
  background-color: lightgreen;
}
'),

('
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Opacity</title>
</head>
<body>
  <div class="opacity">
    <img src="" alt="image">
  </div>
</body>
</html>
  ',
  '
  .opacity img {
  opacity: 0.5;
  }

  .opacity img:hover {
  opacity: 1.0;
  }
  '),

('
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Text Shadow</title>
</head>
<body>
  <div class="shadow">
    <h1>This is a cool effect !</h1>
  </div>
</body>
</html>
  ',
  '
  .shadow h1 {
  color:  white;
  text-shadow: 1px 1px 2px black, 0 0 30px blue, 0 0 5px darkblue;
  }
  ');



