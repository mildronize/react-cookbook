import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import AdminLayout from "../../layouts/AdminLayout";
import { v4 as uuidv4 } from 'uuid';
import { message  } from 'antd';

import { useSelector, useDispatch } from "react-redux";
import * as Student from "./users.slice";
import StudentService from "./users.service";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

type AppProps = { visible?: boolean; setVisible?: Function };

export default ({ visible, setVisible }: AppProps) => {
    
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const dispatch = useDispatch();
  //const users = useSelector(Student.selector);
  const history = useHistory();

  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = async (values: any) => {
    setConfirmLoading(true);
    console.log(values);

    const entry =  {
        id: uuidv4(),
        name: values.user.name
    }

    try{
        await StudentService.add(entry);
        dispatch(Student.actions.add(entry));
        history.goBack();
    } catch(err) {
        console.error(err);
        message.error(`Can't add data: ${err}`);
    }
    setConfirmLoading(false);
  };

  const handleCancel = ()=> {
    history.goBack();
  };

  return (
    <AdminLayout>
      <h1>Add Student Entry</h1>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            
            <Button type="primary" htmlType="submit" loading={confirmLoading}>
              Submit
            </Button>
            <Button style={{marginLeft: "20px"}} onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
         
        </Form>
      </div>
    </AdminLayout>
  );
};
