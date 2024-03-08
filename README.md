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

![7](https://github.com/RaresButuc/SwiftCinemaStats.com/assets/116391767/d3ddd048-771f-4495-a57c-9beaa705d725)

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

![1](https://github.com/RaresButuc/SwiftCinemaStats.com/assets/116391767/523990f9-b793-466a-993c-c6a877187cee)

c. On the movie page, first of all you can see 2 buttons on top of the page: "Back to Search" and "Add to Watchlist". If you want to remind about this movie for later,press the second button. If any movie is added to the Watchlist,to content of the button will be "Delete from the Watchlist";

![2](https://github.com/RaresButuc/SwiftCinemaStats.com/assets/116391767/81d7067d-af25-44ca-ad70-0ff664a2c4da)

////

d. The stats of the movie includes all the basic important informations about the movie you searched for,including the poster;

![3](https://github.com/RaresButuc/SwiftCinemaStats.com/assets/116391767/a938b035-c4f0-4e25-882f-29941b8b3b6b)

 
- Watchlist Page

![6](https://github.com/RaresButuc/SwiftCinemaStats.com/assets/116391767/43f2a131-22b1-4e1b-934b-2b21a7438691)

a. This page includes all the movies that were added to the watchlist,with their name,year of release and poster.
b. Any of these movie can be easily deleted from the watchlist category just by clicking the "Delete" button;

 
- Browsing History Page

![5](https://github.com/RaresButuc/SwiftCinemaStats.com/assets/116391767/06c7fc5e-0156-41aa-98c1-fa4a099e8798)

a. Every searched movie will appear on this page,with the informations mentioned on the previous page;


## Code contributors

- Mihai Alin Ciobanu : [GitHub Profile](https://github.com/mihaiallin)
- Rares Butuc : [GitHub Profile](https://github.com/RaresButuc)
