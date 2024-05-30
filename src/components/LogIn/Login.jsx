import React, { useContext } from 'react'
import { Button, Form, Input } from 'antd';
import { UserContext } from '../../context/UserContext/UserState';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {login} = useContext(UserContext);
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const navigate = useNavigate();

    const onFinish = (values) => {
        login(values);
        navigate('/products')
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const signup = () => {
        navigate('/users/');
      }

  return (
    <div>
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="on"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
        {
          pattern: emailRegex,
          message: 'Please input a correct email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  <p>You don't have an account?</p>
  <button onClick={signup}>Sign up</button>
    </div>
  )
}

export default Login