import React, { useState } from 'react'
import { Tabs } from 'antd'
import './TicketManage.scss'
import ComboFamily from './data/ComboFamily'

const TicketManage = () => {
  return (
    <div className='home-container'>
      <div className='title'>
        <h1>Danh sách vé</h1>
      </div>
      <div className='nav'>
        <div className='list'>
        <Tabs defaultActiveKey='1'>
          <Tabs.TabPane  key='1'>
            <ComboFamily />
          </Tabs.TabPane>
          </Tabs>
        </div>
      </div>

      <div className='foot-content'></div>
    </div>
  )
}

export default TicketManage
