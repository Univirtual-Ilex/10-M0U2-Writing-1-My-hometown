
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonModal_styles'

// Componente base
const ButtonModal_base = ({ inactivo , children, ...props}) => {
    const isActive = () => {
        if (inactivo){
            return 'inactivo'
        }

    }
    return (
        <div { ...props }>
            <button className={ `btn-clean ${ isActive() } ` }>
                { children }
            </button>
        </div>
     

    )
}
const ButtonModal = styled(ButtonModal_base)`${ styles }`
export default ButtonModal
