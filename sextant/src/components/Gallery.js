import './Gallery.css';

function Gallery(props) {
    return (
      <div class="Card">
        <h3>{props.title}</h3>
        <h4>{props.metricData}</h4>
      </div>
    );
  }
  
  export default Gallery;

  