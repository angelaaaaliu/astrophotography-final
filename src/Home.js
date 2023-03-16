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
    { id: 5, src: pleiadesWeb, name: 'Pleiades Web'}]

    const coordinates = [
        { id: 1, coordinates: 'RA 2h 33m 22s | Dec +61° 26′ 36″', style: {position: "absolute", top: '63.5%', right: '75%' }},
        { id: 2, coordinates: 'RA 0h 42m 44s | Dec +41° 16′ 9″', style: {position: "absolute", top: '31.5%', right: '25%'}},
        { id: 3, coordinates: 'RA 1h 33m 50s | Dec +30° 39′ 37″', style: {position: "absolute", top: '23%', right: '55%'}},
        { id: 4, coordinates: 'RA 5h 35m 17s | Dec -5° 23′ 28″', style: {position: "absolute", top: '79%', right: '55%'}},
        { id: 5, coordinates: 'RA 3h 47m 24s | Dec +24° 7′ 0″', style: {position: "absolute", top: '57%', right: '20%'}}]

    const [photos, setPhotos] = useState(gallery);

    const [coords, setCoords] = useState(coordinates);

    function onLoad(spline) {
        spline.setZoom(.75);
      }
    
    // var newPhotos;

    const handlePlanetClick = (id) => {
        const newPhotos = photos.filter((photo) => photo.id === id)
        setPhotos(newPhotos);
        showPhoto();
    }

    const [showResults, setShowResults] = useState(false)


    const handleExitPhoto = () => {
        setShowResults(false)
        setPhotos(gallery);
        console.log('handlingExitClick')
    }

    const handlePlanetHover = (id) => {
        const newCoords = coords.filter((coord) => coord.id === id)
        // console.log(newCoords.style.p);
        setCoords(newCoords);
        console.log(newCoords);

    }

    const handlePlanetMouseLeave = () => {
        setCoords(coordinates);
    }

    const showPhoto = () => {
        setShowResults(true)
    }

    const [showCoords, setShowCoords] = useState({display: 'none'});

    return ( 
        <div className="home">
            {/* <h1>{ title }</h1>  */}
            <div className="heart-nebula-wrapper" onClick={() => handlePlanetClick(1)}
                onMouseEnter={e => {
                    setShowCoords({display: 'block'});
                    handlePlanetHover(1);
                }}
                onMouseLeave={e => {
                    setShowCoords({display: 'none'})
                    handlePlanetMouseLeave();
                }}
            >
                <div className="planet heart-nebula"></div>
                <div className="planet heart-nebula blur"></div>
                {/* <p style={showCoords}>RA 2h 33m 22s | Dec +61° 26′ 36″</p> */}
            </div>

            <div className="andromeda-wrapper" onClick={() => handlePlanetClick(2)}
                onMouseEnter={e => {
                    setShowCoords({display: 'block'});
                    handlePlanetHover(2);
                }}
                onMouseLeave={e => {
                    setShowCoords({display: 'none'})
                    handlePlanetMouseLeave();
                }}
            >
                <div className="planet andromeda"></div>
                <div className="planet andromeda blur"></div>
            </div>

            <div className="triangulum-wrapper" onClick={() => handlePlanetClick(3)}
                onMouseEnter={e => {
                    setShowCoords({display: 'block'});
                    handlePlanetHover(3);
                }}
                onMouseLeave={e => {
                    setShowCoords({display: 'none'})
                    handlePlanetMouseLeave();
                }}
            >
                <div className="planet triangulum"></div>
                <div className="planet triangulum blur"></div>
            </div>

            <div className="orion-web-wrapper" onClick={() => handlePlanetClick(4)}
                onMouseEnter={e => {
                    setShowCoords({display: 'block'});
                    handlePlanetHover(4);
                }}
                onMouseLeave={e => {
                    setShowCoords({display: 'none'})
                    handlePlanetMouseLeave();
                }}
            >
                <div className="planet orion-web"></div>
                <div className="planet orion-web blur"></div>
            </div>

            <div className="pleiades-web-wrapper" onClick={() => handlePlanetClick(5)}
                onMouseEnter={e => {
                    setShowCoords({display: 'block'});
                    handlePlanetHover(5);
                }}
                onMouseLeave={e => {
                    setShowCoords({display: 'none'})
                    handlePlanetMouseLeave();
                }}
            >
                <div className="planet pleiades-web"></div>
                <div className="planet pleiades-web blur"></div>
            </div>

            { showResults ? <PhotoInfo photos={photos} handleExitPhoto={handleExitPhoto}/> : null}
            <Spline className='spline' scene="https://prod.spline.design/QWnMPUS7qnW8iLSx/scene.splinecode" onLoad={onLoad}/>
            {/* <img src={heartNebula} alt=""></img> */}
            {coords.map(coord => (
                <p className="coordinates" key={coord.id} style={{...showCoords, ...coord.style}}>
                    { coord.coordinates }
                </p>
            ))}
        </div>
     );
}
 
export default Home;