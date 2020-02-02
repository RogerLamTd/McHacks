import React from 'react';

const sendData = async (data) => {
    console.log(data);
    try {
      const response = await fetch('/api/listings', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        body: data
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
export class SubletForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addy: "",
            nRooms: "",
            owner: "",
            rent: "",
            email: "",
            phone: "",
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
            window: {
                address: this.state.addy,
                nRooms: this.state.nRooms
            },
            posting: {
                owner: this.state.owner,
                rent: this.state.rent,
                email: this.state.email,
                Phone: this.state.phone,
                Description: this.state.desc
            }
        }
        console.log(newObject);
        const jsonListing = JSON.stringify(newObject);
        sendData(jsonListing); 
    }
    render(){
        return(
            <div className = "form">
                <h1>Sublet Form</h1>;
                <form>
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
                    Enter phone number:
                    <input
                        name="phone"
                        type="text"
                        value={this.state.phone}
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