/**
 *  Created by zhangshumeng on 2018/5/7
 */

import React, {Component} from 'react'

import Picker from 'iosselect/src/iosSelect'
import {options} from '../../config/Time'

import './Personal.css'
import 'iosselect/src/iosSelect.css'

import pullDownIcon from '../../images/pulldown_triangle_icon@2x.png'
import noDataIcon from '../../images/default_page_nodetail_icon@2x.png'
import commissionIcon from '../../images/income_icon_green@2x.png'
import rightArrowIcon from '../../images/Shape@2x.png'

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


class PersonalGoodsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryName:'全部分类',
            categoryId: "1001",
            time:'全部时间',
            timeOneId: '全部时间',
            timeTwoid: '全部时间',
            isShowLoading:true,
            noData: true,
            dataSource: ['', '', '', '', '', '',],
        }
    }

    componentWillMount() {
        document.title = '物品收入明细'
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
                    console.log(selectOneObj['value'])
                    this.setState({

                        time: selectOneObj['value'] == '全部时间' ? selectOneObj['value'] : selectOneObj['value'] + selectTwoObj['value'],
                        timeOneId: selectOneObj['id'],
                        timeTwoid: selectTwoObj['id']
                    })
                }.bind(this)

            })
    };

    contentHandler() {
        return(
            <div>{
                this.state.noData ?
                    <div className='personal_detail_content_cellBg'>{
                        this.state.dataSource.map((item) => {
                            return(
                                <ContentCell></ContentCell>
                            );
                        })
                    }</div>
                    :
                    <div className='personal_detail_content_noData'>
                        <img src={noDataIcon} alt="" className='personal_detail_content_noDataImg'/>
                        <div className='personal_detail_content_noDataText'>暂无明细记录</div>
                    </div>
            }</div>
        );
    }

    render() {
        return (
            <div>
                <div className='personal_detail_bg'>
                    <div className='personal_detail_balanceText'>我的物品（个）</div>
                    <div className='personal_detail_balance'>15</div>

                    <div className='personal_detail_bottom'>
                        <span className='personal_detail_bottom_category' onClick={(e) => this.categoryOnClick(e)}>{this.state.categoryName}
                            <img src={pullDownIcon} alt="" className='personal_detail_bottom_dropImg'/>
                        </span>

                        <span className='personal_detail_bottom_time' onClick={(e) => this.timeOnClick(e)}>{this.state.time}
                            <img src={pullDownIcon} alt="" className='personal_detail_bottom_dropImg'/>
                        </span>
                    </div>
                </div>

                {this.contentHandler()}
            </div>
        );
    }
}

export default PersonalGoodsList;

class ContentCell extends Component {

    render() {
        return(
            <div>

            </div>
        );
    }
}