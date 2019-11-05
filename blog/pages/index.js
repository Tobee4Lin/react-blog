import React, { useState } from 'react';
import Head from 'next/head';
import { Row, Col, List, Icon, Avatar } from 'antd'
import Header from '../components/Header';
import Author from '../components/Author'
import Footer from '../components/Footer'

import Link from 'next/link';
import axios from 'axios'

import { changeTime } from '../public/utils/index'

import servicePath from '../config/apiUrl';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const routeTo = (path, aid) => {
  console.log(path, aid)
  return
  Router.push({
    pathname: path,
    query: {
      id: aid
    }
  })
}

const Home = (props) => {
  const [mylist, setMyList] = useState(props.data)
  return (
    <>
      <Head>
        <title>首页</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} xxl={14} >
          <div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  {/* <div className="list-title" onClick={routeTo('/detail', item.id)}>{item.title}</div> */}

                  <div className="list-title">
                    <Link href={{ pathname: '/detail', query: { id: item.id } }}><a>{item.title}</a></Link>
                  </div>

                  <div className="list-icon">
                    <span><Icon type="calendar" /> {changeTime(item.addTime)}</span>
                    <span><Icon type="folder" /> {item.typeName}</span>
                    <span><Icon type="fire" /> {item.view_count}人</span>
                  </div>
                  <div className="list-context">{item.introduce}</div>
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className="comm-box" xs={0} sm={0} md={7} lg={5} xl={4} xxl={4}>
          <Author />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

Home.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios(servicePath.getArticleList)
      .then(res => {
        resolve(res.data)
      })
  })
  return await promise;
}
export default Home;