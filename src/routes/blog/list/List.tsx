import { FileListToWebDAVResInfo, getFileListToWebDAV } from "@src/models";
import { Button, Layout, Menu, MenuProps, theme } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { BlogDetail } from "./BlogDetail";
import { useUserInfoStore } from "@store/userInfo";
import { useNavigate } from "react-router-dom";

const { Content, Sider } = Layout;

export const List = () => {
  const [list, setList] = useState<FileListToWebDAVResInfo[]>([]);
  const [selectedKey, setSelectedKey] = useState("");

  const navigate = useNavigate();

  const { userInfo } = useUserInfoStore();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    getFileListToWebDAV().then((data) => {
      if (Array.isArray(data)) {
        setList(data);
        setSelectedKey(data[0].basename);
      }
    });
  }, []);

  const menuItems: MenuProps["items"] = useMemo(() => {
    return list.map((item) => ({
      key: item.basename,
      label: item.basename.replace(/\.md$/, ""),
    }));
  }, [list]);

  return (
    <>
      <Layout
        style={{
          padding: "24px 0",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Sider style={{ background: colorBgContainer }} width={200}>
          <div
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            {userInfo?.role === "master" && (
              <Button
                type="primary"
                style={{ marginBottom: 10 }}
                onClick={() => navigate("/blog/create")}
              >
                创建
              </Button>
            )}
            <Menu
              mode="inline"
              selectedKeys={[selectedKey]}
              openKeys={[selectedKey]}
              onSelect={({ key }) => {
                setSelectedKey(key);
              }}
              style={{ height: "100%" }}
              items={menuItems}
            />
          </div>
        </Sider>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <BlogDetail selectedKey={selectedKey} />
        </Content>
      </Layout>
    </>
  );
};
