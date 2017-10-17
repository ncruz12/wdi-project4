\c css_tricks_db;

INSERT INTO css_types (css_type) VALUES
('Gradients'),
('Images'),
('Animations'),
('Transitions'),
('2D Transforms'),
('3D Transforms');


INSERT INTO tricks (description, css_type_id) VALUES
('CSS3 gradients allows you to display transitions betweent two or more colors.',
  1
),
('CSS3 gradients allows you to display transitions betweent two or more colors and can be in a different shape.',
  1
),
('Applying CSS with images ',
  2
),
('CSS3 animations allow an element to change from one style to another',
  3
),
('CSS3 transitions allow you to change property values from one value to another, over a given time',
  4
),
('CSS3 animations allow an element to change from one style to another and its pretty cool what you can do with it!',
  3
),
('This is called the matrix method. it combines all the D2 transform methods into one ',
  5
);

