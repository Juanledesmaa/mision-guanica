import React from 'react';
import colaboradoresImage from '../../img/colaboradores.jpg';
import './Colaboradores.scss';

const Colaboradores = () => (
  <div className="colaboradores">
    <img 
      src={colaboradoresImage} 
      alt="Colaboradores" 
      className="colaboradores-image"
    />
  </div>
);

export default Colaboradores;