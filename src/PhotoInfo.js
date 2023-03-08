import x from './img/x.png'
import { useState, useEffect } from "react";
import starDecor from './img/star.png';

const PhotoInfo = ({photos, handleExitPhoto}) => {
    const display = {display: "flex"};
    // const handleExitPhoto = () => {
    //     display = {display: "none"};
    //     console.log('changed display');
    // }

    // const [showResults, setShowResults] = useState(true)
    // const handleExitPhoto = () => setShowResults(false);
    console.log(photos)
    return (
        <div className="photo-info-wrapper" style={display}>
            <div className="photo-decor">
                <img src={ starDecor } alt="" />
                <div className="line"></div>
            </div>
            {photos.map(photo => (
                <div className="photo-info" key={photo.id}>
                    <img src= { photo.src } alt="" className="photo" />
                    <div className="photo-desc">
                        <div className="photo-name"> { photo.name }</div>
                    </div>
                </div>
            ))}
            <button className="exit" onClick={() => handleExitPhoto()}>
                <img src={x} alt="" className="exit-img"/>
            </button>
        </div>
     );
}
 
export default PhotoInfo;