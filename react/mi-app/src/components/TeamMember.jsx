import React from 'react';

function TeamMember() {
  return (
    <div className='cont-teamMember'>
      <img 
        className='img-member' 
        src={require('../images/Borja-Montoro.png')}
        alt='Foto de Borja'  
      />
      <div className='cont-text'>
        <p className='name-member'>Borja Montoro Cavero</p>
        <p className='position-member'>Director del programa Experto en Diseño de Personajes</p>
        <p className='description-member'>Diseñador con más de 25 años de experiencia en la industria, trabajó ...</p>
      </div>
    </div>
  );
}

export default TeamMember;