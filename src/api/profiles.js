export async function fetchProfiles(count = 20, page = 1) {
  const apiUrl = `https://randomuser.me/api/?results=${count}&page=${page}&nat=us,gb,no`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    return data.results.map((i) => ({
      id: i.login.uuid,
      name: `${i.name.first} ${i.name.last}`,
      age: i.dob.age,
      city: i.location.city,
      country: i.location.country,
      image: i.picture.large,
      bio: `My name is ${i.name.first}. I'm a ${i.dob.age} years old ${i.gender} from ${i.location.country}.`,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
