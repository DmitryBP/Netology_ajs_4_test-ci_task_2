import sortByHelth from '../sortByHelth';

test('Здоровье героев в массиве сортируется', () => {
  let herosArr = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]
  let herosArrSort = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]
  

  const result = sortByHelth(herosArr);

  expect(result).toEqual(herosArrSort);
});

