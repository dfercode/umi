import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip, Switch, Space } from 'antd';
import type { Dispatch } from 'umi';
import { connect, FormattedMessage, formatMessage } from 'umi';
import type { FC } from 'react';
import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './style.less';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

type FormBasicFormProps = {
  submitting: boolean;
  dispatch: Dispatch;
};

const FormBasicForm: FC<FormBasicFormProps> = (props) => {
  const { submitting } = props;
  const [form] = Form.useForm();
  const [showPublicUsers, setShowPublicUsers] = React.useState(false);
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };

  const submitFormLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 10, offset: 7 },
    },
  };

  const onFinish = (values: Record<string, any>) => {
    const { dispatch } = props;
    dispatch({
      type: 'formBasicForm/submitRegularForm',
      payload: values,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (changedValues: Record<string, any>) => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };
const children = [];
children.push(<Option key={'Java'}>Java</Option>);
children.push(<Option key={'DB Migration'}>DB Migration</Option>);
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
  return (
    <PageContainer content={<FormattedMessage id="formbasicform.basic.description" />}>
      <Card bordered={false}>
        <Form
          hideRequiredMark
          style={{ marginTop: 8 }}
          form={form}
          name="basic"
          initialValues={{ public: '1' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="Project Name" />}
            name="title"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formbasicform.title.required' }),
              },
            ]}
          >
            <Input />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="Date" />}
            name="date"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formbasicform.date.required' }),
              },
            ]}
          >
            <RangePicker
              style={{ width: '100%' }}
              placeholder={[
                'Start Date',
                'Due Date',
              ]}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="Project Description" />}
            name="goal"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formbasicform.goal.required' }),
              },
            ]}
          >
            <TextArea
              style={{ minHeight: 32 }}
              placeholder={formatMessage({ id: ' ' })}
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="Talent Requirement" />}
            name="standard"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formbasicform.standard.required' }),
              },
            ]}
          >
            <TextArea
              style={{ minHeight: 32 }}
              placeholder={formatMessage({ id: ' ' })}
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="Points" />}
            name="standard1"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formbasicform.standard.required' }),
              },
            ]}
          >
            <InputNumber
              style={{ minHeight: 32 }}
              placeholder={formatMessage({ id: ' ' })}

            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="Number of Recruitment" />}
            name="Number of Recruitment"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formbasicform.standard.required' }),
              },
            ]}
          >
            <InputNumber
              style={{ minHeight: 32 }}
              placeholder={formatMessage({ id: ' ' })}

            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="Status" />}
            name="Status"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formbasicform.standard.required' }),
              },
            ]}
          >
            <Select
              style={{ minHeight: 32 }}
              placeholder={formatMessage({ id: ' ' })}

            >
              <Option value="Drafts">Drafts</Option>
              <Option value="Open">Open</Option>
              <Option value="In Progress">In Progress</Option>
              <Option value="Finished">Finished</Option>
              <Option value="Closed">Closed</Option>
              <Option value="Archived">Archived</Option>
            </Select>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="Epic Link" />
                <em className={styles.optional}>
                  {/* <FormattedMessage id="formbasicform.form.optional" /> */}
                  {/* <Tooltip title={<FormattedMessage id="formbasicform.label.tooltip" />}>
                    <InfoCircleOutlined style={{ marginRight: 4 }} />
                  </Tooltip> */}
                </em>
              </span>
            }
            name="Epic Link"
          >
            <Input placeholder={formatMessage({ id: ' ' })} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="Project Leader" />
                <em className={styles.optional}>
                  {/* <FormattedMessage id="formbasicform.form.optional" /> */}
                  {/* <Tooltip title={<FormattedMessage id="formbasicform.label.tooltip" />}>
                    <InfoCircleOutlined style={{ marginRight: 4 }} />
                  </Tooltip> */}
                </em>
              </span>
            }
            name="client"
          >
            <Input placeholder={formatMessage({ id: ' ' })} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="Team" />
                <em className={styles.optional}>
                  {/* <FormattedMessage id="formbasicform.form.optional" /> */}
                  {/* <Tooltip title={<FormattedMessage id="formbasicform.label.tooltip" />}>
                    <InfoCircleOutlined style={{ marginRight: 4 }} />
                  </Tooltip> */}
                </em>
              </span>
            }
            name="Team"
          >
            <Input placeholder={formatMessage({ id: ' ' })} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="Recruiting" />
              </span>
            }
            name="Recruiting"
          >
            <Switch />
          </FormItem>
          
          <FormItem {...formItemLayout}

            label={
              <FormattedMessage id="Required Time" />
            }
            name="RequiredTime">
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, 'first']}
                        fieldKey={[fieldKey, 'first']}
                        rules={[{ required: true, message: 'Tech' }]}
                      >
                        <Select placeholder="Tech" >
                          <Option value="Java">Java</Option>
                          <Option value="DB">DB</Option>
                          {/* <Option value="In Progress">In Progress</Option>
                          <Option value="Finished">Finished</Option>
                          <Option value="Closed">Closed</Option>
                          <Option value="Archived">Archived</Option> */}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'last']}
                        fieldKey={[fieldKey, 'last']}
                        rules={[{ required: true, message: ' ' }]}
                      >
                        <InputNumber placeholder="Hour" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Add field
              </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>

          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="Labels" />

              </span>
            }
            name="Labels"
          >
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['Java', 'DB Migration']}
            >
              {children}
            </Select>
          </FormItem>
          {/* <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="formbasicform.invites.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="formbasicform.form.optional" />
                </em>
              </span>
            }
            name="invites"
          >
            <Input placeholder={formatMessage({ id: 'formbasicform.invites.placeholder' })} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="formbasicform.weight.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="formbasicform.form.optional" />
                </em>
              </span>
            }
            name="weight"
          >
            <InputNumber
              placeholder={formatMessage({ id: 'formbasicform.weight.placeholder' })}
              min={0}
              max={100}
            />
            <span className="ant-form-text">%</span>
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label={<FormattedMessage id="formbasicform.public.label" />}
            help={<FormattedMessage id="formbasicform.label.help" />}
            name="publicType"
          >
            <div>
              <Radio.Group>
                <Radio value="1">
                  <FormattedMessage id="formbasicform.radio.public" />
                </Radio>
                <Radio value="2">
                  <FormattedMessage id="formbasicform.radio.partially-public" />
                </Radio>
                <Radio value="3">
                  <FormattedMessage id="formbasicform.radio.private" />
                </Radio>
              </Radio.Group>
              <FormItem style={{ marginBottom: 0 }} name="publicUsers">
                <Select
                  mode="multiple"
                  placeholder={formatMessage({ id: 'formbasicform.publicUsers.placeholder' })}
                  style={{
                    margin: '8px 0',
                    display: showPublicUsers ? 'block' : 'none',
                  }}
                >
                  <Option value="1">
                    <FormattedMessage id="formbasicform.option.A" />
                  </Option>
                  <Option value="2">
                    <FormattedMessage id="formbasicform.option.B" />
                  </Option>
                  <Option value="3">
                    <FormattedMessage id="formbasicform.option.C" />
                  </Option>
                </Select>
              </FormItem>
            </div>
          </FormItem> */}
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
              <FormattedMessage id="formbasicform.form.submit" />
            </Button>
            
          </FormItem>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default connect(({ loading }: { loading: { effects: Record<string, boolean> } }) => ({
  submitting: loading.effects['formBasicForm/submitRegularForm'],
}))(FormBasicForm);
