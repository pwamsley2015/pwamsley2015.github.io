import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-animated-slider/build/horizontal.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ReactDOM from "react-dom";
import AboutSection from "./components/AboutSection";
import ProjectPage from "./components/ProjectPage";
import SideBarContent from "./components/SideBarContent";
import ProjectPost from "./components/ProjectPost";
import "./index.css";
import FridayImg from "./images/friday.png";
import MajMinImg from "./images/majmin.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Scroll from "react-scroll";
import FridayBlogImg from "./images/friday_chat.png";
import MapToGraphImg from "./images/mapToGraph.png";

var FRIDAY_POST = `
# Need some help?
There are a few projects that every programmer has to tackle at some point. Of course, the most famous is “Hello, World!” Probably the second most common is some type of game: TicTacToe, Sudoku, Pong, maybe Chess or a shooter. We all love automation; how many python scripts does it take to never manually change a light bulb again? We also love data and optimization. When you combine automation, data collection, and task optimization, what you get is a personal assistant chatbot (the cultural ubiquity of Iron Man, Siri and Alexa probably play a role as well).  I, unoriginally, named mine Friday. 

Philosophical musings about developers aside, I wanted to create a personal assistant chatbot for a few main reasons. Assistants like Siri or Alexa are able to satisfy a much more diverse space of requests than anything an individual could code, but because they’re designed to be so general, they can’t help with very particular, individualized tasks. Until Apple files a patent for mind-reading, there will always be room for personalized automation. I also was interested in dynamic IO layers. Dictation can be awesome, but there are times when typing is more appropriate. Sometimes I’m on my computer, sometimes I’m on my phone, sometimes I’m mostly off the grid, but I’m using an IoT device. I wanted access to Friday no matter the case. Lastly, I think it’s important to always learn something new when working on a personal project. In order to implement many of the IO layer components, I would have to leverage 3rd party software, such as Twilio’s REST APIs, that I had never used before. I wanted to get practice working with a system that uses many web services. 

Personal assistant bots are extremely fun projects to work on. You pick something in your life that could benefit from automation and data collection, and you turn a tedious task into “Hey Friday, do that thing.” As a [nerdy powerlifter](https://pwamsley2015.github.com/training), I have an *epic* training log, filled with workout details, and I use that data to inform decisions about future training. I used to manually log everything in the notes app, and then transfer to a spreadsheet when I got home. Now, Friday guides me through my workouts, and logs that precious data to a Google Firebase database. This saves me time doing data entry, but Friday also keeps me honest(ish) with rest times, tells me how much weight to use, and provides data analysis when it’s time to create a new training plan.
 
![img](${FridayBlogImg})

Friday spends most of her time in one of two threads. The main thread is used to listen for inputs. When Friday receives an input, that input is first parsed for ChatContext, which is the general context of what the user is requesting. For example, if I’m talking about my training, Friday needs access to different data and procedures than if I was asking about my schedule. Each ChatContext has a state machine that defines what requests are appropriate and when, and how to respond to them; as well as a Regex to Action map, which is used to parse these requests to create FridayAction objects. As you may have guessed, these objects encapsulate an action that Friday can take. Each action has an execute() method, which is responsible for satisfying the user’s request. When this method terminates, it returns a FridayOutput object, which is sent to the output layer as a response. 

The other significant thread manages Friday’s clock, which maintains a PriorityQueue of ScheduledFridayActions. This allows for FridayActions to be executed at some time other than in direct response to a user request. 

I have a long list of ideas for Friday. I’d like to add a component of NLP to allow for more flexible messages. I’d like to add commands for around-the-house hardware automation. Maybe I can over-engineer a solution to my light bulb question. Above all else, Friday keeps me hacking, and that’s why I emphatically recommend to any developer that hasn’t already—make your own personalized, personal assistant.

`;

