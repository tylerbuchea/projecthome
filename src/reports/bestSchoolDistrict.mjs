import { schools } from '../db';
import _ from 'lodash';

const scoreByDistrict = schools.all.reduce((acc, curr, index) => {
  if (!acc[curr.District]) acc[curr.District] = [];
  acc[curr.District].push(curr["Final Score"]);
  return acc;
}, {});

const averageDistrictScore = Object.entries(scoreByDistrict).map(([district, scores]) => {
  const sumOfScores = scores.reduce((a, b) => a + b, 0);
  const averageScore = Math.round(sumOfScores / scores.length);
  return { score: averageScore, district }
});

const orderedList = _.orderBy(averageDistrictScore, 'rank', 'desc');

console.log(orderedList);
