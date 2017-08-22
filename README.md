Live Site - https://hostedprojects.github.io/SoundCloud-API-Host/

SoundCloud Project - Week 4 Project at The Iron Yard

This was a solo project assigned in Week 4 of The Iron Yard. 
We were tasked with utilizing the SoundCloud API to fetch song and band information, get it to render to the page, and then be able to play the songs rendered.The design and structure of the website was up to us and it was our time designing an app from the ground up.


SoundCloud Music Search  

As your final project for this portion of the course, let's take stock of all you have learned and build a real application that is useful and you can share with friends. For this app, we will be using SoundCloud and specifically their Developer API to pull data from.

You'll use this data to pull songs based on a search that your user performs. Here is an idea of what the end result should look like, though you can have fun with the design.

Here are the steps you'll need to take in order to complete this project.

1. Sign up to SoundCloud for Developers and get an API key.
2. Build a simple form that has an <input> where a user can fill in their favorite band, like mechlo and it will return a handful of songs by them or with their name in it.
3. When the user types in a band name and presses the submit button, you should then make the search request. You can trap this with the onSubmit() event.
4. Once you have the data, you should fetch the specific data and use the results to display a listing of songs related to the search term.
5. Then to add some features, you should set it up so when a user clicks on one of the songs, it should then play in an <audio> tag that you've also added to the page.
Hints & Tips  

There will be some new concepts you'll need to work through on this project, so feel free to ask for assistance along the way.

Bonus: Deployment  

Ok, so you've built a really cool web application. Congrats! Now you'd like a way to share it with your friends. There are many deployment strategies you can take and your instructor might have others they want to share, but let's talk through a really simple one that you can do without adding any other tools.

Many of you might not know this, but GitHub has a deployment tool built in that's free to use. It's called GitHub Pages, and it's pretty easy to use. Here is how:

1. Ensure your index.html file is in the root of your project
2. Create a branch called gh-pages
3. git branch gh-pages
4. Push the branch
5. git push origin gh-pages
That's it!
You can now view your live site at http://<username>.github.io/<repository> (just replace username and repository).

