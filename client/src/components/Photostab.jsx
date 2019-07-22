import React from 'react';

class Photostab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      this.props.photos && 
      <div className="photoGridMainContainer">
        <div className="row">
        {this.props.photos.map((photo, idx) => 
          <div key={idx} onClick={() => this.props.showModalState(true, idx)} >
           <div className="photoGridContainer">
            <div className="column">
            <img className="photoGridPhoto" src={photo.imageUrl} alt={photo.comment}/>
            </div>
          </div>
        </div>
        )}
        </div>
      </div>
    );
  }
}

export default Photostab;