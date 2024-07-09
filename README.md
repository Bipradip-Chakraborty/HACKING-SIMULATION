# Hacking Simulation

This repository contains a JavaScript script that simulates a hacking process by typing out sentences with a cursor effect and adding/removing dots at the end of each sentence.

## Description
The script dynamically types out a series of sentences, simulating a hacking process on a web page. It features:
- A typing effect with a blinking cursor.
- Animated dots that appear and disappear at the end of each sentence to mimic loading or processing.

## File Description
- `hacking_simulation.js`: The main script file that performs the hacking simulation.

## Usage
1. Clone the repository.
2. Include the `hacking_simulation.js` file in your HTML document.
3. Ensure you have an element with the class `hacked` where the script will append the sentences.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hacking Simulation</title>
    <script src="hacking_simulation.js" defer></script>
</head>
<body>
    <div class="hacked"></div>
</body>
</html>
