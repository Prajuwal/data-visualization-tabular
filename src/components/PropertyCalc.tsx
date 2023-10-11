
import { data } from "../Wine-Data";
const PropertyCalc = () => {


const classArrays: { [key: string]: Array<{ [key: string]: any }> } = {};


data.forEach((item) => {
  const alcoholClass: string = item["Alcohol"].toString(); 
  if (!classArrays[alcoholClass]) {
    classArrays[alcoholClass] = []; 
  }
  classArrays[alcoholClass].push(item); 
});


console.log(classArrays);



  return <div></div>;
};

export default PropertyCalc