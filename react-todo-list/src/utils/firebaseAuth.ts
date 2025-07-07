import { getAuth, signOut } from "firebase/auth";

export const logout = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    console.log("로그아웃 완료");
  } catch (error) {
    console.error("로그아웃 실패", error);
  }
};

export {}