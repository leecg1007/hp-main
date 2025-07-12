import React, { useEffect, useState } from "react";

// FIREBASE
import { firebaseAuth, fireStoreJob } from "./initFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

// COMPONENTS
import { AppRouter } from "./routes/Router";

//import "./styles/App.css";
import { UserInterface } from "./interfaces/user.interface";

const App = () => {
  const [init, setInit] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<UserInterface | null>(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        // 'users' collection에서 유저 정보 가져오기
        const q = query(
          collection(fireStoreJob, "users"),
          where("uid", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // 유저 정보 저장
          setUserInfo({
            uid: data.uid,
            email: data.email,
            displayName: data.displayName,
            date_created: data.date_created,
          });
        });
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {" "}
      {init ? (
        <AppRouter isLogin={isLogin} userInfo={userInfo} />
      ) : (
        "Initializing..."
      )}
    </>
  );
};

export default App;