const loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem('state');
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
};

export default loadFromLocalStorage;
