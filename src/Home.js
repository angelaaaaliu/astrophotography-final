import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./component/Cylinder3d";
import PhotoInfo from "./PhotoInfo";
import heartNebula from './img/ic1805_heart_nebula_web.JPEG';
import andromeda from './img/m31_andromeda_web.JPEG'
import triangulum from './img/m33_triangulum_web.JPEG'
import orionWeb from './img/m42_orion_web.JPEG'
import pleiadesWeb from './img/m45_pleiades_web.JPEG'
import Spline from '@splinetool/react-spline';

const Home = () => {
    const title = "Backyard Galaxies";
    const gallery = [{ id: 1, src: heartNebula, name: 'Heart Nebula'},
    { id: 2, src: andromeda, name: 'Andromeda'},
    { id: 3, src: triangulum, name: 'Triangulum'},
    { id: 4, src: orionWeb, name: 'Orion Web'},
    { id: 5, src: pleiadesWeb, name: 'Pleiades Web'}
]
    const [photos, setPhotos] = useState(gallery)

    function onLoad(spline) {
        spline.setZoom(.75);
      }
    
    // var newPhotos;

    const handlePlanetClick = (id) => {
        const newPhotos = photos.filter((photo) => photo.id === id)
        setPhotos(newPhotos);
        console.log(newPhotos);
        showPhoto();
    }

    const [showResults, setShowResults] = useState(false)


    const handleExitPhoto = () => {
        setShowResults(false)
        setPhotos(gallery);
        console.log('handlingExitClick')
    }

    const showPhoto = () => {
        setShowResults(true)
    }

    return ( 
        <div className="home">
            {/* <h1>{ title }</h1>  */}
            <div className="heart-nebula-wrapper" onClick={() => handlePlanetClick(1)}>
                <div className="planet heart-nebula"></div>
                <div className="planet heart-nebula blur"></div>
            </div>

            <div className="andromeda-wrapper" onClick={() => handlePlanetClick(2)}>
                <div className="planet andromeda"></div>
                <div className="planet andromeda blur"></div>
            </div>

            <div className="triangulum-wrapper" onClick={() => handlePlanetClick(3)}>
                <div className="planet triangulum"></div>
                <div className="planet triangulum blur"></div>
            </div>

            <div className="orion-web-wrapper" onClick={() => handlePlanetClick(4)}>
                <div className="planet orion-web"></div>
                <div className="planet orion-web blur"></div>
            </div>

            <div className="pleiades-web-wrapper" onClick={() => handlePlanetClick(5)}>
                <div className="planet pleiades-web"></div>
                <div className="planet pleiades-web blur"></div>
            </div>

            { showResults ? <PhotoInfo photos={photos} handleExitPhoto={handleExitPhoto}/> : null}
            <Spline className='spline' scene="https://prod.spline.design/QWnMPUS7qnW8iLSx/scene.splinecode" onLoad={onLoad}/>
            {/* <img src={heartNebula} alt=""></img> */}
        </div>
     );
}
 
export default Home;