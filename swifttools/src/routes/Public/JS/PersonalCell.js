/**
 *  Created by zhangshumeng on 2018/5/14
 */

import React, {Component} from 'react'

import defaultUserIcon from '../../../images/Default/defaut_avatar@3x.png'
import follow from '../../../images/Default/default_follow_icon@3x.png'
import followed from '../../../images/Default/default_followed_icon@3x.png'

import '../Css/PersonalCell.css'

/*
    isFollow: true 显示关注/取消按钮 false 不显示
    isliveAuthState: true 显示直播认证状态 false 不显示
 */


class PersonalCell extends Component {

    userNameHandler() {
        var userName;
        if (this.props.object.name === null) {
            userName = this.props.object.mobile
        } else {
            userName = this.props.object.name
        }
        return userName;
    }

    isFollowBtn() {
        if (this.props.isFollow) {
            return <img src={follow} alt="" className='personalCell_bg_follow'/>
        }
        return null;
    }

    isHidLiveAuthState() {
        if (this.props.isliveAuthState) {
            return <div className='personalCell_bg_right_liveAuthState'>直播认证用户</div>
        }
        return null;
    }

    render() {
        return (
            <div className='personalCell'>
                <div className='personalCell_bg'>
                    <img src={this.props.object.head_img} alt="" className='personalCell_bg_userImg'/>
                    <div className='personalCell_bg_right'>
                        <div className='personalCell_bg_right_nameBg'>
                            <div className='personalCell_bg_right_userName'>{this.userNameHandler()}</div>
                            { this.isHidLiveAuthState() }
                        </div>
                        <div className='personalCell_bg_right_org'>{this.props.object.company_profile}</div>
                    </div>
                </div>
                { this.isFollowBtn() }
            </div>
        );
    }
}

export default PersonalCell;