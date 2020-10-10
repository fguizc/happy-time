import React, { useEffect, useState } from "react";
import "./App.css";
import { message, Statistic, TimePicker, Modal, Switch, Input } from "antd";
import Day from "dayjs";

const { Countdown } = Statistic;
const { confirm } = Modal;

const TODAY = Day();
const _DATE = TODAY.day();
const DEFAULT_DEAD_LINE = TODAY.startOf("day").set("hour", 18).valueOf();
const LOCAL_DEAD_LINE_KEY = "localDealLine";
const LOCAL_USER_NAME_KEY = "localUserName";
const isFriday = _DATE === 5;

function App() {
  const [dealLine, setdealLine] = useState(DEFAULT_DEAD_LINE);
  const [userName, setuserName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const _userName = localStorage.getItem(LOCAL_USER_NAME_KEY);
    console.log("isFriday", isFriday);
    if (_userName) {
      setuserName(_userName);
    } else {
      setModalVisible(true);
    }
  }, []);

  const onFinish = () => {
    message.success(`下班啦！又是一天美好时间`);
  };

  const onTimeChange = () => {};

  const onSwitchChange = () => {};

  const onRememberTime = () => {
    confirm({
      content: (
        <div>
          <label htmlFor="">请选择下班时间：</label>
          <br />
          <TimePicker onChange={onTimeChange} />
          <br />
          <label htmlFor="">是否记住下班时间：</label>
          <br />
          <Switch onChange={onSwitchChange} />
        </div>
      ),
      icon: null,
      okText: "确定",
      cancelText: "取消",
      onOk(...arg) {
        console.log("OK", arg);

        localStorage.setItem(LOCAL_DEAD_LINE_KEY);
        setdealLine(arg);
      },
    });
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
      <h2 className="username">Hi, {userName}</h2>
      <div className="card">
        {/* <EditTwoTone onClick={onRememberTime} className="edit-icon" /> */}
        <h2 className="card-title">距离下班时间：</h2>
        <Countdown value={dealLine} format="HH:mm:ss:SSS" onFinish={onFinish} />
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
            <div>😢不是</div>
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
    </div>
  );
}

export default React.memo(App);
