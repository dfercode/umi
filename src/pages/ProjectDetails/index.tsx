import { Badge, Button, Card, Descriptions, Divider, Image, Table } from 'antd';
import React, { Component } from 'react';

import { PageContainer } from '@ant-design/pro-layout';
import { Dispatch, FormattedMessage } from 'umi';
import { connect } from 'umi';
import type { BasicProfileDataType } from './data.d';
// import styles from './style.less';
import Tag from 'antd/es/tag';

const progressColumns = [
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '当前进度',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (text: string) => {
      if (text === 'success') {
        return <Badge status="success" text="成功" />;
      }
      return <Badge status="processing" text="进行中" />;
    },
  },

  {
    title: '操作员ID',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: '耗时',
    dataIndex: 'cost',
    key: 'cost',
  },
];

type ProjectDetailsProps = {
  loading: boolean;
  dispatch: Dispatch;
  projectDetails: BasicProfileDataType;
};
type ProjectDetailsState = {
  visible: boolean;
};

class ProjectDetails extends Component<
  ProjectDetailsProps,
  ProjectDetailsState
> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'projectDetails/fetchBasic',
    });
  }

  render() {
    // const { projectDetails, loading } = this.props;
    // const { basicGoods, basicProgress } = projectDetails;
    // let goodsData: typeof basicGoods = [];
    // if (basicGoods.length) {
    //   let num = 0;
    //   let amount = 0;
    //   basicGoods.forEach((item) => {
    //     num += Number(item.num);
    //     amount += Number(item.amount);
    //   });
    //   goodsData = basicGoods.concat({
    //     id: '总计',
    //     num,
    //     amount,
    //   });
    // }
    // const renderContent = (value: any, row: any, index: any) => {
    //   const obj: {
    //     children: any;
    //     props: { colSpan?: number };
    //   } = {
    //     children: value,
    //     props: {},
    //   };
    //   if (index === basicGoods.length) {
    //     obj.props.colSpan = 0;
    //   }
    //   return obj;
    // };
    // const goodsColumns = [
    //   {
    //     title: '商品编号',
    //     dataIndex: 'id',
    //     key: 'id',
    //     render: (text: React.ReactNode, row: any, index: number) => {
    //       if (index < basicGoods.length) {
    //         return <a href="">{text}</a>;
    //       }
    //       return {
    //         children: <span style={{ fontWeight: 600 }}>总计</span>,
    //         props: {
    //           colSpan: 4,
    //         },
    //       };
    //     },
    //   },
    //   {
    //     title: '商品名称',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: renderContent,
    //   },
    //   {
    //     title: '商品条码',
    //     dataIndex: 'barcode',
    //     key: 'barcode',
    //     render: renderContent,
    //   },
    //   {
    //     title: '单价',
    //     dataIndex: 'price',
    //     key: 'price',
    //     align: 'right' as 'left' | 'right' | 'center',
    //     render: renderContent,
    //   },
    //   {
    //     title: '数量（件）',
    //     dataIndex: 'num',
    //     key: 'num',
    //     align: 'right' as 'left' | 'right' | 'center',
    //     render: (text: React.ReactNode, row: any, index: number) => {
    //       if (index < basicGoods.length) {
    //         return text;
    //       }
    //       return <span style={{ fontWeight: 600 }}>{text}</span>;
    //     },
    //   },
    //   {
    //     title: '金额',
    //     dataIndex: 'amount',
    //     key: 'amount',
    //     align: 'right' as 'left' | 'right' | 'center',
    //     render: (text: React.ReactNode, row: any, index: number) => {
    //       if (index < basicGoods.length) {
    //         return text;
    //       }
    //       return <span style={{ fontWeight: 600 }}>{text}</span>;
    //     },
    //   },
    // ];
    return (
      <PageContainer>
        <Card bordered={false}>
          <Descriptions title="DB Migration" style={{ marginBottom: 32 }}
            extra={<span style={{display: "flex"}}>
              <li  style={{ marginRight: "10px" }}><Image style={{ borderRadius: "50%" }} width={30} src='https://avatars.githubusercontent.com/u/5043083?s=64&v=4'></Image></li>
               <span style={{display:'flex', backgroundColor:'#2ecc71',borderRadius:'6%', padding:'3px 7px', height: "30px",textAlign:'center',textOrientation:'upright' }} color="#27ae60" >Recruiting</span></span>}>
            <Descriptions.Item label="Epic Link">XX Team DB Migration</Descriptions.Item>
            <Descriptions.Item label="Status">In Progress</Descriptions.Item>
            <Descriptions.Item label="Team">Red Dragon</Descriptions.Item>
            <Descriptions.Item label="Kickoff Date">01/05/2021</Descriptions.Item>
            <Descriptions.Item label="Due Date">31/07/2021</Descriptions.Item>
            <Descriptions.Item label="Number of Recruitment">4/10</Descriptions.Item>
            <Descriptions.Item label="Labels">
              <Tag color="magenta">Java</Tag>
              <Tag color="red">Oracle</Tag>
              <Tag color="volcano">Sybase</Tag>
            </Descriptions.Item>

          </Descriptions>
          <Divider style={{ marginBottom: 32 }} />
          <Descriptions title="Project Description" style={{ marginBottom: 32 }}>

            <Descriptions.Item label="">As Sybase is out of date, this project is about to help XX team to migrate to Oracle DB in the next two month.</Descriptions.Item>

          </Descriptions>
          <Descriptions title="Talent Requirent" style={{ marginBottom: 32 }}>

            <Descriptions.Item label="">Needs applicants acquire proficiency in Oracle DB, Java, Spring...</Descriptions.Item>


          </Descriptions>
          <Descriptions title="Time Requirent" style={{ marginBottom: 32 }}>

            <Descriptions.Item label="Java">10h</Descriptions.Item>
            <Descriptions.Item label="Oracle">10h</Descriptions.Item>

          </Descriptions>
          <Divider style={{ marginBottom: 32 }} />

          <Descriptions title="Contributors" style={{ marginBottom: 2 }}>


          </Descriptions>
          <div style={{ display: 'flex' }}>
            <li style={{ marginRight: '8px', display: 'list-item' }}>
              <Image style={{ borderRadius: "50%" }} width={35} src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'></Image>

            </li>
            <li style={{ marginRight: '8px', display: 'list-item' }}>
              <Image style={{ borderRadius: "50%" }} width={35} src='https://avatars.githubusercontent.com/u/810438?s=64&v=4'></Image>
            </li>
            <li style={{ marginRight: '8px', display: 'list-item' }}>
              <Image style={{ borderRadius: "50%" }} width={35} src='https://avatars.githubusercontent.com/u/433725?s=64&v=4'></Image>
            </li>
            <li style={{ marginRight: '8px', display: 'list-item' }}>
              <Image style={{ borderRadius: "50%" }} width={35} src='..//avatars/6355370.png'></Image>
            </li>
          </div>

          <Divider style={{ marginBottom: 32 }} />
          <Button type="primary" htmlType="submit" >
              <FormattedMessage id="Apply" />
            </Button>
          {/* <Table
            style={{ marginBottom: 24 }}
            pagination={false}
            loading={loading}
            dataSource={goodsData}
            columns={goodsColumns}
            rowKey="id"
          />
          <div className={styles.title}>退货进度</div>
          <Table
            style={{ marginBottom: 16 }}
            pagination={false}
            loading={loading}
            dataSource={basicProgress}
            columns={progressColumns}
          /> */}
        </Card>
      </PageContainer>
    );
  }
}

export default connect(
  ({
    projectDetails,
    loading,
  }: {
    projectDetails: BasicProfileDataType;
    loading: {
      effects: Record<string, boolean>;
    };
  }) => ({
    projectDetails,
    loading: loading.effects['projectDetails/fetchBasic'],
  }),
)(ProjectDetails);
