import React, {Component} from 'react';
import CardItem from "./CardItem";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/es/Col";
import Card from "reactstrap/lib/Card";

class Wrap extends Component {

    constructor(props){
        super(props);

        this.state={
            number:0
        }
    }

    render() {

      const increaseNumber = () =>{
      this.setState({number:this.state.number+1})
      };
      const decreaseNUmber = () =>{
        this.setState({number:this.state.number-1})
      };

        return (
             <div>
               <Container>
                    <Row className={"mt-3"}>
                        <Col md={"4"}>
                            <CardItem title={"Hello World"} description={"dxfjdnih dfoghsinxckj dfgfidguhkj xfndiguh"}  color={"success"}/>
                        </Col>
                        <Col md={"4"}>
                            <CardItem title={"Hi Baby"} description={"dofijdovi droger j9ufg d fogj sre9 9etr fdj"} color={"danger"}/>
                        </Col>
                        <Col md={"4"}>
                            <CardItem title={"Welcome!"} color={"primary"}/>
                        </Col>
                        <Col md={{size:4, offset: 4}} >
                            <Card className={"mt-3"}>
                                <div className="card-header">
                                    <h3 className={"text-center"}>{this.state.number}</h3>
                                </div>
                                <div className="card-body d-flex justify-content-between">
                                   <button type={"button"} className={"btn btn-success "} onClick={increaseNumber} >+</button>
                                   <button type={"button"} className={"btn btn-danger"} onClick={decreaseNUmber}>-</button>
                                </div>

                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Wrap;