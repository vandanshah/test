import React,{Component} from 'react';
import {Card,CardTitle,CardBody,CardImg,CardText,CardImgOverlay,CardLink} from 'reactstrap';

class Product extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                <div className="offset-md-3 col-12 col-md-6">
                    <a href={this.props.ps.data.click_url}>
                <Card style={{border:"solid"}}>
                    <CardBody>
                        <CardImgOverlay>
                            <CardTitle>{this.props.ps.data.name}</CardTitle>
                        </CardImgOverlay>
                        <CardImg  src={this.props.ps.data.image_url} alt={this.props.ps.data.name}></CardImg>
                        <CardText>Click URL: visit product page</CardText>
                    </CardBody>
                </Card>
                </a>
                </div>
                     
            );
    }
}

export default Product;