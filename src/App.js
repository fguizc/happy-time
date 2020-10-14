import React, { useEffect, useState } from "react";
import "./App.css";
import {
  message,
  Statistic,
  TimePicker,
  Modal,
  Input,
  Skeleton,
  Divider,
} from "antd";
import Day from "dayjs";

import { SettingOutlined } from "@ant-design/icons";

const { Countdown } = Statistic;
const { confirm } = Modal;

const TODAY = Day();
const _DATE = TODAY.day();
const DEFAULT_DEAD_LINE = TODAY.startOf("day").set("hour", 18).valueOf();
const LOCAL_DEAD_LINE_KEY = "localDealLine";
const LOCAL_USER_NAME_KEY = "localUserName";
const isFriday = _DATE === 5;

let newDeadLine = 0;

function App() {
  const [dealLine, setdealLine] = useState(DEFAULT_DEAD_LINE);
  const [userName, setuserName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const _userName = localStorage.getItem(LOCAL_USER_NAME_KEY);
    if (_userName) {
      setuserName(_userName);
    } else {
      setModalVisible(true);
    }
  }, [userName]);

  const onFinish = () => {
    message.success(`下班啦！又是一天美好时间`);
  };

  const onTimeChange = (value) => {
    const hour = value.hour();
    const min = value.minute() || 0;
    const result = TODAY.startOf("day")
      .set("hour", hour)
      .set("minute", min)
      .valueOf();
    newDeadLine = result;
  };

  const onOpenTimeSetting = () => {
    confirm({
      content: (
        <div>
          <label htmlFor="">请选择下班时间：</label>
          <br />
          <TimePicker
            onChange={onTimeChange}
            disabledSeconds={disabledSeconds}
          />
          <br />
          {/* <label htmlFor="">是否记住下班时间：</label>
          <br />
          <Switch onChange={onSwitchChange} /> */}
        </div>
      ),
      icon: null,
      okText: "确定",
      cancelText: "取消",
      onOk() {
        setTimeout(() => {
          localStorage.setItem(LOCAL_DEAD_LINE_KEY, newDeadLine);
          setdealLine(newDeadLine);
        }, 0);
      },
    });
  };

  const disabledSeconds = () => {
    const _seconds = [];
    for (let i = 0; i < 60; i++) {
      if (i !== 0) {
        _seconds.push(i);
      }
    }
    return _seconds;
  };

  const onUserNameChange = (e) => {
    setuserName(e.target.value);
  };

  const onCheckValid = () => {
    if (userName) {
      localStorage.setItem(LOCAL_USER_NAME_KEY, userName);
      setModalVisible(false);
    } else {
      message.error("不允许昵称填写为空");
    }
  };

  return (
    <div className="App">
      <Modal
        title="Preparing..."
        maskClosable={false}
        closable={false}
        mask
        visible={modalVisible}
        cancelButtonProps={{
          disabled: true,
        }}
        onOk={onCheckValid}
      >
        请填写您的昵称：
        <Input
          onChange={onUserNameChange}
          value={userName}
          placeholder="填写完成后不可更改"
          maxLength={10}
        />
      </Modal>
      {modalVisible ? (
        <>
          {/* <Skeleton avatar shape="square" /> */}
          <Skeleton active />
          <Divider />
          <Skeleton active />
        </>
      ) : (
        <>
          <h2 className="username">Hi, {userName}</h2>
          <div className="card">
            {/* <EditTwoTone onClick={onRememberTime} className="edit-icon" /> */}
            <h2 className="card-title">
              距离下班时间：
              <SettingOutlined
                style={{
                  fontSize: "16px",
                  color: "#fb8e4f",
                  position: "absolute",
                  right: "20px",
                  top: "20px",
                }}
                onClick={onOpenTimeSetting}
              />
            </h2>
            <Countdown
              value={dealLine}
              format="HH:mm:ss:SSS"
              onFinish={onFinish}
            />
          </div>
          <div className="card">
            <h2 className="card-title">今天是周五吗？</h2>
            {isFriday ? (
              <div
                style={{
                  textAlign: "center",
                  fontSize: "50px",
                  fontWeight: "bolder",
                }}
              >
                是!
              </div>
            ) : (
              <div style={{ fontSize: "23px" }}>
                <span
                  aria-label="not friday"
                  aria-labelledby="not friday"
                  role="img"
                >
                  😢不是
                </span>
                <div>
                  距离周五还有{" "}
                  <span style={{ fontWeight: "600" }}>
                    {_DATE >= 0 && _DATE <= 4 ? 5 - _DATE : 6}
                  </span>{" "}
                  天
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(App);
