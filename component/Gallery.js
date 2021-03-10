const Project = () => {
  return (
    <div className="gallery" id="gallery">
      <h1>Gallery</h1>
      <div className="container_gallery">
        <img src="/gallery/web_1.png" alt="gallery" className="jumbo" />
        <div className="thumbnail">
          <img src="/gallery/code_2.png" alt="thumb" className="thumb" />
          <img src="/gallery/ux_2.png" alt="thumb" className="thumb" />
          <img src="/gallery/web_3.png" alt="thumb" className="thumb" />
          <img src="/gallery/ux_3.png" alt="thumb" className="thumb" />
          <img src="/gallery/web_4.png" alt="thumb" className="thumb" />
          <img src="/gallery/web_1.png" alt="thumb" className="thumb" />
          <img src="/gallery/web_2.png" alt="thumb" className="thumb" />
          <img src="/gallery/ux_1.png" alt="thumb" className="thumb" />
          <img src="/gallery/code_1.png" alt="thumb" className="thumb" />
        </div>
      </div>
    </div>
  );
};
export default Project;
