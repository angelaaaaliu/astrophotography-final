import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./component/Cylinder3d";
import PhotoInfo from "./PhotoInfo";
import heartNebula from './img/ic1805_heart_nebula_web.JPEG';
import Spline from '@splinetool/react-spline';

const Home = () => {
    const title = "Backyard Galaxies";
    const [photos, setPhotos] = useState([
        { id: 1, src: heartNebula, name: 'Heart Nebula'},
        // { id: 2, src: './img/m31_andromeda_web', name: 'Andromeda'},
        // { id: 3, src: './img/m33_triangulum_web', name: 'Triangulum'},
        // { id: 4, src: './img/m33_triangulum_web', name: 'Triangulum'},
        // { id: 5, src: './img/m33_triangulum_web', name: 'Triangulum'}
    ])

    // const handleNebulaClick = (id) = {
    //     const newPhotos = photos.filter((photo) => photo.id)
    //     setPhotos(newPhotos);
    // }

    return ( 
        <div className="home">
            {/* <h1>{ title }</h1>  */}
            <div className="planet heart-nebula"></div>
            <div className="planet heart-nebula blur"></div>
            <PhotoInfo photos={photos}/>
            <Spline className='spline' scene="https://prod.spline.design/QWnMPUS7qnW8iLSx/scene.splinecode" />
            {/* <img src={heartNebula} alt=""></img> */}
        </div>
     );
}
 
export default Home;