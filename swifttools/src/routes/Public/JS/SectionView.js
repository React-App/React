/**
 *  Created by zhangshumeng on 2018/5/14
 */

import React, { Component } from 'react'

import '../Css/SectionView.css'

import rightArrow from '../../../images/Default/default_arrow_right@3x.png'
import rightRenew from '../../../images/Default/default_arrow_renew@3x.png'

/*
  leftTitle: 左边的标题
  rightImg: 右边的图片
 */

class SectionView extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className='sectionView'>
                <div className='sectionView_bg'>
                    <div className='sectionView_bg_leftTitle'>{!this.props.leftTitle ? '暂无数据' : this.props.leftTitle}</div>
                </div>
                <div className='sectionView_bg_rightBgImg'>
                    <img src={!this.props.rightImg ? rightArrow : this.props.rightImg} alt="" className='sectionView_bg_rightImg'/>
                </div>
            </div>
        );
    }
}

export default SectionView;