import { useState, useEffect } from "react";
import { getUserById } from "../../services/GroupUp";

export default function RequestUser({ userId }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = (await getUserById(userId)).data;
        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    }, []);

  return(
    <>
    <img src={user.image}/><p>{`${user.name} quer ver os grupos criados por você`}</p>
    </>
  )
}