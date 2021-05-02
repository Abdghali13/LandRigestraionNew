import React, { Component } from "react";
import LandsContract from "./contracts/Lands.json";
import getWeb3 from "./getWeb3";
import bootstrap from "react-bootstrap";
import parse from 'html-react-parser';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null,asset_html:'' };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = LandsContract.networks[networkId];
      const instance = new web3.eth.Contract(
        LandsContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.displayAssets);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  registerLandd = async (event) => {

    event.preventDefault();
    const { accounts, contract } = this.state;
    await contract.methods.registerLand(
      accounts[0],
      this.state.land_id,
      this.state.from_id,
      this.state.to_id,
      this.state.land_ammount,
    ).send({from: accounts[0]});

    

    console.log("Form submited");
  }
  captureInputChange = async (event) => {
    let name = event.target.name;
    let val = event.target.value;
    console.log("filed name : " + name);
    console.log("filed value : " + val);
    this.setState({
      [name]: val,
    });


  }

  displayAssets = async () => {
    const { accounts, contract } = this.state;
   // const res = await contract.methods.getContractByAddress(accounts[0]).call();
   const counterLenght = await contract.methods.CounterByAddress(accounts[0]).call();
   console.log("The Lenght is : " ); 
   console.log(counterLenght);
  let assetHTML;
   for(let index=1; index<= counterLenght; index++){
    const res = await contract.methods.landsByAddress(accounts[0],index).call();
    console.log("The result is : " ); 
    console.log(res); 
     assetHTML += '<tr><td>' + res[0]+ '</td><td>'
      + res[1] + '</td><td>'
      + res[2] + '</td><td>'
      + res[3] + '</td><td>'
      + res[4] + '</td></tr>';
   
    this.setState({asset_html:assetHTML});
   } 
   

  }
  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Welcom to Land Rigestration App </h1>
              <form onSubmit={this.registerLandd}>
                {/* <label htmlFor="address"> Owner address</label>
                <input className="form-control" name="address" placeholder="Owner Address" onChange={this.captureInputChange}></input> */}

                <label htmlFor="land_id">Land ID</label>
                <input className="form-control" name="land_id" placeholder="Land ID" onChange={this.captureInputChange} ></input>

                <label htmlFor="from_id">From Person ID</label>
                <input className="form-control" name="from_id" placeholder="From Person ID" onChange={this.captureInputChange} ></input>


                <label htmlFor="to_id">To Person ID</label>
                <input className="form-control" name="to_id" placeholder="To Person ID" onChange={this.captureInputChange} ></input>

                <label htmlFor="land_ammount">Land Price ammount</label>
                <input className="form-control" name="land_ammount" placeholder="Land Price" onChange={this.captureInputChange} ></input>


                <input type="submit" className="form-control btn btn-primary" ></input>


              </form>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <table className="table">
                <thead>
                  <tr>
                    <td>Municipal Address</td>
                    <td>Land Id</td>
                    <td>From</td>
                    <td>To</td>
                    <td>Ammount price</td>
                  </tr>
                </thead>
                <tbody>
                  {parse(this.state.asset_html)}
                </tbody>
              </table>
            </div>
          </div>
        </div>




      </div>
    );
  }
}

export default App;
