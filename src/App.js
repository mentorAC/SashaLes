import logo from './logo.svg';
import './App.css';
import { RedCub } from './RedCub/RedCub';
import { MyButton } from './RedCub/button/button';
function App() {

  let text = "hello react";
  return (
   <div className='container'>
    {/* <RedCub></RedCub> */}
    <RedCub text="my text 1" count="4" second_text="hi"></RedCub>
    <RedCub text="qwert" second_text="hi!"></RedCub>
    <RedCub text="my text 3"></RedCub>
    <MyButton text="click"></MyButton>
    <MyButton text="dont click"></MyButton>
    <MyButton text="click 2"></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
   </div>
    ) ;
}

export default App;
