import { Avatar, Divider } from 'antd'
import '../public/style/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div><Avatar size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></div>
      <div className="author-introduction">
        Now maybe is my trun to save yours
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="github" className="account" />
        <Avatar size={28} icon="qq" className="account" />
        <Avatar size={28} icon="wechat" className="account" />
      </div>
    </div>
  )
}

export default Author