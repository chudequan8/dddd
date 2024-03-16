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
          <Button onClick={() => setLatestBtnActive(0)} className={`flex-1 !text-base ${latestBtnActive == 0 ? 'bg-[#2D3035]' : 'bg-transparent'}`} hover={true}>My Bets</Button>
          <Button onClick={() => setLatestBtnActive(1)} className={`flex-1 !text-base ${latestBtnActive == 1 ? 'bg-[#2D3035]' : 'bg-transparent'}`} hover={true}>History</Button>
          <Button onClick={() => setLatestBtnActive(2)} className={`flex-1 !text-base ${latestBtnActive == 2 ? 'bg-[#2D3035]' : 'bg-transparent'}`} hover={true}>High roolers</Button>
          <Button onClick={() => setLatestBtnActive(3)} className={`flex-1 !text-base ${latestBtnActive == 3 ? 'bg-[#2D3035]' : 'bg-transparent'}`} hover={true}>Wager contest</Button>
        </div>

        {
          latestBtnActive == 0 ? (
            <div className='h-[600px] flex flex-col justify-center items-center'>
              <Image className='w-[150px] h-[150px]' src={EmptyImg} alt=''></Image>

              <span className='text-text'>Oops! There is no data yet!</span>
            </div>
          ) : latestBtnActive == 1 ? (
            <Table className='mt-4' columns={columnsHistory} dataSource={dataHistory} pagination={{}} />
          ) : latestBtnActive == 2 ? (
            <Table className='mt-4' columns={columnsHigh} dataSource={dataHigh} pagination={{}} />
          ) : (
            <div className='p-4 bg-standard rounded-md'>
              <div className='flex gap-3'>
                <div className='gap-3 flex items-center p-4 bg-primary rounded-md' style={{
                  flex: '4 1 0%'
                }}>
                  <div className='flex-1 flex justify-center'>
                    <Image className='w-[180px] fit-contain' src={TrophyImg} alt='' />
                  </div>
                  <div>
                    <div className='flex text-[#3bc117] items-center mt-4'>
                      <Image className='w-4 h-8' src={GrassLeft} alt='' />
                      <span className='mx-4 text-xl'>Daily</span>
                      <Image className='w-4 h-8' src={GrassRight} alt='' />
                    </div>
                    <div className='my-4'>Contest prize pool</div>
                    <Button className='!text-yellow !text-2xl !bg-1h443ei w-64 !justify-start' log>
                      $21,083.62
                    </Button>
                  </div>
                </div>
                <div className='flex-1 bg-mk9uba rounded-md flex flex-col justify-center items-center' style={{
                  flex: '3 1 0%'
                }}>
                  <div className='text-sm'>Who's the invincible champion at the high table? Let's<br/> see what a badass you can be!</div>
                  <Button className='s-conic !w-3/4 !py-4 !border-0'>Participate Now</Button>
                </div>
                <div className='flex-1' style={{
                  flex: '3 1 0%'
                }}></div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NavCrash