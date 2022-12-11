import React from 'react'
import PropTypes from 'prop-types';
import './myLabel.css'

function MyLabel({ label, size, allCaps, color, fontColor}) {
    return (
        <span className={`${size} ${allCaps ? 'text-uppercase' : ''} text-${color} label`} 
        style={fontColor && { color: fontColor }}
        >{label}</span>
        )
    }
    
    
    MyLabel.propTypes = {
    /**
    * Controlando las mayúsculas
    */
        allCaps: PropTypes.bool,
    
    /**
    * Es el color que tendra el texto
    */
        color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
            
    /**
    * Es el color customizado que tendra el texto
    */
        fontColor: PropTypes.string,
            
    /**
    * Is this the principal label
    */
        label: PropTypes.string,
    /**
    * Es el tamaño que tendra el texto
    */
        size: PropTypes.oneOf(['normal', 'h1', 'h2', 'h3']),
    

      };

      //Es una buena practica ordenar las props por orden alfabetico
      MyLabel.defaultProps = {
        allCaps: false,
        color: 'primary',
        fontColor: null,
        label: 'Ingrese su label',
        size: 'normal',
      };
export default MyLabel


