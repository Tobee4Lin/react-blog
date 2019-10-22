import React from 'react'
import '../public/style/components/header.css'

import { Row, Col, Menu, Icon } from 'antd'
const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12} xxl={9}>
        <span className="header-logo">Tobee</span>
        <span className="header-txt">A blog made with react/next/antd.</span>
      </Col>

      <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6} xxl={4}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <a href="/">
              <Icon type="home" />
              首页
            </a>
          </Menu.Item>
          <Menu.Item key="video">
            <Icon type="youtube" />
            视频
          </Menu.Item>
          <Menu.Item key="life">
            <Icon type="smile" />
            生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header