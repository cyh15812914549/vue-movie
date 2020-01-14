import axios from '../axios'

//搜索
export const searchMovieshow = (inputValue) => {
    return axios({
        url: '/movieshow/searchMovieshow/' + inputValue,
        method: 'get'
    })
};

//详情
export const selectMovieDetailById = (id) => {
    return axios({
        url: '/moviedetail/selectMovieDetailById/' + id,
        method: 'get'
    })
};
//查询
export const list = (params) => {
    return axios({
        url: '/movieshow/getMovieShowList',
        method: 'get'
    })
};
