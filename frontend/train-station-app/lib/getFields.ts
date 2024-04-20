export async function getFields() {
  try {
    const response = await fetch("http://localhost:8080/fields", {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.message;
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
