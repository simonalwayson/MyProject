import Axios from "axios";

//登陆
export const API_POST_LOGIN = '/login';

//用户管理
export const API_GET_USERMANAGE = '/logined/user/getUserList';

// 用户数据相关
//1.获取用户已定制屏幕
export const API_GET_LIST = 'api/users/customization/1';

// 图形数据相关
//1.查询所有数据类型
export const API_GET_DATATYPELIST = 'api/graphData/dataTypes';
//2.根据数据类型查询适用的表格类型
export const API_GET_GRAPHTYPELIST = 'api/graphData/getGraphTypeListByDataTypeId';
//3.根据dataType获取相关表数据
export const API_GET_DATASOURCE = 'api/graphData/getDataSourceByDataType';


// 大屏服务
// 定制大屏
export const API_POST_PERSONALIZESCREEN = 'api/screen/personalizeScreen';



// let dataTypeId = parmas.id

// let url = `API_GET_GRAPHTYPELIST/${dataTypeId}`

// axios.get(url, {}).then(res => {
//     console.log(res)
// })

// axios.get(API_GET_GRAPHTYPELIST, { query: { dataTypeId: params.id } }).then(res => {
//     console.log(res)
// })




