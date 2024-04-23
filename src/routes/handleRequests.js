export const handleRequest = async (request) => {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
