# Battleship

The tenth project from the JavaScript course of The Odin Project.

## Goal

To practice test-driven development (TDD) using jest.

## Remarks

This project could have been finished in a week or less but I got sick and lazy to continue for 10ish days.

What I felt to be the hardest obstacle on this project is... not the AI logic, not the dragging and dropping of ships but rather the **rendering of ships on a board**.
I wanted the board to be flexible when the screen gets resized and that's the thing that made ~~my life~~ this project so ~~miserable~~ complicated.

Another thing that made me waste time is the dragging and dropping. I initially did it with the classic built-in [Drag API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) but it turns out that **it does not work on mobile**.
I thought to myself to use the [Touch API](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events) alongside the Drag API to create this drag and drop functionality but **thank goodness(!!!)** I stopped midway while reading the Touch API documentation and resorted to looking for an existing npm package.
I found [interactjs](https://interactjs.io/) and it works like a charm hence I had to refactor from Drag API to interactjs which took quite some time (1-2 hours).

Also, one final lesson I learned on this project **always plan before coding**. I was too lazy and felt so cocky that maybe I can implement the AI logic on the fly... Spoiler: Wasted almost 5 hours and nothing worked, just bugs and bugs then bugs. Finally, I have had it and reverted everything (yes, **everything**) then grabbed my iPad to start planning the AI logic from the ground up.
And surprise, surprise, in just 1 hour, I have finally pseudo-coded the algorithm for the AI and sprinkle in around 2-3 hours of implementation, the algorithm works fantastically and it's much easier to understand than the previous AI logic I wrote.
So big, big, **big lesson: always plan before writing a single line of code.**

All in all, the rendering logic and game logic are pretty ugly since I wrote them without planning (like the one happened with my AI logic) but since they worked, why should I start everything from the beginning again? I wanna move on the course hence having finished all the requirements provided in this project, I am pretty satisfied and will leave the project as is.
Thank you for reading my remarks and I hope this project could help or interest you in any way. :)

## Stats

**Hours coded:** Around 20-30 hours
