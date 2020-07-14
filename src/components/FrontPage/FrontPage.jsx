import React, { Component } from 'react';
import Card from "../Card";
import styles from "./FrontPage.module.scss";
import images from '../../data/images';



class FrontPage extends Component {
  render() {
    
    return (
    <>
    <main>
      <section>
        {images.map((image) => (
          <Card imageData={image}/>
        ))}
      </section>
    </main>
    </>
    )
  }
}

export default FrontPage;





























// import React, { Component } from 'react';
// import Card from "../Card";
// import styles from "./FrontPage.module.scss"

// import images from "../../data/images"



// class FrontPage extends Component {
//   render() {
//     console.log("harry")
//     console.log(images)
//     return (
//     <>
//     <main>
//       <section>
//         <Card imagedata={images[0]}/>
//         <Card imagedata={images[1]}/>
//         <Card imagedata={images[2]}/>
//       </section>
//     </main>
//     </>
//     )
//   }
// }

// export default FrontPage;


