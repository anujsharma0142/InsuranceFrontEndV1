import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

export default function Active({ hData }) {
  // Calculate total over-utilized hours
  const over = hData.overUtilizedHours.reduce((acc, curr) => acc + curr, 0);

  // Calculate total under-utilized hours
  const under = hData.underUtilizedHours.reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      {/* Display "Extra" and "Idle" statistics */}
      <Row className='' gutter={16}>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Extra"
              value={over}
              valueStyle={{ color: '#cf1322', fontSize: '13px' }}
              prefix={<ArrowUpOutlined />}
              suffix="hr"
            />
          </Card>
        </Col>

        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Idle"
              value={under}
              valueStyle={{ color: '#3f8600', fontSize: '13px' }}
              prefix={<ArrowDownOutlined />}
              suffix="hr"
            />
          </Card>
        </Col>
      </Row>

      {/* Display "Extra/Idle" and "Unused" statistics */}
      <Row className="mt-1" gutter={16}>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Extra/Idle"
              value={over - under}
              valueStyle={{ color: '#3f8600', fontSize: '12px' }}
              suffix="hr"
            />
          </Card>
        </Col>

        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Unused"
              value={hData.unutilizedHours}
              valueStyle={{ color: 'green', fontSize: '12px' }}
              suffix="hr"
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
