import * as React from 'react';
import {Button, Card, Form, Icon, Input} from 'antd';
import {FormComponentProps} from 'antd/lib/form';
import Upload from 'antd/lib/upload';
import logo from '../../assets/dog.png';

class DogForm extends React.Component<FormComponentProps> {
  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Card
        title={
          <span>
            Add new dog<img alt="logo" className={'logo'} src={logo} />
          </span>
        }
        bordered={true}
      >
        <Form>
          <Form.Item label="Dog Type">{getFieldDecorator('type', {})(<Input />)}</Form.Item>
          <Form.Item label="Location">
            {getFieldDecorator('location', {
              rules: [
                {
                  required: true,
                  message: 'Please specify the location of the dog.',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Phone Number">
            {getFieldDecorator('phone_number', {
              rules: [
                {
                  required: true,
                  message: 'Please specify a phone where you can be reached',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Upload Photos">
            <div className="dropbox">
              {getFieldDecorator('dragger', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                </Upload.Dragger>,
              )}
            </div>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Card>
    );
  }
}

export const WrappedDogForm = Form.create()(DogForm);
