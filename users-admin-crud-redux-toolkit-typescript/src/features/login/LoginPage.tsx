import React from "react";
import { Layout, Button, Row, Col, Form, Input, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import "./loginPage.less";

type AppProps = { message?: string };

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginPage = ({ message }: AppProps) => {
  const { Header, Footer, Content } = Layout;
  const history = useHistory();

  function onFinish(values: any) {
    console.log('Success:', values);
    history.push('/users');
  };

  return (
    <Layout>
      <Row justify="space-around" align="middle" className="center-wrapper">
        <Col>
        <Row justify="center"><h1>PSUIC - Project System</h1></Row>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={()=> {}}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <Footer className="container footer">
        Copyright@ PSUIC (Thada Wangthammang)
      </Footer>
    </Layout>
  );
};

export default LoginPage;
