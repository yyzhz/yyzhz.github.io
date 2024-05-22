import { ExclamationCircleFilled, UserOutlined } from "@ant-design/icons";
import { UserInfo, useUserInfoStore } from "@store/userInfo";
import { Avatar, Button, Checkbox, Form, Input, Modal } from "antd";
import React, { useState } from "react";
const { confirm } = Modal;

export const UserPortrait = () => {
  const { userInfo, setUserInfo } = useUserInfoStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    confirm({
      title: "确认登出？",
      icon: <ExclamationCircleFilled />,
      content: "登出后需要从新登录",
      onOk() {
        setUserInfo(null);
      },
    });
  };

  if (!userInfo) {
    return (
      <>
        <Avatar icon={<UserOutlined />} onClick={() => setIsModalOpen(true)} />
        <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </>
    );
  }

  return (
    <Avatar style={{ backgroundColor: "#87d068" }} onClick={handleLogout}>
      {userInfo.role}
    </Avatar>
  );
};

const LoginModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (is: boolean) => void;
}) => {
  const { setUserInfo, checkLoginInfo } = useUserInfoStore();

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, marginTop: 20 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={(submitInfo) => {
          const { username, password } = submitInfo;

          const userInfo = checkLoginInfo({ username, password });

          if (!!userInfo) {
            setUserInfo(userInfo);
          } else {
            setUserInfo({
              username,
              password,
              role: "tourist",
            });
          }
          setIsModalOpen(false);
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 5, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            确认
          </Button>
          <Button
            style={{ marginLeft: 10 }}
            onClick={() => setIsModalOpen(false)}
          >
            取消
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
