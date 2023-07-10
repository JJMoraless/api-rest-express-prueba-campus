import axios from "axios";

const getCurrentDate24 = () => {
  const currentDate = new Date();
  const dia = currentDate.getDate();
  const mes = currentDate.getMonth() + 1;
  const año = currentDate.getFullYear();
  return {
    today: `${año}-${mes}-${dia}`,
  };
};

const meteorsApi = axios.create({
  baseURL: "https://api.nasa.gov/neo/rest/v1/feed",
});

const getNearMeteors = async ({ today, nexday }) => {
  const params = {
    api_key: "8OfutZOuCnP0czJiCljirbvNrGKD5Dzt67naVXeG",
    end_date: today,
    start_date: today,
  };
  const { data } = await meteorsApi.get("/", { params });
  const { near_earth_objects } = data;
  const [day] = Object.keys(near_earth_objects);
  const dayData = near_earth_objects[day];
  console.log(dayData[0].close_approach_data);


  const meteorsData = dayData.map(
    ({ name, estimated_diameter, is_potentially_hazardous_asteroid, close_approach_data }) => ({
      nombre: name,
      tamaño: estimated_diameter,
      es_peligro_potencial: is_potentially_hazardous_asteroid,
      aproximacion: close_approach_data,
      velocidad: close_approach_data.relative_velocity
    })
  );
  console.log(meteorsData);
};

getNearMeteors(getCurrentDate24());
