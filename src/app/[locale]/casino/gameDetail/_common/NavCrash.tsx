import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import EmptyImg from '@/assets/casino/empty.webp'
import USDTImg from '@/assets/casino/USDT.webp'
import BlackJackImg from '@/assets/casino/BlackJack.png'
import TrophyImg from '@/assets/casino/trophy.png'
import GrassLeft from '@/assets/casino/grass_left.svg'
import GrassRight from '@/assets/casino/grass_right.svg'
import WinnerImg from '@/assets/casino/winner.png'
import AvatarImg from '@/assets/casino/avatar.webp'
import BCDImg from '@/assets/casino/BCD.webp'
import GoldImg from '@/assets/casino/gold.svg'
import SilverImg from '@/assets/casino/silver.svg'
import CopperImg from '@/assets/casino/copper.svg'
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import Image from 'next/image';
import Icon from '@/components/icon/Icon';

const NavCrash = () => {
  const [latestBtnActive, setLatestBtnActive] = useState(0)


  interface DataType {
    [prop: string]: any;
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
          <Image className='w-6 h-6 ml-2' src={USDTImg} alt='' />
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

  const columnsRanking = [
    {
      title: '#',
      dataIndex: 'name',
      key: 'name',
      render: (text: any, record: any, index: number) => (
        <>
          {
            index == 0 ? <Image className='w-6 h-6' src={GoldImg} alt=''></Image> :
            index == 1 ? <Image className='w-6 h-6' src={SilverImg} alt=''></Image> :
            index == 2 ? <Image className='w-6 h-6' src={CopperImg} alt=''></Image> :
            `${index}th`
          }
        </>
      ),
    },
    {
      title: 'Player',
      dataIndex: 'player',
      key: 'player',
      render: () => {
        return (
          <div className='flex items-center'>
            <div className='rounded-full overflow-hidden mr-4'>
              <Image src={AvatarImg} alt='' className='w-6 h-6'></Image>
            </div>
            <Icon icon="CasinoWinnerMSvg" className='!w-3 !h-3 mr-1'></Icon>
            Hidden
          </div>
        )
      }
    },
    {
      title: 'Wagered',
      dataIndex: 'wagered',
      key: 'wagered',
      render: (text: string|number) => {
        return <div className='text-primary'>${text}</div>
      }
    },
    {
      title: 'Prize',
      dataIndex: 'prize',
      key: 'prize',
      render: (text: string|number, record: any) => {
        console.log(text);
        
        return <div className='text-primary'>${text} <span>({record.pie})</span></div>
      }
    },
  ]
  const dataRanking = [
    {
      player: 1,
      wagered: '4,245,896.16',
      prize: '11,613.44',
      pie: '50'
    }
  ]

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
            <>
              <div className='p-4 bg-standard rounded-md relative'>
                <div className='absolute right-10 top-10 z-10'>
                  <Icon icon="CasinoQuestionSvg" className='text-primary !w-5 !h-5 cursor-pointer'></Icon>
                </div>
                <div className='flex gap-3'>
                  <div className='gap-3 flex items-center p-4 bg-primary rounded-md' style={{
                    flex: '4 1 0%'
                  }}>
                    <div className='flex-1 flex justify-center'>
                      <Image className='w-[150px] fit-contain' src={TrophyImg} alt='' />
                    </div>
                    <div>
                      <div className='flex text-[#3bc117] items-center mt-4'>
                        <Image className='w-4 h-8' src={GrassLeft} alt='' />
                        <span className='mx-4 text-xl'>Daily</span>
                        <Image className='w-4 h-8' src={GrassRight} alt='' />
                      </div>
                      <div className='my-2'>Contest prize pool</div>
                      <Button className='!text-yellow !text-2xl !bg-1h443ei w-64 !justify-start !py-2'>
                        $21,083.62
                      </Button>
                    </div>
                  </div>
                  <div className='flex-1 bg-mk9uba rounded-md flex flex-col justify-center items-center' style={{
                    flex: '3 1 0%'
                  }}>
                    <div className='text-sm'>Who's the invincible champion at the high table? Let's<br/> see what a badass you can be!</div>
                    <Button className='s-conic !w-3/4 !py-4 !border-0 mt-4'>Participate Now</Button>
                  </div>
                  <div className='flex-1 bg-primary rounded-md relative flex flex-col justify-center items-center' style={{
                    flex: '3 1 0%'
                  }}>
                    <div className='absolute w-16 h-16 top-[-3px] left-[-3px]'>
                      <Image src={WinnerImg} alt=''></Image>
                      <div className='absolute -rotate-45 top-[15px] left-[0px] text-xs text-white'>WINNER</div>
                    </div>

                    <div className='flex items-center text-sm'>
                      <Icon icon='CasinoWinnerSvg' className='text-yellow !w-6 !h-6 mr-4'></Icon>
                      <div>Last Champion</div>
                    </div>
                    <div className='flex mt-4 w-[75%]'>
                      <div className='w-16 h-16 relative mr-8'>
                        <Icon icon='CasinoWinnerSvg' className='text-yellow !w-6 !h-6 mr-4 absolute top-[-12px] left-[50%] translate-x-[-50%]'></Icon>
                        <div className='rounded-full overflow-hidden border-2 border-yellow border-solid'>
                          <Image src={AvatarImg} alt=''></Image>
                        </div>
                      </div>
                      <div>
                        <div className='flex font-bold'>
                          <Icon icon="CasinoWinnerMSvg" className='mr-1'></Icon>
                          Hidden
                        </div>
                        <div className='flex items-center mt-4'>
                          <span>Profit</span>
                          <Image className='w-5 h-5 ml-4 mr-2' src={BCDImg} alt=''></Image>
                          <span className='text-primary'>$11,238.44</span>
                          <span className='text-white'>(50%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-4 bg-standard rounded-md mt-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex'>
                    <div className='mr-16 text-title'>Active</div>
                    <div className='text-sm'>2024/3/16 ~ 2024/3/17</div>
                  </div>
                  <Button className='!bg-primary'>History</Button>
                </div>
                <Table className='mt-4' columns={columnsRanking} dataSource={dataRanking} pagination={false} />
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default NavCrash