# HEARDIT - Find new music from Reddit

## Contents

- [Introduction](#intro)
- [Languages/Frameworks/Libraries Used](#languages)
- [Screenshots](#screenshots)

## <a id="intro"></a>Introduction

This Web App was made in the context of a very loose Codecademy project as part of the **Full-Stack Engineer** program. The task was to make a Reddit client that took data from JSON files, displayed the data as posts and allowed users to search through the collected data and see comments to the posts.

My take on this idea was to make a Web App that allowed users to choose from a number of music-related subreddits and listen to the music posted there. It became clear quite quickly that the best way to do this would be to display YouTube links from Reddit, as this would allow users to click 'play' and immediately hear the music they wanted to hear, rather than using something like Spotify, which requires users to log in and might therefore be a slight annoyance (or a bigger annoyance if the user doesn't have an account). Thus, the JSON data from Reddit are filtered to take only posts that include a YouTube link, and the embed-id from the post's data is used to display the YouTube video.

## <a id="languages"></a>Languages/Frameworks/Libraries Used

- HTML
- CSS
- Javascript
- React (project initialised with _create-react-app_)
- React-Router
- React-Redux
- Redux Toolkit
- React Markdown

## <a id="screenshots"></a>Screenshots

### Full-Screen (Monitor)

![screenshot 1](./readme-images/fullscreen.png)

### Mobile

![screenshot 2](./readme-images/mobile1.png)
![screenshot 3](./readme-images/mobile2.png)
