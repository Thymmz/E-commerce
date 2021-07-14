import React, { Component } from 'react'

export default class Default extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-10 mx-auto text-center text-capitalize text-uppercase pt-5">
                  <div className="display-3">Error 404</div>
                  <h1>Page {this.props.location.pathname} not found</h1>
               </div>
            </div>
         </div>
      )
   }
}
