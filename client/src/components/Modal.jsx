import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: this.props.slideIndex
    }
  }

  plusSlides(n) {
    let newSlideIndex = this.state.slideIndex + n;
    newSlideIndex = newSlideIndex < 0 ? this.props.photos.length - 1: newSlideIndex;
    newSlideIndex = newSlideIndex > this.props.photos.length - 1 ? 0: newSlideIndex;
    this.setState({slideIndex: newSlideIndex});
  }

  render() {
  return (
    <div id="modal" className="modal">
      <span className="close cursor"  onClick={() => this.props.showModalState(false)}>&times;</span>
      <div className="modal-content">
        <div >
          <img className="modalPhoto" src={this.props.photos[this.state.slideIndex].imageUrl}></img>
        </div>
      <a className="prev" onClick={this.plusSlides.bind(this, -1)}>&#10094;</a>
      <a className="next" onClick={this.plusSlides.bind(this, 1)}>&#10095;</a>
      </div>
    </div>
    );
  }
}

export default Modal;