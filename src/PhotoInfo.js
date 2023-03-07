const PhotoInfo = ({photos}) => {
    return ( 
        <div className="photo-info-wrapper">
            {photos.map(photo => (
                <div className="photo-info" key={photo.id}>
                    <img src= { photo.src } alt="" className="photo" />
                    <div className="photo-desc">
                        <div className="photo-name"> { photo.name }</div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default PhotoInfo;