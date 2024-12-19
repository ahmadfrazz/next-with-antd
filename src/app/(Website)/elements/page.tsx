'use client';
// import React from 'react';
import {
  App,
  Button as Buttons,
  Checkbox,
  DatePicker,
  Flex,
  Input,
  message,
  Pagination,
  Select,
  Slider,
  Space,
  Switch,
  Typography,
  Modal,
} from 'antd';
import { useState } from 'react';

function Elements() {
  const [modal2Open, setModal2Open] = useState(false);
  // const { message, notification, modal } = App.useApp();
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <Flex className='w-full'>
      <Space direction='vertical' className='p-6 w-full mx-auto max-w-[800px]'>
        <Input placeholder='Please Input' />
        <Buttons
          type='primary'
          onClick={() => {
            messageApi.success('Success!');
            // console.log('hello');
          }}
        >
          Show toast
        </Buttons>
        {contextHolder}
        <DatePicker className='w-full' />
        <Buttons type='primary' onClick={() => setModal2Open(true)}>
          Vertically centered modal dialog
        </Buttons>
        <Modal
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          footer={null}
          bodyStyle={{ minHeight: '300px', overflow: 'auto' }}
        >
          <div>
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </div>
        </Modal>
        <Slider />
        <Typography.Title level={4}>h4. Heading</Typography.Title>
        <Typography.Title level={5}>h5. Heading</Typography.Title>
        <Pagination defaultCurrent={1} total={50} />
        <Checkbox>Checkbox</Checkbox>
        <Switch title='Turn On' />
        <Select
          mode='multiple'
          allowClear
          showSearch
          className='w-full'
          placeholder='Select a person'
          optionFilterProp='label'
          // onChange={onChange}
          // onSearch={onSearch}
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'tom',
              label: 'Tom',
            },
          ]}
        />
      </Space>
    </Flex>
  );
}

export default Elements;
