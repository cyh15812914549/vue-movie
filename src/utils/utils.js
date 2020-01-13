//本地
let url = 'http://localhost:8080';
//上线
// let url = 'http://www.ithollow.cn';

export default {

    //请求地址前缀
    prefix_url(){
        return url
    },

    //格式化时间
    getDateTime(date) {
        var date_ = new Date(date);
        var year = date_.getFullYear();
        var month = date_.getMonth()+1;
        var day = date_.getDate();
        if(month<10) month = "0"+month;
        if(day<10) day = "0"+day;

        var hours = date_.getHours();
        var mins = date_.getMinutes();
        var secs = date_.getSeconds();
        var msecs = date_.getMilliseconds();
        if(hours<10) hours = "0"+hours;
        if(mins<10) mins = "0"+mins;
        if(secs<10) secs = "0"+secs;
        if(msecs<10) msecs = "0"+msecs;
        return year+"-"+month+"-"+day+" "+hours+":"+mins+":"+secs;
    },

    returnPickerOptions(){
        let pickerOptions = {
            shortcuts: [{
                text: '今天',
                onClick(picker) {
                    picker.$emit('pick', new Date());
                }
            }, {
                text: '昨天',
                onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                }
            }, {
                text: '一周前',
                onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                }
            }]
        };
        return pickerOptions
    },
    //用户将json数组对象解析成二维数组
    jsonTurnEWSZ(data)
    {
        var arr = [];
        for (var i in data) {
            arr[i] = [];
            for (var j in data[i]) {
                arr[i].push(data[i][j]);
            }
        }
        return arr;
    },

    formatMonth(item){
        switch (item.name) {
            case '01':
                return '1月份';
            case '02':
                return '2月份';
            case '03':
                return '3月份';
            case '04':
                return '4月份';
            case '05':
                return '5月份';
            case '06':
                return '6月份';
            case '07':
                return '7月份';
            case '08':
                return '8月份';
            case '09':
                return '9月份';
            case '10':
                return '10月份';
            case '11':
                return '11月份';
            case '12':
                return '12月份';
            default:
                break;
        }
    }
}
