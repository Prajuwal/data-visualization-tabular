import React from "react";
import Table from "./Table";
interface CalculateProps {
  allGamma: Array<Array<number>>;
  allFlavonoids: Array<Array<number>>;
}

const Calculate: React.FC<CalculateProps> = ({ allGamma, allFlavonoids }) => {
  const calculateMean = (data: Array<number>): string => {
    const sum = data.reduce((acc, value) => acc + value, 0);
    const mean = sum / data.length;
    return mean.toFixed(3); 
  };

  const calculateMedian = (data: Array<number>): string => {
    const sortedData = data.sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      const median = (sortedData[middle - 1] + sortedData[middle]) / 2;
      return median.toFixed(3); 
    }
    const median = sortedData[middle];
    return median.toFixed(3); 
  };

  const calculateMode = (data: Array<number>): string => {
    const modeMap: Record<number, number> = {};
    data.forEach((value) => {
      if (modeMap[value] === undefined) {
        modeMap[value] = 1;
      } else {
        modeMap[value]++;
      }
    });

    let maxCount = 0;
    let mode: number | null = null;
    for (const key in modeMap) {
      const count = modeMap[key];
      if (count > maxCount) {
        mode = Number(key);
        maxCount = count;
      }
    }

    return mode ? mode.toFixed(3) : "No mode"; 
  };

  const calculateClassStatistics = (
    classData: Array<number>
  ): {
    mean: string;
    median: string;
    mode: string;
  } => {
    const mean = calculateMean(classData);
    const median = calculateMedian(classData);
    const mode = calculateMode(classData);
    return { mean, median, mode };
  };

  const allGammaWithStatistics = allGamma.map((classData, index) => ({
    classNumber: index + 1,
    ...calculateClassStatistics(classData),
  }));

  const allFlavonoidsWithStatistics = allFlavonoids.map((classData, index) => ({
    classNumber: index + 1,
    ...calculateClassStatistics(classData),
  }));

  return (
    <>
      <Table data={allFlavonoidsWithStatistics} title="Flavanoids" />
      <Table data={allGammaWithStatistics} title="Gamma" />
    </>
  );
};

export default Calculate;
