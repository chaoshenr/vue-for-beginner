import axios from "axios";

let axs = axios.create({
    baseURL: " http://route.showapi.com",
    timeout: 20000,
    headers: {
    }
})
let baseParam = {
    showapi_appid: "55018",
	showapi_sign: "0c4c61663d694a62a2d4e333ea126a9a"
}
let requestURL = {
    textJokeURL: "341-1", //文字笑话
    imageJokeURL: "341-2", //图片笑话
    gifJokeURL: "341-3"
}
export default {
    /**
     * 获取文字笑话列表
     * 
     */
    getTextJokes(param){
        return this.getData(requestURL.textJokeURL, param);
    },
    getImageJokes(param) {
        return this.getData(requestURL.imageJokeURL, param);
    },
    getData(url, param) {
        return new Promise((resolve, reject) => {
            let params = Object.assign({}, baseParam);
            if( param ){
                Object.assign(params, param)
            }
            this.get(url,params)
                .then( result => {
                    resolve(result);
                })
                .catch( err => {
                    reject( err );
                })
        })
    },
    get(url, params){
        return new Promise((resolve, reject) => {
            axs({
                method: "get",
                url,
                params: params,    
            }).then( result => {
                let status = result.data.showapi_res_code;
                let beans = result.data.showapi_res_body;      
                let response =  {
                    status,
                    beans 
                }
                resolve( response )   
            }).catch(err => {
                reject( err );
            })
        })
    }
}

