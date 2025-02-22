import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import Modal from './Modal';
import './Popup.css';

const Popup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      </header>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Resizable & Draggable Modal</h2>
        <p>
          이 모달은 크기와 위치를 조정할 수 있습니다. 원하는 대로 드래그하거나
          모서리를 잡고 크기를 조절하세요.
        </p>
      </Modal>
    </div>
  );
};

export default Popup;
