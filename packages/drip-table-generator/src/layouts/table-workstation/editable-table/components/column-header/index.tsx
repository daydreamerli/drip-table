/**
 * This file is part of the drip-table project.
 * @link     : https://drip-table.jd.com/
 * @author   : helloqian12138 (johnhello12138@163.com)
 * @modifier : helloqian12138 (johnhello12138@163.com)
 * @copyright: Copyright (c) 2020 JD Network Technology Co., Ltd.
 */
import './index.less';

import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import React from 'react';

import RichText from '@/components/RichText';
import { DTGTableConfig } from '@/context';

export interface ColumnHeaderProps {
  tableConfig: DTGTableConfig;
  column: DTGTableConfig['columns'][number];
  key?: string | number;
}
const ColumnHeader = (props: ColumnHeaderProps) => {
  let columnTitle = '';
  if (typeof props.column.title === 'string') {
    columnTitle = props.column.title;
  } else if (typeof props.column.title?.body === 'string') {
    columnTitle = props.column.title?.body;
  } else {
    columnTitle = props.column.title?.body?.content;
  }
  return (
    <div
      key={props.key}
      className={classNames('jfe-drip-table-generator-workstation-table-header-item', {
        [props.tableConfig.configs.size || 'default']: props.tableConfig.configs.size,
      })}
    >
      <RichText
        className="jfe-drip-table-generator-workstation-editable-table-column-title"
        style={{ width: props.column.description ? 'calc(100% - 34px)' : void 0 }}
        html={columnTitle}
      />
      { props.column.description && (
      <Tooltip placement="top" overlay={<RichText html={props.column.description} />}>
        <span style={{ marginLeft: 6, verticalAlign: 'top' }}><QuestionCircleOutlined /></span>
      </Tooltip>
      ) }
    </div>
  );
};

export default ColumnHeader;