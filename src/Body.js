import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from './carousel1.jpg'
import img2 from './carousel2.png'
import img3 from './carousel3.jpg'
import {Link} from 'react-router-dom'
const Body = () => {
    return (
        <div className="home-body">
            {/*carousel section*/}
            <Carousel>
  <Carousel.Item>
    <img
      width={900} height={500}
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Freecom training center</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      width={900} height={500}
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Freecom training center</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      width={900} height={500}
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Freecom training center</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
{/*about us section*/}
<h2>About Us:</h2>
<p><div style={{color:"rgb(107 61 148)",fontSize:"25px"}}>"FTC Freecom training center"</div> is a provider of professional and technical training for individuals and organizations. <br></br>
 Training center delivers  customised  programs for organisations seeking To enfance the capabilites <br></br>
 of their workforce and To improve employée engagement  and rétention.<br></br>
we provider a comprehensive  réponse adoptés To your needs. <br></br>
we provide  a tailire réponse  for each of your employées.<br></br> keeping in mind  their level needs and expectations 
you Will benifit from us <br></br> an en tire team délicates To every aspect of your project. <br></br>
Our  know-how guarantees a quality that offer the most of the best<br></br> service throughout each phase of your project.</p>
<h2>Our Courses</h2>
<p>To see our courses click here:<Link className="Cours" to="/Cours" >Cours</Link></p>
 
        </div>
    )
}

export default Body
