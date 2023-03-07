import x from './img/x.png'
import { useState, useEffect } from "react";

const PhotoInfo = ({photos}) => {
    const display = {display: "flex"};
    // const handleExitPhoto = () => {
    //     display = {display: "none"};
    //     console.log('changed display');
    // }

    const [showResults, setShowResults] = useState(true)
    const handleExitPhoto = () => setShowResults(false);

    return (
        <div className="component-container">
            { showResults ? <div className="photo-info-wrapper" style={display}>
            {photos.map(photo => (
                <div className="photo-info" key={photo.id}>
                    <img src= { photo.src } alt="" className="photo" />
                    <div className="photo-desc">
                        <div className="photo-name"> { photo.name }</div>
                    </div>
                </div>
            ))}
            <button className="exit" onClick={handleExitPhoto}>
                <img src={x} alt="" className="exit-img"/>
            </button>
        </div> : null}
        </div>

     );
}
 
export default PhotoInfo;