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
    getJokeList(param){
        return new Promise((resolve, reject) => {
            let params = Object.assign({}, baseParam);
            if( param ){
                Object.assign(params, param)
            }
            this.get(requestURL.textJokeURL,params)
                .then(result => {    
                    let res_code = result.data.showapi_res_code        
                    if( res_code === 0 ){
                        let response =  {
                            status: res_code,
                            beans:  result.data.showapi_res_body
                        }
                        resolve( response ) 
                    }else {
                        reject({
                            status: result.data.showapi_res_code,
                            message: result.data.showapi_res_error
                        })
                    }
                })
        })
    },
    get(url, params){
        return new Promise((resolve, reject) => {
            axs({
                method: "get",
                url,
                params: params,    
            }).then( res => {
                resolve( res );
            }).catch(err => {
                reject( err );
            })
        })
    }
}

