/**
 *  Created by zhangshumeng on 2018/5/2
 */

import React, {Component} from 'react'

import Picker from 'iosselect/src/iosSelect'
import {options} from '../../config/Time'

import 'iosselect/src/iosSelect.css'
import './Personal.css'

import  pullDownIcon from '../../images/pulldown_triangle_icon@2x.png'

const oneSeasons = [
    {
        id: '1001',
        value: '全部类型',
    },
    {
        id: '1002',
        value: '提现',
    },
    {
        id: '1003',
        value: '收入',
    },
    {
        id: '1004',
        value: '推荐奖励',
    },
];

var selectedTime = ''

class PersonalDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noData: false,
            categoryName:'全部分类',
            categoryId: "1001",
            time:'全部时间',
            timeOneId: '全部时间',
            timeTwoid: '全部时间',
            isShowLoading:true
        }
    }

    componentWillMount() {
        document.title = '收入明细'
    }

    categoryOnClick(e) {
        e.stopPropagation()
        var categoryNameSelect = new Picker(1,
            [oneSeasons],
            {
                title: '选择分类',
                itemHeight: 50,
                itemShowCount: 5,
                showAnimate: true,
                oneLevelId: this.state.categoryId,
                callback: function (selectOneObj) {
                    this.setState({
                        categoryName: selectOneObj['value'],
                        categoryId: selectOneObj['id']
                    });
                }.bind(this)
            });
    }

    timeOnClick(e) {
        e.stopPropagation()
        var timeSelect = new Picker(
            2,
            options(),
            {
                title: '选择时间',
                itemHeight: 50,
                itemShowCount: 5,
                showAnimate: true,
                relation: [1],
                oneLevelId: this.state.timeOneId,
                twoLevelId: this.state.timeTwoid,
                callback: function (selectOneObj, selectTwoObj) {
                    this.setState({
                        time: selectOneObj['value'] + selectTwoObj['value'],
                        timeOneId: selectOneObj['id'],
                        timeTwoid: selectTwoObj['id']
                    })
                }.bind(this)

            })
    };

    contentHandler() {
        return(
            <div>{
                this.state.noData ? <div>暂无数据</div> : <div>暂无明细记录</div>
            }</div>
        );
    }

    render() {
        return (
            <div>
                <div className='personal_detail_bg'>
                    <div className='personal_detail_balanceText'>我的余额(元)</div>
                    <div>
                        <div className='personal_detail_balance'>99.0</div>
                        <div className='personal_detail_putforward'>提现</div>
                    </div>

                    <div className='personal_detail_bottom'>

                        <span className='personal_detail_bottom_category' onClick={(e) => this.categoryOnClick(e)}>{this.state.categoryName}
                            <img src={pullDownIcon} alt="" className='personal_detail_bottom_dropImg'/>
                        </span>

                        <span className='personal_detail_bottom_time' onClick={(e) => this.timeOnClick(e)}>{this.state.time}
                            <img src={pullDownIcon} alt="" className='personal_detail_bottom_dropImg'/>
                        </span>

                    </div>

                </div>

                {
                    this.contentHandler()
                }

            </div>
        );
    }
}

export default PersonalDetail;