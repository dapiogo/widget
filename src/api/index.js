const fetchData = async (date_from, date_to, adults, children) => {
  const response = await fetch(
    `http://testapi.itur.pl/api.php?date_from=${date_from}&date_to=${date_to}&nb_adults=${adults}&nb_children=${children}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cors: true,
      credentials: "same-origin",
    }
  );
  console.log(response);
  return await response.json();
};

export default fetchData;
