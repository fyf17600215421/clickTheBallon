let initData = {
        domList: [],
        sum: 0,
        speed: 1000,
        loss: 0

    }
    /**
     * 匹配气球  信息
     * @param{number} match 接收‘气球 ’数据中‘match’关键字
     * @return{number | string} 返回跟气球相对应的数值或操作符
     */
const Getmatch = (match) => {
        let index = match;
        switch (index) {
            case '00':
                return 1;
            case '01':
                return 5;
            case '02':
                return 'x2';
            case '10':
                return 2;
            case '11':
                return 6;
            case '12':
                return '/2';
            case '20':
                return 3;
            case '21':
                return 7;
            case '22':
                return 'b0';
            case '30':
                return 4;
            case '31':
                return 8;
            case '32':
                return 'null';
            default:
                return 0;
        }
    }
    /**
     * 判断当前 ‘气球’是否存在 存在则删除 不存在则添加
     *  @param{array} domlist现数据列表 
     * @param{object} obj 新传过来‘气球’的数据
     * @return{array} 返回操作后的数据列表
     */
const change = (domList, obj) => {
    let list = domList;
    let key = true,
        indexs = 0;
    list.forEach((element, index) => {
        if (element.id === obj.id) {
            key = false;
            indexs = index;
        }
        element.sum = Getmatch(element.match);
    });
    if (key) {
        list.push(obj);
        return list;
    }
    list.splice(indexs, 1);
    return list;
}


const changesum = (sum, payload) => {
    let Fraction = Getmatch(payload.match);
    switch (Fraction) {
        case "/2":
            return sum / 2;
        case 'b0':
            return 0;
        case 'x2':
            return sum * 2;
        case 'null':
            return sum;
        default:
            return Fraction - 0 + sum;
    }
}

const changeBottom = (domlist) => {
    let height = window.innerHeight;
    domlist.forEach((element, index) => {
        element.bottom += 2;
        if (element.bottom >= height) {
            element.loss = true;
        }
    })
    return domlist;
}

const addLoss = (loss, domlist) => {
    loss = 0;
    domlist.forEach((element) => {
        if (element.loss) {
            loss += changesum(0, element);
        }
    })
    return loss;
}

export const reducer = (state = initData, action) => {
    switch (action.type) {
        case "CHANGE_DOM":
            return {...state, domList: change(state.domList, action.payload) };
        case "REMOTE_QIQIU":
            return {...state, sum: changesum(state.sum, action.payload) };
        case "REMOTE_QIQIU":
            return {...state, sum: changesum(state.sum, action.payload) };
        case "changeBottom":
            return {...state, domList: changeBottom(state.domList), loss: addLoss(state.loss, state.domList) };
        case "changeSpeed":
            return {...state, speed: action.payload }
        default:
            return state;
    }
}