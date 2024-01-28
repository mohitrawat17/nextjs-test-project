"use client";

import React, { useState, useEffect } from "react";
import { clearLoggedUser, getLoggedUser } from "../Helper/userUtils";
import { useRouter } from "next/navigation";

const Test = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const router = useRouter();

  const handleLogout = () => {
    clearLoggedUser();
    router.push("/signin");
  };

  useEffect(() => {
      const user = getLoggedUser();
      setLoggedUser(user);
      if (!user) {
        router.push("/signin");
      }
    
  }, [router]); // Added router to the dependency array to fix the missing dependency warning

  return (
    <div>
      <h4>Test 1</h4>
      {loggedUser ? loggedUser.name : "Loading..."}
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Test;
