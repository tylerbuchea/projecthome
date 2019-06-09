import elementary from './elementary.json';
import high from './high.json';
import middle from './middle.json';

export const schools = {
  all: [...elementary, ...middle, ...high],
  elementary,
  middle,
  high,
};
