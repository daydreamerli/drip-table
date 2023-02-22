/*
 * This file is part of the drip-table project.
 * @link     : https://drip-table.jd.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2021 JD Network Technology Co., Ltd.
 */

import './index.less';

import classNames from 'classnames';
import React from 'react';

export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  type?: 'primary' | 'dashed' | 'text' | 'link';
  shape?: 'circle' | 'round';
  size?: 'large' | 'middle' | 'small';
  danger?: boolean;
  ghost?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: React.DOMAttributes<HTMLButtonElement>['onClick'];
}
const prefixCls = 'jfe-drip-table-button';
const Button = React.memo((props: ButtonProps) => (
  <button
    type="button"
    style={props.style}
    className={classNames(`${prefixCls}`, props.className, {
      [`${prefixCls}-primary`]: props.type === 'primary',
      [`${prefixCls}-dashed`]: props.type === 'dashed',
      [`${prefixCls}-text`]: props.type === 'text',
      [`${prefixCls}-link`]: props.type === 'link',
      [`${prefixCls}-circle`]: props.shape === 'circle',
      [`${prefixCls}-round`]: props.shape === 'round',
      [`${prefixCls}-sm`]: props.size === 'small',
      [`${prefixCls}-lg`]: props.size === 'large',
      [`${prefixCls}-danger`]: props.danger,
      [`${prefixCls}-ghost`]: props.ghost,
      [`${prefixCls}-icon-only`]: !props.children && props.icon,
    })}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    { props.children && <span className={`${prefixCls}-label`}>{ props.children }</span> }
    { props.icon && <span className={`${prefixCls}-icon`}>{ props.icon }</span> }
  </button>
));

export default Button;
