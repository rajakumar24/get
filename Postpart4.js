import React, { Component } from 'react';
import { InputGroup, FormControl, Form, Col, Button, Image, ButtonGroup } from 'react-bootstrap'
import Upload from '../Images/Images'
import './Postpart4.css'
// import ImageUpload from '../ImageEdit/ImageEdit'

// const Postpart4 = (props) => {
    class Postpart4 extends Component {
        constructor (props) {
            super(props);
         
            this.state = {
              
              tag: "Tag your image"
            };
         
            // Bind
            this.showOffline = this.showOffline.bind(this);
          }
         
          showOffline(e){  
            const id = e.target.id;
            // const {tag} = this.state;
           
            this.setState({ tag : id});
            // console.log(e.target.id)
        //    this.props.offline()    
          };

        //   handleLocationChange () {
         
        //     // Set new location
            
        //   }
     

      render () {
        return (
        <div>
            <div >
                <Upload tag={this.state.tag}/>
                
                </div>
            <div className="postpart7">
               <div className="header1"><h5>Tag each of your Images</h5></div> 
        {/* <p>{this.state.tag}</p> */}
                <div>

                    <div>
                        <Button variant="secondary" onClick={this.showOffline} id='Listing Profile Image'>Listing Profile Image</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Entrance'>Entrance</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Living Room'>Living Room</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Kitchen'>Kitchen</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Utility'>Utility</Button> {' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Bedroom'>Bedroom</Button>{' '}

                        <Button variant="secondary" onClick={this.showOffline} id='Common Balcony'>Common Balcony</Button>
                    </div>
                    <br />
                    <div>
                    <Button variant="secondary" onClick={this.showOffline} id='Store Room'>Store Room</Button>{' '}
                    <Button variant="secondary" onClick={this.showOffline} id='Common Bathroom'>Common Bathroom</Button> {' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Pooja Room'>Pooja Room</Button> {' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Servant Room'>Servant Room</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Staircase'>Staircase</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Passage'>Passage</Button>{' '}
                        
                        <Button variant="secondary" onClick={this.showOffline} id='Lounge'>Lounge</Button>
                    </div>
                    
                    <br />
                    <div>
                        <Button variant="secondary" onClick={this.showOffline} id='Dining Area'>Dining Area</Button> {' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Attached Bathroom'>Attached Bathroom</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Attached Dressing Room'>Attached Dressing Room</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Attached Balcony'>Attached Balcony</Button>{' '}
                        
                        
                        <Button variant="secondary" onClick={this.showOffline} id='Study Room'>Study Room</Button>
                    </div>
                    <br />
                    <div>
                    <Button variant="secondary" onClick={this.showOffline} id='Dry Area'>Dry Area</Button> {' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Bar Area'>Bar Area</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Swimming Pool'>Swimming Pool</Button> {' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Playing Area'>Playing Area</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Theatre'>Theatre</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Lift Lobby'>Lift Lobby</Button>{' '}
                        
                        <Button variant="secondary" onClick={this.showOffline} id='Guest Room'>Guest Room</Button>
                    </div>
                    <br />
                    <div>
                    <Button variant="secondary" onClick={this.showOffline} id='Corridor'>Corridor</Button> {' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Basement'>Basement</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Servant Toilet'>Servant Toilet</Button> {' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Building Exterior View'>Building Exterior View</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Main Door'>Main Door</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Terrace'>Terrace</Button>
                        
                    </div>
                    <br />
                    <div>
                    
                        <Button variant="secondary" onClick={this.showOffline} id='Porch/Verandah'>Porch/Verandah</Button> {' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Garden/Lawn'>Garden/Lawn</Button>{' '}
                        <Button variant="secondary" onClick={this.showOffline} id='Parking/Garage'>Parking/Garage</Button>
                    </div>
                </div>
                
                {/* <button type='button' className="button">Builder</button> */}
            </div>
            {/* <div className="postpart8">
            <ImageUpload /></div> */}
            <div className="postpart9">
                <Form>
            
                <Col xs="auto">
                    <Button type="submit" className="mb-4">
                        Continue
      </Button>
                </Col>
            </Form></div>
        </div>
    );
}}
export default Postpart4;