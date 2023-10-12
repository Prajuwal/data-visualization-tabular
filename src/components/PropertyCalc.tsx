//each value for which mode,mean and median is to be calculated, is converted in array of arrays format, and then sent as 
// props to calculate component

import { data } from "../Wine-Data";
import Calculate from "./Calculate";
const PropertyCalc = () => {
  // class wise segregated data, kept it in the classArraysObj object, each array inside classArraysObj object represent one class
  const classArraysObj: { [key: string]: Array<{ [key: string]: any }> } = {};

  data.forEach((item) => {
    const alcoholClass: string = item["Alcohol"].toString();
    if (!classArraysObj[alcoholClass]) {
      classArraysObj[alcoholClass] = [];
    }
    classArraysObj[alcoholClass].push(item);
  });

  // class wise data for Gamma and Flavonoids is extracted

  const allGamma: number[][] = [];
  const allFlavonoids: number[][] = [];

  for (const key in classArraysObj) {
    if (Array.isArray(classArraysObj[key])) {
      const currentArray = classArraysObj[key];
      const flavonoids = currentArray
        .filter((item) => item.Flavanoids !== undefined)
        .map((item) => item.Flavanoids);
      allFlavonoids.push(flavonoids);

      const results = currentArray
        .filter(
          (item) =>
            item.Ash !== undefined &&
            item.Hue !== undefined &&
            item.Magnesium !== undefined
        )
        .map((item) => (item.Ash * item.Hue) / item.Magnesium);
      allGamma.push(results);
    }
  }

  //allGama and allFlavonoids are array of arrays, each array in allGamma represents values of one class, similarly for allFlavonoids
  return <Calculate allGamma={allGamma} allFlavonoids={allFlavonoids} />;
};

export default PropertyCalc;
