# SwiftCinemaStats

## Project Description 
Your platform for lightning-fast access to comprehensive movie information and insights. Dive into a treasure trove of quick and detailed movie facts, reviews, and cinematic insights, all delivered at lightning speed to enhance your movie-watching experience. Join us on "SwiftCinemaStats" and stay ahead in the world of films.


![1](https://github.com/RaresButuc/SwiftCinemaStats.com/assets/116391767/dbd00c4d-c977-4d12-b615-a6b89ff61094)


### Technologies Used

During SwiftCinemaStats' development, several important technologies were used:

- JavaScript with React: Leveraged for frontend development, JavaScript empowered the creation of dynamic and interactive user interfaces. React, a powerful library, facilitated the construction of engaging UI components, enhancing the user experience;

- Express.js: Serving as the backend framework, Express.js streamlined the development of robust APIs, ensuring smooth communication between the frontend and database;

- MongoDB: As the primary database system, MongoDB efficiently managed data storage and retrieval, offering flexibility in handling diverse data formats and scaling as needed;

- Postman: Instrumental in API testing and validation, Postman ensured the reliability and functionality of the APIs, guaranteeing seamless interactions between different components;

### Challenges

The most important challenges we encountered during the development:

- SDesign using CSS instead of Bootstrap(that we didn't knew at the time of development);

- Canceling some plans for the website becuase the API doesn't work as we expected;

### Future Plans
  
Our future plans for the "SwiftCinemaStats" platform include:

- Rewriting the design in Bootstrap for much more flexibility;

- Finding more APIs to add more functionalities for the website such as showing more options for the title of the movie searched;

## Setup

### Backend Setup:

1. **Prerequisites:**
    - Inside the server folder,the "seed.js",edit the mongoose connect link with your own MongoDB deployment

<img src="https://cdn.discordapp.com/attachments/1080812341693784124/1178439037825056829/image.png?ex=657625e0&is=6563b0e0&hm=065019131b6b91cc684b6b36f05543b7d95346c7e64e2f5ddfad44b8ebdd3f48&" />


2. **Run the Server:**
    - Navigate to the `server` directory in your terminal.
    - Run the command ```npm run devStart```


   ### Frontend Setup:

1. **Prerequisites:**
    - Make sure Node.js is installed and properly configured on your system.

2. **Install Dependencies:**
    - Navigate to the `Frontend` directory in your terminal.
    - Run the following command to install the necessary dependencies:
      ```
           npm install
      ```

3. **Run the Frontend:**
    - Once the dependencies are installed, run the following command to start the frontend:
      ```
         npm start 
      ```



## How to Use 
  
- Home Page

a. On the left,you can see our weekly movie recommendations which you can explore using the 2 arrows on the left and right; 

b. On the right you can search the movie you want to see the stats for,by writing its title,and (if there are multiple movies with this title) the year of release. After finishing, click the "Search" button;

<img src="https://cdn.discordapp.com/attachments/1080812341693784124/1178430588932329524/image.png?ex=65761e02&is=6563a902&hm=f5dbb974fa52c0315d49f6403e23a8e157292f3c867b87f3c63b5225842f3308&" />

c. On the movie page, first of all you can see 2 buttons on top of the page: "Back to Search" and "Add to Watchlist". If you want to remind about this movie for later,press the second button. If any movie is added to the Watchlist,to content of the button will be "Delete from the Watchlist";

<img src="https://cdn.discordapp.com/attachments/1080812341693784124/1178430958148530307/image.png?ex=65761e5a&is=6563a95a&hm=59945ac2d41f91680be774841fd66db03ec9707d8231e2e0dd24a052ec6a851c&" />

<img src="https://cdn.discordapp.com/attachments/1080812341693784124/1178431160922161284/image.png?ex=65761e8a&is=6563a98a&hm=813a2a4b0494072b0ca1878323e644de8bea98e201a2158af7e1a8289c7fb451&" />

d. The stats of the movie includes all the basic important informations about the movie you searched for,including the poster;

<img src="https://cdn.discordapp.com/attachments/1080812341693784124/1178451323486736424/image.png?ex=65763152&is=6563bc52&hm=628282b2ee3b961bd0e9ccc520cecd09782fd269a8f971c5e171f89760351871&" />

 
- Watchlist Page

<img src="https://cdn.discordapp.com/attachments/1080812341693784124/1178432748495585280/image.png?ex=65762005&is=6563ab05&hm=9fff2d9d7f0ef98dbb0d449e7a1ea108267438e68ecb3b01b6923b4f42e2a91e&" />

a. This page includes all the movies that were added to the watchlist,with their name,year of release and poster.
b. Any of these movie can be easily deleted from the watchlist category just by clicking the "Delete" button;

 
- Browsing History Page

<img src="https://cdn.discordapp.com/attachments/1080812341693784124/1178432640102191115/image.png?ex=65761feb&is=6563aaeb&hm=2be3976e263f88ad6301f49b832a5718a72149cc0ea7442dd0895576a7cee07a&" />

a. Every searched movie will appear on this page,with the informations mentioned on the previous page;


## Code contributors

- Mihai Alin Ciobanu : [GitHub Profile](https://github.com/mihaiallin)
- Rares Butuc : [GitHub Profile](https://github.com/RaresButuc)
