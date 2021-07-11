export const auth = () => {
  try {
    localStorage.getItem("jwt");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
  }
};
