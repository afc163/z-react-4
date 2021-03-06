import Controller from '../Controller';

const test = new Controller(
  'tests',
  (index = 0) => ({
    account: `5b2b8b6b6d9b5800153a9acd${index}`,
    name: `客房部${index}`,
    parentID: '',
    tel: index % 2,
    updatedAt: 1559120526,
    createdAt: 1529630243,
    id: `5b2c4e237b9b7300158fbc07${index}`,
    children: [
      {
        id: `5cee4aaddca7410015bb5adb${index}`,
        parentID: `5b2c4e237b9b7300158fbc07${index}`,
        name: '测试部',
        status: 1,
      },
    ],
  }),
  () => [
    {
      hotelID: '5b2b8b6b6d9b5800153a9acd',
      name: '客房部',
      parentID: '',
      status: 1,
      deleteFlag: 0,
      updatedAt: 1559120526,
      createdAt: 1529630243,
      id: '5b2c4e237b9b7300158fbc07',
      children: [
        {
          id: '5cee4aaddca7410015bb5adb',
          parentID: '5b2c4e237b9b7300158fbc07',
          name: '测试部',
          status: 1,
        },
      ],
    },
    {
      hotelID: '5b2b8b6b6d9b5800153a9acd',
      name: '前厅部',
      parentID: '',
      status: 1,
      deleteFlag: 0,
      updatedAt: 1552468106,
      createdAt: 1529630251,
      id: '5b2c4e2b7b9b7300158fbc08',
      children: [],
    },
    {
      hotelID: '5b2b8b6b6d9b5800153a9acd',
      name: '工程部',
      parentID: '',
      status: 1,
      deleteFlag: 0,
      updatedAt: 1552468106,
      createdAt: 1529630255,
      id: '5b2c4e2f7b9b7300158fbc09',
      children: [],
    },
    {
      hotelID: '5b2b8b6b6d9b5800153a9acd',
      name: '餐饮部',
      parentID: '',
      status: 1,
      deleteFlag: 0,
      updatedAt: 1552468105,
      createdAt: 1540886841,
      id: '5bd8113979ead70015d151f7',
      children: [],
    },
    {
      hotelID: '5b2b8b6b6d9b5800153a9acd',
      name: '客户部',
      parentID: '',
      status: 1,
      deleteFlag: 0,
      updatedAt: 1560926591,
      createdAt: 1540886908,
      id: '5bd8117c5d84d600151ec723',
      children: [],
    },
    {
      hotelID: '5b2b8b6b6d9b5800153a9acd',
      name: '财务部',
      parentID: '',
      status: 1,
      deleteFlag: 0,
      updatedAt: 1552468104,
      createdAt: 1540886957,
      id: '5bd811ad5d84d600151ec724',
      children: [],
    },
  ],
);
export default test.resource();
