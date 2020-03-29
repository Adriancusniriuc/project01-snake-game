**<h1>Snake Game</h1>**

**<h2>Software Engineering Immersive – Project 01</h2>**


This was my first project of the Software Engineering Immersive course – week 4

**<h2>Built with</h2>**
<ol>
<li>HTML 5</li>
<li>CSS</li>
<li>JavaScript</i>
<li>GitHub</li>
</ol>

**<h2>Deployment</h2>**
The game is deployed on GitHub Pages and it can be found here: https://adriancusniriuc.github.io/project01-snake-game/

**<h2>Getting Started</h2>**
Use the clone button to download the game source code. Open the index.html file in your browser and the game should start, if not check the console for any issues.

**<h2>Website Architecture</h2>**
The aim of the game is to increase the length of your snake as much as possible by drinking the randomly generated bottles of beer. Each time the beer is drunk, the snake length increases and so does its speed. If the head of the snake moves outside the grid or over itself, then the game is over.
 
<img src="https://i.imgur.com/w81bZu5.png"  widht=400px height=400px> 

The planning of the projects has been broken down in the following way:
<ol>
<li>Adding food items at random;</li>
<li>Building a grid;</li>
<li>Creating a snake;</li>
<li>Moving the snake;</li>
<li>Killing the snake when it collides with a wall or itself</li>
</ol>

<img src="https://i.imgur.com/dn8AtwE.png" height= 600px> 


**<h2>Challenges</h2>**
Being the very first project, this one proved to be a rather challenging one as Vanilla JavaScript game logic was not something I have worked with before. Building the grid, creating the snake and the random generation of “apples” have not been so challenging but once I had to figure out the logic for movement and gameover, things got slightly more complex.<br>

<img src="https://i.imgur.com/vFBUO2Q.png" height= 200px> 

My solution was using the grid's cell indexes as a range and determining that anytime the headindex goes out of the range then it's game over. The other condition for game over was activated if the snake hit it’s own body.



**<h2>Improvements</h2>**
 One of the desired improvements would be to go over the code and try to refactor some of the parts of it as I believe they could be written with fewer lines and a more straightforward logic and syntax. However, I am happy with how the code was written at that moment in time as it gave me as a novice, a better understanding of the JS language. Having short code is not always the best way to do things they say. <br>

Apart from this, I have noticed some bugs that I could work on. For example, everytime a beer is being drunk a hiccup sound is played. One of the bugs appears when you drink two beers quickly one after another. If this happens, the second hiccup sound is not played. <br>
Another thing I would like to improve would be creating a leaderboard. 

**<h2>Wins</h2>**
I believe this project represents one of the steepest learning curves throughout my twelve weeks at General Assembly’s Software Engineering Immersive.

The key features of my learning curve are represented by the understanding of following practices: 
- Learning how to map through items in an array. (grid)
- Learning how to use a for loop. (collision)
- If statement. (Bottles as food)
- Ternary Statement. (Game End)