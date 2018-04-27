// ./react-redux-client/src/components/Car.js
import React from 'react';

export default class Car extends React.Component {
  componentDidMount(){
    this.props.mappedfetchCarById(this.props.params.id);
  }

  render(){
    const carState = this.props.mappedCarState;
    return(
      <div className="carDetail">
       <h2>Car Detail</h2>
         {!carState.car && carState.isFetching &&
           <div>
             <p>Loading car....</p>
           </div>
         }
       {carState.car && !carState.isFetching &&
         <div>
           <h3>{carState.car.carNumber}</h3>
           <p>{carState.car.carOwner}</p>
         </div>
       }
      </div>
    );
  }
}
