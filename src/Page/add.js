import React, { Component } from 'react'
import swal from 'sweetalert'
import Axios from 'axios'

export default class add extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            number: ""
        };
        this.getname = this.getname.bind(this)
        this.getnumber = this.getnumber.bind(this)
        this.submit = this.submit.bind(this)
    }
    getname(e) {
        this.setState({
            name: e.target.value
        })
    }
    getnumber(e) {
        this.setState({
            number: e.target.value
        })


    }
    submit() {
        // var i=window.open(`http://localhost:3000/add/${this.state.name}/${this.state.number}`)
        // setTimeout(function(){

        //     i.close();

        //     swal("Contact Has been Saved").then(()=>{

        //     })
        // }, 1000);
        Axios.post(`${window.url}/add/${this.state.name}/${this.state.number}`)
            .then(() => {
                console.log("Added")
            })
            .catch(err => {
                console.log(err)
            })
        swal("Contact Has been Saved").then(() => {

        })
        this.setState({
            name: '',
            number: ''
        })

    }
    render() {
        return (
            <div class='container'>
                <br />
                <center><h3 class='text-primary'> Add Contact</h3></center>
                <br />
                <form >
                    <div class="form-group">
                        <label for="exampleInputEmail1" class='text-primary'    >Name</label>
                        <input type="text" class="form-control" id="i" value={this.state.name} onChange={this.getname} required />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class='text-primary'>Number</label>
                        <input type="number" class="form-control" id='n' value={this.state.number} onChange={this.getnumber} required />
                    </div>


                </form>
                <button type="button" class="btn btn-primary " onClick={this.submit}  >Submit</button>
            </div>
        )
    }
}
