async function createUser(user) {
  try {
    const response = await fetch(`http://localhost:2000/users`, {
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

export default createUser;
