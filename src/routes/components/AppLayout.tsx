import { UserOutlined } from "@ant-design/icons";
import { Justify } from "@src/componet";
import { Avatar, Layout, Menu } from "antd";
import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserPortrait } from "./UserPortrait";
const { Header } = Layout;

export const AppLaylout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const selectKey = useMemo(() => {
    const [, selectKey] = pathname.split("/");
    return selectKey;
  }, [pathname]);

  return (
    <Layout>
      <Header>
        <Justify
          left={
            <>
              <div className="demo-logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[selectKey]}
                items={[
                  {
                    key: "home",
                    label: "home",
                    onClick: () => {
                      navigate(`/home`);
                    },
                  },
                  {
                    key: "blog",
                    label: "blog",
                    onClick: () => {
                      navigate(`/blog`);
                    },
                  },
                ]}
                style={{ flex: 1, minWidth: 0 }}
              />
            </>
          }
          right={<UserPortrait />}
        />
      </Header>
      {children}
    </Layout>
  );
};
