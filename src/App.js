import './main.css';

 import Nav from "./components/Nav";
 import JohnDoe from "./components/JohnDoe";
 import MostViewed from "./components/MostViewed";
 import PostJob from "./components/PostJob";
 import Help from "./components/Help";
 import Info from "./components/Info";
 import TopProfile from "./components/TopProfile";
 import Comment from "./components/Comment";
 import Track from "./components/TrackTime";
 import ViewedWeek from "./components/ViewedWeek";
 import Footer from "./components/Footer";


 import { Container } from 'reactstrap';
 import Row from "reactstrap/es/Row";
 import Col from "reactstrap/es/Col";
 import TopJobs from "./components/TopJobs";
 import Spinner from "./components/Spinner";


var numberOne=123;
function App() {
  return (
      <>
          <Nav/>
          <Container>
              <Row className={" mt-5"}>
                  <Col md={"3"} >
                      <JohnDoe/>
                      <MostViewed/>
                      <Help/>
                  </Col>
                  <Col md={"6"}>
                      <PostJob/>
                      <Info/>
                      <TopProfile/>
                      <Info/>
                      <Info/>
                      <Comment/>
                      <Spinner/>
                  </Col>

                  <Col md={"3"}>
                      <Track/>
                      <TopJobs/>
                      <ViewedWeek/>
                      <MostViewed/>
                  </Col>
              </Row>
              <Footer/>
          </Container>
      </>


  );
}


export default App;

