export default async function devicesApi(){
  try {
   return await fetch("https://my-json-server.typicode.com/Jeck99/fake-server/devices")
  .then((response) => response.json())
  } catch (error) {
    console.log(error);
  }
}

