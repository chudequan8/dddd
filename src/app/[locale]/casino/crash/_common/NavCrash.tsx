import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import EmptyImg from '@/assets/casino/empty.webp'
import USDTImg from '@/assets/casino/USDT.webp'
import BlackJackImg from '@/assets/casino/BlackJack.png'
import TrophyImg from '@/assets/casino/trophy.png'
import GrassLeft from '@/assets/casino/grass_left.svg'
import GrassRight from '@/assets/casino/grass_right.svg'
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import Image from 'next/image';

const NavCrash = () => {
  const [latestBtnActive, setLatestBtnActive] = useState(0)


  interface DataType {
    id: string;
    result: string;
    keys: string;
    hash: string;
  }

  const columnsHistory: TableProps<DataType>['columns'] = [
    {
      title: 'Game ID',
      dataIndex: 'id',
      key: 'id',
      render: (text, record, index) => (
        <div className={`table_game ${index % 2 == 0 ? 'table_game_s' : 'table_game_f'}`}>
          {text}
        </div>
      ),
    },
    {
      title: 'Result',
      dataIndex: 'result',
      key: 'result',
    },
    {
      title: '',
      dataIndex: 'keys',
      key: 'keys',
    },
    {
      title: 'Hash',
      key: 'hash',
    },
  ];

  const dataHistory: DataType[] = [
    {
      id: '6843409',
      result: '3.62X',
      hash: 'Verify',
      keys: 'b3292f127e2b6cd1619abf96373597314bbb87f111622d9794b6d362810d89f1',
    },
    {
      id: '6843408',
      result: '1.24X',
      hash: 'Verify',
      keys: 'b3292f127e2b6cd1619abf96373597314bbb87f111622d9794b6d362810d89f1',
    },
    {
      id: '6843407',
      result: '1.71X',
      hash: 'Verify',
      keys: 'b3292f127e2b6cd1619abf96373597314bbb87f111622d9794b6d362810d89f1',
    },
  ];


  const columnsHigh: TableProps<DataType>['columns'] = [
    {
      title: 'Game',
      dataIndex: 'name',
      key: 'name',
      render: (text, record, index) => (
        <div className={`flex items-center`}>
          <Image className='w-6 h-6 mr-2' alt='' src={BlackJackImg} />
          {text}
        </div>
      ),
    },
    {
      title: 'Player',
      dataIndex: 'player',
      key: 'player',
    },
    {
      title: 'Bet Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text, record, index) => (
        <div className={`flex items-center`}>
          {text}
          <Image className='w-6 h-6 ml-2' src={USDTImg} alt='' />
        </div>
      ),
    },
    {
      title: 'Mutipler',
      dataIndex: 'mutipler',
      key: 'mutipler',
    },
    {
      title: 'Profit Amount',
      dataIndex: 'profit',
      key: 'profit',
      align: 'right',
      render: (text, record, index) => (
        <div className={`flex items-center text-[#03b93e] justify-end`}>
          {text}
          <Image className='w-6 h-6 ml-2' src={USDTImg} />
        </div>
      ),
    },
  ];

  const dataHigh: DataType[] = [
    {
      name: 'Crazy Time',
      player: 'Jchhvczlkyb',
      amount: '16874.255',
      mutipler: '1.12X',
      profit: '1008611',
    },
    {
      name: 'Crash',
      player: 'Vimean Biz',
      amount: '16874.255',
      mutipler: '1.12X',
      profit: '5.12',
    },
    {
      name: 'Crash',
      player: 'Luiza Konid',
      amount: '16874.255',
      mutipler: '1.12X',
      profit: '1008611',
    },
  ];

  return (
    <div className=''>
      <div className='text-title text-2xl my-8 mb-4'>Latest bet & Race</div>
      <div className='p-4 bg-[#2b2f37]'>
        <div className='w-full bg-[#191b1f] flex p-1 gap-2'>
          <Button onClick={() => setLatestBtnActive(0)} className={`flex-1 ${latestBtnActive == 0 ? 'bg-[#2D3035]' : 'bg-transparent'}`}>My Bets</Button>
          <Button onClick={() => setLatestBtnActive(1)} className={`flex-1 ${latestBtnActive == 1 ? 'bg-[#2D3035]' : 'bg-transparent'}`}>History</Button>
          <Button onClick={() => setLatestBtnActive(2)} className={`flex-1 ${latestBtnActive == 2 ? 'bg-[#2D3035]' : 'bg-transparent'}`}>High roolers</Button>
          <Button onClick={() => setLatestBtnActive(3)} className={`flex-1 ${latestBtnActive == 3 ? 'bg-[#2D3035]' : 'bg-transparent'}`}>Wager contest</Button>
        </div>

        {
          
          latestBtnActive == 0 ? (
            <div className='h-[600px] flex flex-col justify-center items-center'>
              <Image className='w-[150px] h-[150px]' src={EmptyImg}></Image>

              <span className='text-text'>Oops! There is no data yet!</span>
            </div>
          ) : latestBtnActive == 1 ? (
            <Table className='mt-4' columns={columnsHistory} dataSource={dataHistory} pagination={{}} />
          ) : latestBtnActive == 2 ? (
            <Table className='mt-4' columns={columnsHigh} dataSource={dataHigh} pagination={{}} />
          ) : (
            <div className=''>
              <div className='flex bg-standard'>
                <div className='flex-1 gap-3 flex items-center p-4 bg-primary rounded-md'>
                  <Image className='w-[180px] fit-contain' src={TrophyImg} alt='' />
                  <div>
                    <div className='flex text-[#3bc117] items-center'>
                      <Image className='w-3 h-8' src={GrassLeft} alt='' />
                      <span className='mx-4'>Daily</span>
                      <Image className='w-3 h-8' src={GrassRight} alt='' />
                    </div>
                    <div>Contest prize pool</div>
                  </div>
                </div>
                <div className='flex-1'></div>
                <div className='flex-1'></div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NavCrash