var MM_POST = `
# Wholesome gerrymandering 

Our democracy is complicated. It was bootstrapped together by a handful of twenty-something year olds who were living in a pre-industrialized world. It then underwent many growing pains: civil and foreign wars, rights movements, industrialization, the information revolution, et cetera ad infinitum. Unfortunately, many of America’s solutions simply haven’t scaled. One such example is found in our congressional districting process. Historically, human intuition was the primary tool used to draw district maps. A group of people getting together and “hashing things out” may have worked when all parties were acting in good faith, their work was focused to a small scope, and the United States had a voting population in the tens of thousands. But the erosion of these conditions, along with an intense system of political and economic selective pressures, lead to the emergence of [Gerrymandering](https://en.wikipedia.org/wiki/Gerrymandering). 

In a nutshell, gerrymandering is the intentional manipulation of congressional district boundaries so as to provide advantage to a particular party or class. The GOP leveraged census data from 2010 to have an absolutely crushing 2012 election cycle. Whenever gerrymandering is mentioned, it’s almost always in the context of this style of bad-faith acting. However, the mechanics of gerrymandering can be leveraged in good-faith to generate a more representative congressional district mapping. This is accomplished by trying to maximise the number of so called [“Majority-Minority” districts](https://en.wikipedia.org/wiki/Majority_minority). In other words, district lines are drawn with the intent that minority voting blocs reach a majority in as many districts as possible. Enter my undergraduate capstone project: a full-stack web application which draws congressional districting lines to maximise the number of Majority-Minority districts.

This application was developed as a group project with three other students. I was the lead backend developer, and my core responsibility was the implementation of the district drawing algorithm. Unfortunately, it’s not possible to fix democracy with a few lines of code. Naturally, there were several challenges that needed to be overcome in order to deliver our project. We ultimately succeeded through well-engineered solutions which carefully considered the many compromises that emerge from working on a real-life problem.

The first significant technical challenge to overcome was the management of the algorithm. We were operating on significant chunks of data (most notably, the geometry of each voting precinct), so efficiency was important. The system also needed to be able to handle interrupts or pauses, which could happen as a result of poor internet connectivity or a user manipulating constraints. Moreover, the algorithm operated in two very distinct phases (more on that later), so the potential for messy, unorganized code was looming. This motivated me to create an Algorithm abstraction that was fundamentally built with modularity and clean handling of interrupts in mind. Each Algorithm object is composed of AlgorithmSteps. Algorithms are themselves AlgorithmSteps, so they can easily be nested. This all comes together to allow for easy defining, tweaking, and testing of all the different steps of the algorithm. 

As fun and useful as higher-order thinking can be, at a certain point, you have to tackle the actual problem at hand. I mentioned previously that the algorithm ran in two stages. Welcome to part 1: generating an initial set of voting districts. Each voting district is composed of a group of adjacent voting precincts. Therefore, we can translate the congressional district drawing problem into a graph partitioning problem. 

![img](${MapToGraphImg})

Voting precincts are represented as nodes, and two nodes share a vertex if their precincts are geographically adjacent. We can then combine nodes into clusters, which eventually become the districts. Each iteration of the algorithm began with a set of nodes and vertices. Vertices were assigned a weight, called joinability, which was a measure of how favorable the joining of these nodes would be. For instance, suppose A and B are nodes with equal voting population, where 25% of voters in A and 80% of voters in B belong to a particular minority voting bloc. It’s not good to have too high or too low a percentage in a node. If it’s too low, the voting bloc’s wishes are overpowered by the majority. If it’s too high, the voting bloc will win that district, but they lose power in other districts. So in order to maximise the number of Majority-Minority districts, the algorithm aims to create districts where minority voting blocs constitute a slight majority. 
So, both A and B start out as “bad” nodes, but combining them creates a node with a 52.5% minority bloc, which is excellent, so the vertex between A and B would have a high joinability value. Joinability was calculated by analyzing the demographic, geographical, and voting data of each precinct. Then each precinct is clustered with it’s most joinable neighbor, and then this process was repeated until the appropriate number of districts were created. 

The graph partitioning algorithm was very effective at creating Majority-Minority districts, but this is where we ran into those pesky real-life issues. Since the algorithm was optimizing for such a particular metric, it wasn’t considering any of the very human components. It would create districts that had no concern for compactness or shape. Were these districts to be presented to a politician or a judge, they would be immediately thrown out. To fix this, the program used Simulated Annealing to further optimize, this time taking into account many factors instead of just looking for Majority-Minority districts. In particular, the current state of the districts was evaluated with an objective function which took into account majority-minority dynamics, population distribution, and district compactness, contiguousness and geometry. Potential precinct relocations were considered, and assessed by how these moves changed the objective function. This strategy proved to be quite effective, as this process resulted in well-formed districts that satisfied the primary objective of Majority-Minority maximization, and the secondary objectives of nice, intuitive-looking districts. These districts could get judicial approval. 

Building this application was a wonderful learning experience. It’s certainly rewarding to reflect on the easy wins; it was my first time working with Spring and Hibernate, and having those tools in my development toolkit has clear advantages. What I find even more rewarding, however, are the less tangible positives. For instance, since I was the lead backend developer, when I had to ask teammates for help, I had to first explain the context of my question. Doing so tested my own understanding of my code, which of course aided in finding the solution. I was also often privileged to play the other role—having to learn new technologies just to be able to offer help to my teammates. Through doing so, I gained a deep appreciation for the value in understanding many parts of a system, and how different subsystems interact. The other huge takeaway I gleaned was appreciation for the nuance of working in real-world problem spaces. Business, legal, or human ideals complexify systems. I found that taking the time to fully consider these conditions, and then engineering a solution with appropriate modularity and abstraction, pays dividends tenfold.
`;

