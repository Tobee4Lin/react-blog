import React, { useState, useEffect } from 'react'
import '../public/style/components/header.css'
import Router from 'next/router'
import { Row, Col, Menu, Icon } from 'antd'

import axios from "axios"
import servicePath from '../config/apiUrl'

const Header = () => {
  const [ navArray, setNavArray ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios(servicePath.getTypeInfo);
      setNavArray(res.data.data);
    }
    fetchData();
  }, [])

  const handleClick = (e) => {
    if(e.key == 0) {
      Router.push('/index');
    } else {
      Router.push('/list?id=' + e.key);
    }
  }

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12} xxl={9}>
          <span className="header-logo">Tobee</span>
          <span className="header-txt">A blog made with react/next/antd.</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6} xxl={4}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="home">
              <a href="/">
                <Icon type="home" />
                首页
              </a>
            </Menu.Item>
            {
              navArray.map(item => {
                return (
                  <Menu.Item key={item.id}>
                    <Icon type={item.icon} />
                    {item.typeName}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  )
}


export default Header