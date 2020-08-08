
instalacion de enzyme es un adapter y se realiza una unica vez
npm install --save enzyme-adapter-react-16 react-test-renderer

//usamos {} para usar el metodo shallow desde enzyme y destructurar con estas llaves
import Footer from './Footer';
//importamos el componente que vamos a testear y es mala practica ponerlos en curlybrackets

//it nos muestra e ira todoo lo que queremos que se testee y luego le metemos un arrow fuction 
//que recibe una funcion dentro de si para testear lo que realmente queremos que suceda
    // wrapper es un nombre simbolico estandarizado y pasamos el componente a testear dentro del metodo shallow
    //find es un metodo de js que busca lo que queremos testear y span como constante es simbolico tambien
//ahora aplicamos metodos de shallow
    //el texto de to be debe ser el mismo que se espera de manera satisfactoria
        //debe ser testeado exactamente fiel a lo que tenemos en el componente y es sencible a mayusculas minusculas etc
