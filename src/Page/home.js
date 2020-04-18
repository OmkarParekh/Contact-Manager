import React, { Component } from 'react'
import Axios from 'axios'
import swal from 'sweetalert'
export default class home extends Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
        this.delete=this.delete.bind(this)
    }
    componentDidMount() {
      
        Axios.get('https://contactmac.herokuapp.com/display')
            .then(data => {
                this.setState({
                    data: data.data
                })
                console.log(this.state.data)
            }
            )
            .catch(err =>
                console.log(err))
    }
    delete(id){
        console.log(id.target.value)
        // var i=window.open(`https://contactmac.herokuapp.com/delete/${id.target.value}`)
        // setTimeout(function(){
        //     i.close();
        //     swal("Contact has been Deleted")
        //     .then(() => {
        //     swal(`Refresh The Page`);
        //     });
        // }, 1000);
        Axios.post(`https://contactmac.herokuapp.com/delete/${id.target.value}`)
        .then(()=>{
            console.log("Deleted")
        })
        swal("Contact has been Deleted")
            .then(() => {
            swal(`Refresh The Page`);
            });
    }
    render() {
        const { data } = this.state
        return (
            <div class='container'>
                <br/>
                <h1 class="text-primary ">Contact List</h1> 
              <br/>

                <div>
                    {
                        Object.values(data).reverse().map(({ Name, Number,date ,_id}) => 
                <div class='container'>
                <div class="card">
                <div class="card-header bg-primary text-white">
                  {date}
                </div>
                <div class="card-body">
                  <h5 class="card-title"><span class="text-primary">Name</span> : <span class="text-primary">{Name}</span></h5>
                  <p class="card-text">Number : {Number}</p>
                  <button type="button" class="btn btn-primary" value={_id}   onClick={this.delete}>Delete</button>
                </div>
                </div>
                <br/>
                </div>
                
                        
                        )
                    }

                </div>
            </div>
        )
    }
}
