import React from "react";
import { Button, Form, Input, Select, Typography } from "antd";
import styled from "styled-components";
import axios from "axios";

const { TextArea } = Input;

const onFinish = async (values) => {
  console.log("Success:", values);
  try {
    const res = await axios.post("http://localhost:5000/posts", values);
    if (res.status === 200) {
      alert("Posted successfully");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Failed to post. Please try again.");
  }
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormDiv = styled.div`
  width: 50%;
  margin: auto;
  background: #fdc9ac;
  padding: 20px;
  border-radius: 8px;
`;

const PostForm = () => {
  return (
    <FormDiv>
      <Typography.Title style={{ color: "white" }}>
        Create a new post
      </Typography.Title>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
          textAlign: "center",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Blog Title"
          name="title"
          rules={[{ required: true, message: "Please enter the title!" }]}
        >
          <Input placeholder="Enter the title" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select placeholder="Select a category">
            <Select.Option value="news">News</Select.Option>
            <Select.Option value="entertainment">Entertainment</Select.Option>
            <Select.Option value="social">Social</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Please enter the content!" }]}
        >
          <TextArea rows={4} placeholder="Write your content here" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormDiv>
  );
};

export default PostForm;
