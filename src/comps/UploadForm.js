import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = ({ setModal }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form className="uploadForm" onChange={handleChange} >
      <label className="uploadFile">
        <span className="">+</span>
        <input type="file" />
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{`uploading ${file.name}...`} </div>}
        {file && <ProgressBar file={file} setModal={setModal} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;