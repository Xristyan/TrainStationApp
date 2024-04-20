export async function getMuseums() {
  try {
    const response = await fetch("http://localhost:8080/museum", {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.message;
      throw new Error(errorMessage);
    }
    // console.log(await response.json());
    return await response.json();
  } catch (error) {
    console.log("inCAttch", error);
  }
}
