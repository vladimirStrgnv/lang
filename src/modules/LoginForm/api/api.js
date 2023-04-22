async function login(user) {
  try {
    const response = await fetch(`http://localhost:2000/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response;
  } catch (err) {
    return err;
  }
}

export default login;