import React from "react";
import {SiGithub,SiFrontendmentor,SiCodepen}  from 'react-icons/si'
const CreateList = (props) =>{

    const keys = props.reference
  
    return <>
        <li>
                <a target="_blank" href={keys.github}>
                    <SiGithub/>
                </a>
        </li>
        <li>
                <a target="_blank" href={keys.frontendmentor}>
                    <SiFrontendmentor/>
                </a>
        </li>
        <li>
                <a target="_blank" href={keys.codepen}>
                    <SiCodepen/>
                </a>
        </li>
    </>
}

export default CreateList