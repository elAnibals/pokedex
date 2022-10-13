import {Col, Row, Button} from "react-bootstrap";
import pokedexImg from "../assets/pokedex1.png"
import "../styles/Header.css"

const header = (props) =>{
    console.log(props);
    //const{onLeftClick, onRightClick, page, totalPages }=props;
    return(
        <header>
            <Row>
                <Col>
                    <img className="pokedex-img" src={pokedexImg} alt="/"/>
                </Col>
                <Col className="">
                    <div className="buttons-next-prev">
                        <Button className="rounded-circle" id="prev" onClick={props.onLeftClick}>&lt;</Button>
                        <p className="page-num"> &nbsp;{props.page+1}/{props.totalPages}&nbsp;</p>
                        <Button className="rounded-circle" id="next" onClick={props.onRightClick}>&gt;</Button>
                    </div>
                </Col>
            </Row>
        </header> 
    );
}

export default header;