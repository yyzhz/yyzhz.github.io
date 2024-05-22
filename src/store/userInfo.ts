import { userInfo } from "os";
import create from "zustand";
import { persist } from "zustand/middleware";

export const loginUserInfo: {
  [key: string]: UserInfo;
} = {
  root: {
    username: "root",
    password: "123456",
    role: "master",
  },
};

export interface UserInfo {
  username: string;
  password: string;
  role?: "master" | "tourist";
}

interface BearState<T = UserInfo | null> {
  userInfo?: T;
  setUserInfo: (userInfo: T) => void;
  checkLoginInfo: (userInfo: UserInfo) => T;
}

export const useUserInfoStore = create(
  persist<BearState>(
    (set) => ({
      userInfo: null,
      setUserInfo: (userInfo) => set(() => ({ userInfo })),
      checkLoginInfo: ({ username, password }) => {
        if (
          !!loginUserInfo[username] &&
          loginUserInfo[username].password === password
        ) {
          return loginUserInfo[username];
        }

        return null;
      },
    }),
    {
      name: "userInfo",
    }
  )
);
