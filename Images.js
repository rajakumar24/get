import React, { Component } from 'react'
import { Jumbotron, Image, Container, Row, Col } from 'react-bootstrap'
import './Images.css'
// import Postpart4 from '../Postpart4/Postpart4'

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: [],
      id: [],
      tagState:  []
    }
    this.handleChange = this.handleChange.bind(this)
  }

// componentWillMount () {
//   const {id} = this.state
//   id.push(this.props.tag)
// }

  handleChange(event) {

    const { file, id } = this.state;
    file.push(URL.createObjectURL(event.target.files[0]))
    id.push(this.props.tag)
    // console.log("file", event.target.files[0].name);
    this.setState({
      file,
      id
    })
  }

  tagChange(index) {


  const {tagState} = this.state;
  //     tagState.id.push(index);
  //     tagState.name.push(this.state.id[index])
    
   
  tagState.id = index;
  tagState.name = this.state.id[index];
  tagState.push(tagState);
  this.setState({
    tagState
  })
  console.log("hi")
  }

  render() {

    const { file, id, tagState } = this.state;
    
    console.log(tagState)
    return (
      
            <div className="imgInput1">

        {/* <div className="imgInput"><Image src={this.state.file} fluid placeholder="Hi" /></div> */}


        <Container>
          <Row>
            <Col><div className="imgInput2">
              Drop images Here
          <input type="file" className="imgInput3" onChange={this.handleChange} placeholder="Click to upload" /></div></Col>
            <Col>{
              file.length && file.map((list, index) => {
                // const id1 = this.state.id;
                // console.log("list", id1);
                return (
                   
                  <div className="container" key={index}>
                    <img src={list} alt=""   data-id={id[index]}  onClick={() => this.tagChange(index)} style={{ width: "100%" }} />
                    {/* <button onClick={() => this.tagChange(id1)}>X</button> */}

                    <div class="text-block">

                      <p className="parag">{this.props.tag}</p>
                    </div>
                  </div>
                );

              })
            }</Col>
          </Row>

        </Container>
        {/* <img src={this.state.file}/> */}
      </div>
    );
  }
}
export default Upload


