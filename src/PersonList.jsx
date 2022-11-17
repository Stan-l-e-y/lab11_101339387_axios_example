import { useState, useEffect } from 'react';

export default function PersonList() {
  const [people, setPeople] = useState([]);

  async function fetchData() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();

    setPeople(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {people ? (
        people.map((person) => (
          <div
            key={person.login.uuid}
            className="flex justify-center mb-5 p-5 bg-[#42ced1] rounded-lg w-full"
          >
            <div className="flex flex-col ">
              <div className="header pb-1 mb-4 border-b-2 basis-1/4 self-start">
                {person.name.title} {person.name.first} {person.name.last}
              </div>
              <div className="flex main-info p-2 px-20 bg-[#cb49d4c0]  rounded-lg">
                <div className="flex flex-col ">
                  <img
                    className="w-20 rounded-full mb-2"
                    src={person.picture.large}
                    alt="profile"
                  />
                  <button className="bg-blue-400 rounded-lg p-1">
                    Details
                  </button>
                </div>
                <div className="main-stuff ml-3">
                  <p>User Name: {person.login.username}</p>
                  <p>Gender: {person.gender}</p>
                  <p>Time Zone Desc: {person.location.timezone.description}</p>
                  <p>
                    Address: {person.location.city} {person.location.country}
                  </p>
                  <p>Email: {person.email}</p>
                  <p>
                    Birthdate: {person.dob.date} {person.dob.age}
                  </p>
                  <p>Registered Date: {person.registered.date}</p>
                  <p>Phone Number: {person.phone}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>'Loading...'</div>
      )}
    </div>
  );
}
