import React from 'react'
import type { FC, ReactNode } from 'react'
import { Button, Form, Input } from 'antd'
import { Row } from '../lib'
import { FormInstance } from 'rc-field-form'
import styled from 'styled-components'
import { ConmentProps, ReplyProps } from '@/api/dataTypes'
import { postComment } from '@/api'
interface Iprops {
  children?: ReactNode
  Edit?: boolean
  isReply?: boolean
  comment?: ConmentProps | ReplyProps
}

const EditorBox: FC<Iprops> = ({ Edit, comment, isReply }) => {
  const emailBlur = () => {
    const reg = /^[1-9][0-9]+@qq.com$/
    // const email = form.getFieldValue('email')
  }
  const onFinish = (value: Partial<ConmentProps>) => {
    const { result, loading } = postComment(value)
    console.log(result, loading)
  }
  //表单默认值配置
  const initialValues = {}
  const placeholder = !isReply
    ? '欢迎评论~支持markdown格式哦'
    : `回复 @${comment?.nickname}`
  // const [form] = Form.useForm<FormInstance>()
  const { TextArea } = Input
  return (
    <EditorBoxContainer Edit={Edit}>
      <Form
        name="comment"
        initialValues={initialValues}
        onFinish={onFinish}
        className="form"
      >
        <Row className="user_input">
          <Form.Item
            label="昵称"
            tooltip="最多输入20字"
            name="nickname"
            rules={[{ required: true, message: '请输入昵称' }]}
          >
            <Input maxLength={20} />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: true, message: '请输入邮箱' }]}
          >
            <Input onBlur={emailBlur} maxLength={50} />
          </Form.Item>
          <Form.Item
            label="网址"
            name="url"
            rules={[{ type: 'url', message: '请输入正确的url或不输入' }]}
          >
            <Input />
          </Form.Item>
        </Row>
        <Form.Item className="edit_comment" name="content">
          <TextArea showCount allowClear={true} placeholder={placeholder} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </EditorBoxContainer>
  )
}
export default EditorBox

const EditorBoxContainer = styled.div<Iprops>`
  margin: 1rem 0;
  max-height: 15rem;
  ${(props) => (props.Edit ? 'max-height:0' : null)};
  transition: max-height 250ms linear;
  overflow: hidden;
  .user_input {
    .ant-form-item:not(:last-child) {
      .ant-row {
        margin-right: 1rem;
      }
    }
    label,
    svg {
      color: ${({ theme }) => theme.color.fontPrimary};
    }
  }
  .nickname {
    width: 1rem;
  }
  .edit_comment {
    padding: 1rem 0;
    span {
      color: ${({ theme }) => theme.color.fontPrimary};
    }
  }
  .ant-input {
  }
`
