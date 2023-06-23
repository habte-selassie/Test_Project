import React, { Component } from 'react';

class RegisterIntialFormGenerator extends Component {
    state = { 
        data:{},
        errors:{}
     } 
     validator = ()=>{
        const result = Joi.validator(this.state.data,this.schema ,{abortEarly:false})
        if(!result.error) return null

        const errors = {}
        
     }
    render() { 
        return (

        );
    }
}
 
export default RegisterIntialFormGenerator;