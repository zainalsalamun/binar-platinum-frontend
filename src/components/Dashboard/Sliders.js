import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1705506985659_0_5.webp"
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1711101821310_3_1.webp"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1705478690552_0_1.webp"
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1710690930634_3_1.webp"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default App;