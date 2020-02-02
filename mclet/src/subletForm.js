import React from 'react';
/*id: Number,
    date: Date,
    posn: {
        lat: Number,
        lng: Number,
    },
    window: {
        address: String,
        link: String,
        nRooms: Number,
    },
    posting: {
        owner: String,
        rent: Number,
        email: String,
        Number: String,
        Description: String,
    }*/
export class SubletForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lat : "",
            lng : "",
            addy: "",
            link: "",
            nRooms: "",
            owner: "",
            rent: "",
            email: "",
            numb: "",
            desc: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    
      }
    
    handleClick(){
        let newObject = {
            posn: {
                lat: this.state.lat,
                lng: this.state.lng
            },
            window: {
                address: this.state.addy,
                link: this.state.link,
                nRooms: this.state.nRooms
            },
            posting: {
                owner: this.state.owner,
                rent: this.state.rent,
                email: this.state.email,
                Number: this.state.numb,
                Description: this.state.desc
            }
        }
        const jsonListing = JSON.stringify(newObject);
        this.postData(jsonListing);
        
      }
      
    postData(jsonListing){
        const getData = async () => {
            try {
              const response = await fetch('/api/listings', {
                method: 'POST',
                body: jsonListing
              })
              if(response.ok){
                const jsonResponse = await response.json();
                return jsonResponse;
              }
              throw new Error('Request failed!');
            } catch(error) {
              console.log(error);
            }
        }
    }
    render(){
        return(
            <div className = "form">
                <h1>PEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE3</h1>;
                <form>
                    <label>
                        Enter lat:
                        <input
                            name="lat"
                            type="text"
                            value={this.state.lat}
                            onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label>
                        Enter lng:
                        <input
                            name="lng"
                            type="text"
                            value={this.state.lng}
                            onChange={this.handleInputChange} />
                        </label>
                        <br />

                        <label>
                        Enter address:
                        <input
                            name="addy"
                            type="text"
                            value={this.state.addy}
                            onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label>
                        Enter link:
                        <input
                            name="link"
                            type="text"
                            value={this.state.link}
                            onChange={this.handleInputChange} />
                        </label>
                        <br />

                        <label>
                        Enter # of rooms:
                        <input
                            name="nRooms"
                            type="text"
                            value={this.state.nRooms}
                            onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label>
                        Enter owner:
                        <input
                            name="owner"
                            type="text"
                            value={this.state.owner}
                            onChange={this.handleInputChange} />
                        </label>
                        <br />

                        <label>
                        Enter rent:
                        <input
                            name="rent"
                            type="text"
                            value={this.state.rent}
                            onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label>
                        Enter email:
                        <input
                            name="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInputChange} />
                        </label>
                        <br />

                        <label>
                        Enter number:
                        <input
                            name="numb"
                            type="text"
                            value={this.state.numb}
                            onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label>
                        Enter description:
                        <input
                            name="desc"
                            type="text"
                            size = "600"
                            value={this.state.desc}
                            onChange={this.handleInputChange} />
                        </label>
                        
                </form>
                <button onClick = {this.handleClick}>submit</button>
            </div>
        ) 
    }
}