class HomeScreen extends React.Component {
  render() {
    return (
      <div
        className="home_screen"
        style={{
          display: "flex",
          background: "#303C55",
          color: "#e6f1ff",
        }}
      >
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand>
            <h1>Patrick Wamsley</h1>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link
              href="#project_page"
              onSelect={() => {
                let projectsPage = document.querySelector("#project_page");
                projectsPage.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                projectsPage.scrollTop -= 100;
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link href="resume.pdf">Resume PDF</Nav.Link>
          </Nav>
        </Navbar>

        <div style={{ width: "100%" }}>
          <SideBarContent className="sidebar" />
          <div className="main">
            <AboutSection />
            <div id="project_page" className="scroll-with-offset">
              <ProjectPage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const FridaySidebarContent = {
  name: "Friday",
  img: FridayImg,
  code: "https://github.com/pwamsley2015/public_friday",
  about:
    "My personal assistant chatbot which automates tasks, logs data, manages my schedule, and keeps me hacking. Dynamic IO over the web and local intranet via texts, shells and GUI widgets.",
  roles: ["Everything"],
  built_with: [
    "Twilio Messaging API",
    "Google Firebase",
    "Java",
    "Python",
    "Spark",
    "JavaFX",
  ],
  is_link: false,
  has_post: true,
  blog: FRIDAY_POST,
  route: "friday",
};

const mmContent = {
  name: "Congressional Redistricting",
  img: MajMinImg,
  code: "https://github.com/pwamsley2015/congressional_redistricting",
  about:
    "Web application which generates congressional redistricting lines, built to maximize the number of majority-miniority distrcts and combat gerrymandering.",
  roles: [
    "Primary Backend Developer",
    "Designed and implemented AlogrithmStep framework to modularize Alogrithm",
    "Implemented Graph Partioning Algorithm to generate majority-miniority distrcts",
  ],
  built_with: ["Angular", "TypeScript", "Java", "Hibernate"],
  is_link: false,
  has_post: true,
  blog: MM_POST,
  route: "congressionalredistricting",
};

const fridayPage = () => {
  return (
    <ProjectPost
      name={FridaySidebarContent.name}
      img={FridaySidebarContent.img}
      code={FridaySidebarContent.code}
      about={FridaySidebarContent.about}
      roles={FridaySidebarContent.roles}
      built_with={FridaySidebarContent.built_with}
      is_link={FridaySidebarContent.is_link}
      blog={FridaySidebarContent.blog}
      route={FridaySidebarContent.route}
    />
  );
};

const gerrymanderingPage = () => {
  return (
    <ProjectPost
      name={mmContent.name}
      img={mmContent.img}
      code={mmContent.code}
      about={mmContent.about}
      roles={mmContent.roles}
      built_with={mmContent.built_with}
      is_link={mmContent.is_link}
      blog={mmContent.blog}
      route={mmContent.route}
    />
  );
};

class Site extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route
            exact
            path={`/${FridaySidebarContent.route}`}
            component={fridayPage}
          />
          <Route
            exact
            path={`/${mmContent.route}`}
            component={gerrymanderingPage}
          />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<Site />, document.getElementById("root"));
