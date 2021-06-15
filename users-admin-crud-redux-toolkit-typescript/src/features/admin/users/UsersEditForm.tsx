import React, { useEffect } from "react";
import { useHistory, useParams} from "react-router-dom";
import { Form, Input, Button } from "antd";
import AdminLayout from "../../layouts/AdminLayout";
import { message  } from 'antd';

import { useSelector, useDispatch } from "react-redux";
import * as Student from "./users.slice";
import StudentService from "./users.service";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default () => {

  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();

  let { id }:any = useParams();


  const getData = async () => {
      const { data }  = await StudentService.get(id);
      form.setFieldsValue({
        name: data.name
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = async (values: any) => {
    setConfirmLoading(true);
    console.log(values);

    const entry =  {
        id,
        name: values.name
    }

    try{
        await StudentService.update(id, entry);
        dispatch(Student.actions.edit({id, data: entry}));
        history.goBack();
    } catch(err) {
        console.error(err);
        message.error(`Can't edit data: ${err}`);
    }
    setConfirmLoading(false);
  };

  const handleCancel = ()=> {
    history.goBack();
  };

  

  return (

    <AdminLayout>
      <h1>Edit Student Entry: </h1>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <Form
          {...layout}
          form={form}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="name"
            label="Name"
            initialValue=""
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
