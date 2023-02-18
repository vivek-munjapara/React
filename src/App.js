import logo from './logo.svg';
import './App.css';
// import Ex_01_usestart from './All_Task/dailytask/Ex_01_usestart'
// import Displaydata from './All_Task/ex_01_usestate/Displaydata'
// import Card from './All_Task/ex_02_readmore/Card'
// import Slider from './All_Task/ex_03_slider/Slider'
// import DisplayValue from './All_Task/ex_04_CRUD/DisplayValue'
// import Reg from './All_Task/ex_05_formik_form/Reg'
// import RegFormikMaterial from './All_Task/ex_05_formik_form/RegFormikMaterial';
// import RegWithDesignuseFormik from './All_Task/ex_05_formik_form/RegWithDesignuseFormik';
// import FormikDynamicForm from './All_Task/ex_06_dynamic_form/FormikDynamicForm'
// import NormalDynamicForm from './All_Task/ex_06_dynamic_form/NormalDynamicForm'
import EmpReg from './All_Task/ex_07_EmpForm/EmpReg';
// import File1 from './All_Task/Props/File1';
// import Home from './All_Task/ex_08_Add_to_cart/Home';
import { Provider } from 'react-redux';
import store from './All_Task/Redux/store/store';
import Counter from './All_Task/ex_09_redux_counter/Counter';
import ProductCard from './All_Task/ex_09_redux_counter/ProductCard';

function App() {
  return (
    // <Ex_01_usestart/>
    // <Displaydata/>
    // <Card/>
    // <Slider/>
    // <DisplayValue/>
    // <Reg />
    // <RegFormikMaterial/>
    // <RegWithDesignuseFormik />
    // <FormikDynamicForm />
    // <NormalDynamicForm/>
    // <EmpReg />
    // <File1/>
    // <Home/>

    <Provider store={store} >
      <Counter />
      <ProductCard />
    </Provider>


  );
}

export default App;
