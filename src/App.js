import React, { useState } from 'react';
import Modal from './comps/Modal';
import PostCard from './comps/PostCard';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  const [modal, setModal] = useState(false)
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Title />
      <UploadForm setSelectedImg={setSelectedImg} setModal={setModal}/>
      <PostCard selectedImg = {selectedImg} setModal={setModal} />
      {modal && <Modal setSelectedImg={setSelectedImg} setModal={setModal}/>}
      
    </div>
  )
}

export default App;
