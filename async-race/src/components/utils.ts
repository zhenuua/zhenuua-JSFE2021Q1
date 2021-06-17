const models = ['Tesla', 'Mersedes', 'BMW', 'Toyota', 'LADA', 'Moskvich', 'Opel', 'Great Wall', 'Porshe', 'Aston Martin'];
const names = ['Model S', 'Maybach', 'X5', 'Camry', 'priora', '412', 'Astra', 'H5', 'Cayene', 'DB9'];

const getRandomName = () : string => {
  const model = models[Math.floor(Math.random() * models.length)];
  const name = names[Math.floor(Math.random() * names.length)];
  return `${model} ${name}`;
};

const getRandomColor = () : string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
// export const generateRandomCar = () => ({ name: getRandomName(), color: getRandomColor() });
export const generateRandomCars = (count = 100) => new Array(count).fill(1).map((_) => ({ name: getRandomName(), color: getRandomColor() }));
