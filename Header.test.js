import React from 'react';
import {shallow} from 'enzyme'; 
import Footer from "./Footer";

it('Debe devolver el número de servicio al cliente', ()=> {
    const wrapper = shallow(<Footer/>);
    const span = wrapper.find('.a1');
    const result = span.text(); //declaramos el resultado esperado
         expect (result).toBe('Home'); 


 })