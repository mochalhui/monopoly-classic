import User from "./user";

export interface AreaDTO {
	id: string;
	gridArea: string;
	areaName: string;
	customProps?: {
		// 超市
		storeGoods?: {
                    name: string,
                    img: string,
                    type: number,
                    cost: number,
                }[]
			,
		suspend?: number; // 停留回纥
		lucky?: boolean; // 是否抽奖，小羽毛
	},
	moneyCost?: number; // 一片地多少钱
    owner?: '' | number; // id或者无 userId
    diamond?: number;
    houseLevel?: 0; // 房子级别
    background?:string; //地皮颜色
    backgroundImg? : string;//特殊地皮img 超市、监狱、医院 等
}
export const createAreaAddressList = (): Array<AreaDTO> => [
	{
		id: 'store',
		gridArea: "1/1/1/2",
		areaName: "store 1",
		customProps: {
			//超市特有属性
			storeGoods:  [
                     {//保护卡
                        name: '保护卡',
                        img: '',
                        type: 1,
                        cost: 200,
                    },
                    {//升级星
                        name: '升级星',
                        img: '',
                        type: 2,
                        cost: 150,
                    },
                    {//钻石
                        name: '钻石',
                        img: '',
                        type: 3,
                        cost: 200,
                    },
                    {//炸弹
                        name: '炸弹',
                        img: '',
                        type: 4,
                        cost: 100,
                    }
                ],
		},
	},
	{
		id: "1",
		gridArea: "1/2/1/3",
		areaName: " ",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#e6b8af'
	},
	{
		id: "1",
		gridArea: "1/3/1/4",
		areaName: "area1 1000块",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#e6b8af'
	},
	{
		id: "1",
		gridArea: "1/4/1/5",
		areaName: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#e6b8af'
	},
	{
		id: "jail",
		gridArea: "1/5/1/6",
		areaName: "",
		customProps: {
			suspend: 2
        },
        backgroundImg: 'JailImg'
       
	},
	{
		id: "2",
		gridArea: "1/6/1/7",
		areaName: "area2",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#f4cccc'
	},
	{
		id: "2",
		gridArea: "1/7/1/8",
		areaName: "1000块",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#f4cccc'
	},
	{
		id: "3",
		gridArea: "1/8/1/9",
		areaName: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fce5cd'
	},
	{
		id: "3",
		gridArea: "1/9/1/10",
		areaName: "area3",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fce5cd'
	},
	{
		id: "3",
		gridArea: "1/10/1/11",
		areaName: "1000块",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fce5cd'
	},
	{
		id: "3",
		gridArea: "1/11/1/12",
		areaName: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fce5cd'
	},
	{
		id: "store",
		gridArea: "1/12/1/13",
		areaName: "store 2",
		customProps: {
			//超市特有属性
			storeGoods:  [
                     {//保护卡
                        name: '保护卡',
                        img: '',
                        type: 1,
                        cost: 200,
                    },
                    {//升级星
                        name: '升级星',
                        img: '',
                        type: 2,
                        cost: 150,
                    },
                    {//钻石
                        name: '钻石',
                        img: '',
                        type: 3,
                        cost: 200,
                    },
                    {//炸弹
                        name: '炸弹',
                        img: '',
                        type: 4,
                        cost: 100,
                    }
                ],
		},
	},
	{
		id: "4",
		gridArea: "2/12/2/13",
		areaName: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fff2cc'
	},
	{
		id: "4",
		gridArea: "3/12/3/13",
		areaName: 'area4 1000',
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fff2cc'
	},
	{
		id: "4",
		gridArea: "4/12/4/13",
		areaName: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fff2cc'
	},
	{
		id: "lucky",
		gridArea: "5/12/5/13",
		areaName: "lucky1",
		customProps: {
			lucky: true
		}
	},
	{
		id: "5",
		gridArea: "6/12/6/13",
		areaName: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9ead3'
	},
	{
		id: "5",
		gridArea: "7/12/7/13",
		areaName: "area5 1000",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9ead3'
	},
	{
		id: "5",
		gridArea: "8/12/8/13",
		areaName: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9ead3'
	},
	{
		id: "store",
		gridArea: "9/12/9/13",
		areaName: "store3",
		customProps: {
			//超市特有属性
			storeGoods:  [
                     {//保护卡
                        name: '保护卡',
                        img: '',
                        type: 1,
                        cost: 200,
                    },
                    {//升级星
                        name: '升级星',
                        img: '',
                        type: 2,
                        cost: 150,
                    },
                    {//钻石
                        name: '钻石',
                        img: '',
                        type: 3,
                        cost: 200,
                    },
                    {//炸弹
                        name: '炸弹',
                        img: '',
                        type: 4,
                        cost: 100,
                    }
                ],
		},
	},
	{
		id: "6",
		gridArea: "9/11/9/12",
		areaName: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d0e0e3'
	},
	{
		id: "6",
		gridArea: "9/10/9/11",
		areaName: "area6 1000块",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d0e0e3'
	},
	{
		id: "6",
		gridArea: "9/9/9/10",
		areaName: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d0e0e3'
	},
	{
		id: "hospital",
		gridArea: "9/8/9/9",
		areaName: "hospital",
		customProps: {
			suspend: 4
		}
	},
	{
		id: "7",
		gridArea: "9/7/9/8",
		areaName: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#c9daf8'
	},
	{
		id: "7",
		gridArea: "9/6/9/7",
		areaName: "1000块",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#c9daf8'
	},
	{
		id: "7",
		gridArea: "9/5/9/6",
		areaName: "area7",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#c9daf8'
	},
	{
		id: "7",
		gridArea: "9/4/9/5",
		areaName: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#c9daf8'
	},
	{
		id: "lucky",
		gridArea: "9/3/9/4",
		areaName: "lucky2",
		customProps: {
			lucky: true
		}
	},
	{
		id: "8",
		gridArea: "9/2/9/3",
		areaName: "area8 1000",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#cfe2f3'
	},
	{
		id: "store",
		gridArea: "9/1/9/2",
		areaName: "store3",
		customProps: {
			//超市特有属性
			storeGoods:  [
                     {//保护卡
                        name: '保护卡',
                        img: '',
                        type: 1,
                        cost: 200,
                    },
                    {//升级星
                        name: '升级星',
                        img: '',
                        type: 2,
                        cost: 150,
                    },
                    {//钻石
                        name: '钻石',
                        img: '',
                        type: 3,
                        cost: 200,
                    },
                    {//炸弹
                        name: '炸弹',
                        img: '',
                        type: 4,
                        cost: 100,
                    }
                ],
		},
	},
	{
		id: "9",
		gridArea: "8/1/8/2",
		areaName: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9d2e9'
	},
	{
		id: "9",
		gridArea: "7/1/7/2",
		areaName: "1000",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9d2e9'
	},
	{
		id: "9",
		gridArea: "6/1/6/2",
		areaName: "area9",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9d2e9'
	},
	{
		id: "9",
		gridArea: "5/1/5/2",
		areaName: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9d2e9'
	},
	{
		id: "bank",
		gridArea: "4/1/4/2",
		areaName: "bank",
	},
	{
		id: "10",
		gridArea: "3/1/3/2",
		areaName: "1000",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#ead1dc'
	},
	{
		id: "10",
		gridArea: "2/1/2/2",
		areaName: "area10",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#ead1dc'
	},
];